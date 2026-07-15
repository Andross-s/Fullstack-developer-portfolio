import type { NextFunction, Request, Response } from "express";
import { contactSchema } from "../validation/contactSchema.js";
import { sendContactEmail } from "../lib/mailer.js";

export async function handleContact(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Validation failed",
      issues: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const attachment = req.file
    ? {
        buffer: req.file.buffer,
        filename: req.file.originalname,
        contentType: req.file.mimetype,
      }
    : undefined;

  try {
    await sendContactEmail(parsed.data, attachment);
    res.status(200).json({ message: "Message sent" });
  } catch (err) {
    next(err);
  }
}
