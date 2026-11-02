"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { FormMessages } from "@/types/templates.types";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{6,}$/;
// The thank-you message hides itself after this long and the empty form comes back.
const HIDE_AFTER_MS = 5000;

/**
 * Checks the fields of a form (all are required; email and tel get a format check) and shows
 * a thank-you message that hides itself after a few seconds. There is no backend yet, so nothing is sent anywhere.
 */
export function useFormSubmit(fields: { name: string; type: string }[], messages?: FormMessages) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!sent) return;
    timer.current = setTimeout(() => setSent(false), HIDE_AFTER_MS);
    return () => clearTimeout(timer.current);
  }, [sent]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const field of fields) {
      const value = String(data.get(field.name) ?? "").trim();
      if (!value) next[field.name] = messages?.requiredError ?? "";
      else if (field.type === "email" && !EMAIL.test(value)) next[field.name] = messages?.emailError ?? "";
      else if (field.type === "tel" && !PHONE.test(value)) next[field.name] = messages?.phoneError ?? "";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      form.reset();
    }, 700);
  };

  return { errors, sending, sent, setSent, onSubmit, sendingLabel: messages?.sending };
}
