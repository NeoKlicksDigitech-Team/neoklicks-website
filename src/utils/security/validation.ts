import { z } from "zod";

/**
 * Strict validation schema for contact form submissions.
 * Using Zod allows robust type validation, range checks, and strict field enforcement.
 * .strict() enforces that any unexpected or extra properties in the request payload are rejected immediately.
 */
export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be less than 100 characters.")
    .trim(),
  
  email: z.string()
    .email("Please enter a valid email address.")
    .max(254, "Email must be less than 254 characters.")
    .trim(),
  
  projectType: z.enum([
    "Web Development",
    "AI/ML Solutions & Automation",
    "E-Commerce Development",
    "SEO Services",
    "Digital Marketing & Ads",
    "UI/UX Design",
    "Custom Software / Portals",
    "Maintenance & Support",
    "Other / Unsure"
  ]),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message must be less than 5000 characters.")
    .trim(),
}).strict();

export type ContactFormData = z.infer<typeof contactSchema>;
