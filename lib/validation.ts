import { z } from "zod";

export const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
export const ALLOWED_ATTACHMENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

export interface ContactValidationMessages {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  messageMin: string;
  messageMax: string;
  fileTooLarge: string;
  fileInvalidType: string;
}

function isEmptyFileList(files: FileList | undefined) {
  return !files || files.length === 0;
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
    attachment: z
      .custom<FileList | undefined>()
      .optional()
      .refine(
        (files) => isEmptyFileList(files) || files![0].size <= MAX_ATTACHMENT_BYTES,
        messages.fileTooLarge,
      )
      .refine(
        (files) =>
          isEmptyFileList(files) || ALLOWED_ATTACHMENT_TYPES.includes(files![0].type),
        messages.fileInvalidType,
      ),
  });
}

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactSchema>
>;
