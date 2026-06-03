import { z } from "zod";

export const contactValidation = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional().default(""),
  subject: z.string().trim().max(180).optional().default("Website inquiry"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000),
});
