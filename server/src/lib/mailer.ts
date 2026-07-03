import nodemailer from "nodemailer";
import type { ContactPayload } from "../validation/contactSchema.js";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(payload: ContactPayload) {
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  if (!receiver) {
    throw new Error("CONTACT_RECEIVER_EMAIL is not configured");
  }

  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const message = escapeHtml(payload.message).replace(/\n/g, "<br/>");

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to: receiver,
    replyTo: payload.email,
    subject: `New message from ${payload.name}`,
    text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
  });
}
