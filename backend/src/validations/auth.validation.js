import { z } from "zod";

const strongPassword = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .regex(/[A-Za-z]/, "Password must include at least one letter.")
  .regex(/[0-9]/, "Password must include at least one number.");

export const signupValidation = z
  .object({
    firstName: z.string().trim().min(2, "First name is required.").max(60),
    lastName: z.string().trim().max(60).optional().default(""),
    name: z.string().trim().max(120).optional(),
    email: z.string().trim().email("Please enter a valid email address."),
    phoneNumber: z.string().trim().max(30).optional().default(""),
    country: z.string().trim().max(80).optional().default(""),
    state: z.string().trim().max(80).optional().default(""),
    city: z.string().trim().max(80).optional().default(""),
    password: strongPassword,
  })
  .passthrough();

export const loginValidation = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

export const refreshTokenValidation = z.object({
  refreshToken: z.string().trim().optional(),
});
