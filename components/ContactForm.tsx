"use client";

import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  Paperclip,
  Send,
  TriangleAlert,
  X,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import {
  ALLOWED_ATTACHMENT_TYPES,
  createContactSchema,
  type ContactFormValues,
} from "@/lib/validation";
import type { ContactStatus } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export function ContactForm() {
  const { dict } = useLocale();
  const [status, setStatus] = useState<ContactStatus>("idle");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const schema = useMemo(
    () => createContactSchema(dict.contact.validation),
    [dict],
  );

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const { ref: fileFieldRef, ...fileField } = register("attachment");
  const selectedFile = watch("attachment")?.[0];

  const clearFile = () => {
    resetField("attachment");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      if (values.attachment && values.attachment.length > 0) {
        formData.append("attachment", values.attachment[0]);
      }

      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {dict.contact.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder={dict.contact.namePlaceholder}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {dict.contact.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder={dict.contact.emailPlaceholder}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {dict.contact.messageLabel}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={dict.contact.messagePlaceholder}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1.5 text-xs text-red-500"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="attachment"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {dict.contact.fileLabel}
        </label>
        <div className="flex items-center gap-2">
          <label
            htmlFor="attachment"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground transition-colors hover:border-accent"
          >
            <Paperclip className="h-4 w-4 shrink-0" aria-hidden="true" />
            {selectedFile ? selectedFile.name : dict.contact.fileHint}
          </label>
          <input
            id="attachment"
            type="file"
            accept={ALLOWED_ATTACHMENT_TYPES.join(",")}
            className="sr-only"
            aria-invalid={errors.attachment ? "true" : "false"}
            aria-describedby={errors.attachment ? "attachment-error" : undefined}
            {...fileField}
            ref={(el) => {
              fileFieldRef(el);
              fileInputRef.current = el;
            }}
          />
          {selectedFile && (
            <button
              type="button"
              onClick={clearFile}
              aria-label={dict.contact.fileRemoveLabel}
              className="rounded-lg p-2 text-foreground/60 transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
        {errors.attachment && (
          <p
            id="attachment-error"
            role="alert"
            className="mt-1.5 text-xs text-red-500"
          >
            {errors.attachment.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        {isSubmitting ? dict.contact.submitting : dict.contact.submit}
      </button>

      <div aria-live="polite" className="min-h-6">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-emerald-500">
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            {dict.contact.success}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-red-500">
            <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            {dict.contact.error}
          </p>
        )}
      </div>
    </form>
  );
}
