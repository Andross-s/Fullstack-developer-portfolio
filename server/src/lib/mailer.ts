import dns from "node:dns/promises";
import net from "node:net";
import nodemailer from "nodemailer";
import type { ContactPayload } from "../validation/contactSchema.js";

// Some hosts (e.g. Render) advertise a non-functional IPv6 route: Nodemailer
// resolves both A and AAAA records and picks one at random, so connecting by
// hostname intermittently tries an unreachable IPv6 address for Gmail's SMTP
// server (ENETUNREACH/ETIMEDOUT). Resolving to IPv4 ourselves avoids that;
// `tls.servername` keeps SNI/certificate validation pinned to the real host.
async function resolveSmtpHost(host: string) {
  if (net.isIP(host)) return host;
  const [address] = await dns.resolve4(host);
  return address;
}

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

  const smtpHost = process.env.SMTP_HOST ?? "";
  const secure = process.env.SMTP_SECURE === "true";
  const transporter = nodemailer.createTransport({
    host: await resolveSmtpHost(smtpHost),
    port: Number(process.env.SMTP_PORT ?? 587),
    secure,
    // When not using implicit TLS (port 465), require the STARTTLS upgrade
    // to succeed rather than silently falling back to a plaintext connection.
    requireTLS: !secure,
    tls: { servername: smtpHost },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

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
