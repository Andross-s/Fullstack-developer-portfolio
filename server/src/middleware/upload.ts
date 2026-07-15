import multer from "multer";

// Keep in sync with lib/validation.ts on the frontend.
export const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
export const ALLOWED_ATTACHMENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

export class InvalidFileTypeError extends Error {}

export const contactUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_ATTACHMENT_BYTES, files: 1 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_ATTACHMENT_TYPES.includes(file.mimetype)) {
      cb(new InvalidFileTypeError("Unsupported file type"));
      return;
    }
    cb(null, true);
  },
}).single("attachment");
