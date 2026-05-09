import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email(),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(2000),
});

export const schoolInquirySchema = z.object({
  school_name: z.string().min(2).max(180),
  contact_name: z.string().min(2).max(180),
  email: z.string().email(),
  phone: z.string().optional(),
  city: z.string().optional(),
  requirements: z.string().max(2000).optional(),
});
