import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/utils/security/rate-limiter";
import { contactSchema } from "@/utils/security/validation";
import { sanitizeData } from "@/utils/security/sanitize";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check (OWASP A04:2021 - Rate Limiting / Brute Force Mitigation)
    const ip = getClientIp(req);
    // Limit contact form to 5 submissions per minute per IP address
    const rateLimit = checkRateLimit(`contact:${ip}`, { limit: 5, windowMs: 60 * 1000 });

    if (!rateLimit.allowed) {
      const retryAfterSeconds = Math.ceil((rateLimit.resetTime - Date.now()) / 1000);
      return NextResponse.json(
        { 
          success: false, 
          error: "Too many requests. Please wait a moment before trying again." 
        },
        { 
          status: 429,
          headers: {
            "Retry-After": retryAfterSeconds.toString(),
            "X-RateLimit-Limit": rateLimit.limit.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimit.resetTime.toString(),
          }
        }
      );
    }

    // Parse the JSON request body
    let rawBody;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    // 2. Strict Input Validation (OWASP A03:2021 - Injection Prevention & Data Validation)
    const validationResult = contactSchema.safeParse(rawBody);
    if (!validationResult.success) {
      // Get the first friendly error message from the validation errors
      const firstError = validationResult.error.issues[0]?.message || "Invalid input data.";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    // 3. Input Sanitization (OWASP A03:2021 - Cross-Site Scripting (XSS) Prevention)
    // Deeply sanitizes validated data by stripping HTML/script tags and escaping special characters
    const sanitizedData = sanitizeData(validationResult.data);
    const { name, email, projectType, message } = sanitizedData;

    // 4. Secure API Key Handling & Resend Email Dispatch
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not defined. Simulating success in development/demo mode.");
      
      // Artificial delay to mimic server roundtrip
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: "Development Demo: Message validated & sanitized! Set up RESEND_API_KEY in .env.local to send real emails.",
      });
    }

    const resend = new Resend(apiKey);
    
    const { data, error } = await resend.emails.send({
      from: "NeoKlicks Contact Form <onboarding@resend.dev>",
      to: "team@neoklicksdigitech.com",
      subject: `New Lead: ${projectType} - ${name}`,
      text: `You have received a new contact request from NeoKlicks DigiTech:\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #071D49; line-height: 1.5;">
          <h2 style="background: linear-gradient(135deg, #FF6B00 0%, #FF2D7A 100%); -webkit-background-clip: text; color: transparent; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 14px; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-top: 30px;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center;">Inquiry sent from NeoKlicks Digitech Website Contact Form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    // Set rate limit headers in success response too
    const response = NextResponse.json({ success: true, data });
    response.headers.set("X-RateLimit-Limit", rateLimit.limit.toString());
    response.headers.set("X-RateLimit-Remaining", rateLimit.remaining.toString());
    response.headers.set("X-RateLimit-Reset", rateLimit.resetTime.toString());
    return response;
  } catch (err: any) {
    console.error("Contact API Route Error:", err);
    return NextResponse.json({ success: false, error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
