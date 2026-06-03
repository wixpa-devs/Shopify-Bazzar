import { z } from "zod";
import { MAX_FREE_COPIES } from "../constants.js";

export const subscriberValidation = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  copyCodeCount: z
    .number()
    .int()
    .min(0)
    .max(MAX_FREE_COPIES)
    .optional(),
});

export const subscriberEmailValidation = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
});
