import { Resend } from "resend";
import type { ContactPayload } from "../validation/contactSchema.js";

export interface ContactAttachment {
  buffer: Buffer;
  filename: string;
  contentType: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(
  payload: ContactPayload,
  attachment?: ContactAttachment,
) {
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  if (!receiver) {
    throw new Error("CONTACT_RECEIVER_EMAIL is not configured");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const message = escapeHtml(payload.message).replace(/\n/g, "<br/>");

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact Form <onboarding@resend.dev>",
    to: receiver,
    replyTo: payload.email,
    subject: `New message from ${payload.name}`,
    text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    attachments: attachment
      ? [
          {
            content: attachment.buffer,
            filename: attachment.filename,
            contentType: attachment.contentType,
          },
        ]
      : undefined,
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }
}
