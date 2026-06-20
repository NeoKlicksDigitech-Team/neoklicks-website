import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  try {
    const payload = await req.json();
    // Webhooks from Supabase triggers pass the payload containing record details
    const record = payload.record || payload;
    const { name, email, project_type, message } = record || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields in payload (name, email, message)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Send team notification email to neoklicksdigitech@gmail.com
    const teamRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "NeoKlicks Contact <team@neoklicksdigitech.com>",
        to: ["neoklicksdigitech@gmail.com"],
        subject: "New Contact Form Submission - NeoKlicks Digitech",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #071D49; line-height: 1.5; padding: 20px; border: 1px solid #f1f5f9; border-radius: 16px;">
            <h2 style="background: linear-gradient(135deg, #FF6B00 0%, #FF2D7A 100%); -webkit-background-clip: text; color: transparent; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 0;">New Submission Received</h2>
            
            <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 15px 0;"><strong>Work Email:</strong> <a href="mailto:${email}" style="color: #FF6B00; text-decoration: none;">${email}</a></p>
            <p style="margin: 15px 0;"><strong>Project Type:</strong> ${project_type || "N/A"}</p>
            
            <p style="margin: 20px 0 5px 0;"><strong>Message:</strong></p>
            <div style="background: #f8fafc; padding: 15px; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 14px; white-space: pre-wrap; color: #334155;">${message}</div>
            
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-top: 30px;" />
            <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-bottom: 0;">This email was sent automatically via Supabase Edge Functions & Resend API.</p>
          </div>
        `,
      }),
    });

    const teamData = await teamRes.json();
    if (!teamRes.ok) {
      throw new Error("Team notification error: " + JSON.stringify(teamData));
    }

    // 2. Send client confirmation email to the submitter (email)
    const clientRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "NeoKlicks DigiTech <team@neoklicksdigitech.com>",
        to: [email],
        subject: "We've Received Your Message - NeoKlicks Digitech",
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1E293B; line-height: 1.6; padding: 30px; border: 1px solid #E2E8F0; border-radius: 16px; background-color: #FFFFFF;">
            <!-- Logo Header -->
            <div style="text-align: center; margin-bottom: 25px; border-bottom: 1px solid #F1F5F9; padding-bottom: 20px;">
              <img src="https://neoklicksdigitech.com/logo.png" alt="NeoKlicks DigiTech Logo" style="max-height: 50px; width: auto; display: inline-block;" />
            </div>

            <!-- Greeting -->
            <h2 style="color: #071D49; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 15px;">Hi ${name},</h2>
            
            <p style="font-size: 15px; margin-bottom: 20px;">
              Thank you for reaching out to NeoKlicks DigiTech. We have received your inquiry and our team is already reviewing your details.
            </p>

            <!-- Summary Card -->
            <div style="background-color: #F8FAFC; border-left: 4px solid #FF6B00; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #071D49; font-size: 13px; font-family: monospace; font-weight: bold; margin-top: 0; margin-bottom: 12px; letter-spacing: 0.05em;">YOUR INQUIRY SUMMARY</h3>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Project Type:</strong> ${project_type || "N/A"}</p>
              <p style="margin: 6px 0 0 0; font-size: 14px; font-weight: bold; color: #475569;">Message:</p>
              <div style="font-size: 14px; color: #334155; margin-top: 5px; white-space: pre-wrap; line-height: 1.5;">${message}</div>
            </div>

            <p style="font-size: 15px; margin-bottom: 25px;">
              Our team will review your message and get back to you within <strong>2-3 hours</strong> with initial recommendations or next steps.
            </p>

            <div style="border-top: 1px solid #F1F5F9; padding-top: 20px; margin-top: 30px;">
              <p style="font-size: 14px; color: #64748B; margin-bottom: 0;">
                Best regards,<br />
                <strong style="color: #071D49;">Team NeoKlicks DigiTech</strong>
              </p>
            </div>
            
            <!-- Styled visual footer accent -->
            <div style="height: 4px; background: linear-gradient(90deg, #FF6B00 0%, #FF2D7A 100%); margin-top: 30px; border-radius: 2px;"></div>
          </div>
        `,
      }),
    });

    const clientData = await clientRes.json();
    if (!clientRes.ok) {
      throw new Error("Client confirmation error: " + JSON.stringify(clientData));
    }

    return new Response(JSON.stringify({ success: true, team: teamData, client: clientData }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
