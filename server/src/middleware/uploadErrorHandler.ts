import type { ErrorRequestHandler } from "express";
import { MulterError } from "multer";
import { InvalidFileTypeError } from "./upload.js";

export const uploadErrorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (err instanceof MulterError) {
    const message =
      err.code === "LIMIT_FILE_SIZE"
        ? "Attachment exceeds the 5MB size limit."
        : "Invalid file upload.";
    res.status(400).json({
      error: "Validation failed",
      issues: { attachment: [message] },
    });
    return;
  }

  if (err instanceof InvalidFileTypeError) {
    res.status(400).json({
      error: "Validation failed",
      issues: { attachment: ["Only JPG, PNG, WEBP, or PDF files are allowed."] },
    });
    return;
  }

  next(err);
};
