import { z } from "zod";

export interface ContactValidationMessages {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  messageMin: string;
  messageMax: string;
}

export function createContactSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin).max(80, messages.nameMax),
    email: z.string().trim().email(messages.emailInvalid),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
  });
}

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactSchema>
>;
