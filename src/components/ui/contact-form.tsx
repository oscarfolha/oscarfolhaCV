"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, type SyntheticEvent } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/utils/site-config";
import { isValidEmail } from "@/utils/validation";

type FormState = {
  company: string;
  email: string;
  message: string;
  name: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  company: "",
  email: "",
  message: "",
  name: "",
};

export function ContactForm() {
  const t = useTranslations("Contact");
  const [formState, setFormState] = useState<FormState>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleChange(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
    setFormErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = t("errors.nameRequired");
    }

    if (!formState.email.trim()) {
      nextErrors.email = t("errors.emailRequired");
    } else if (!isValidEmail(formState.email)) {
      nextErrors.email = t("errors.emailInvalid");
    }

    if (!formState.message.trim()) {
      nextErrors.message = t("errors.messageRequired");
    }

    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      setFeedback(null);
      return;
    }

    setIsSubmitting(true);

    const subjectSuffix = formState.company ? ` · ${formState.company}` : "";

    const params = new URLSearchParams({
      subject: `${t("form.subjectPrefix")} ${formState.name}${subjectSuffix}`,
      body: [
        `${t("form.name")}: ${formState.name}`,
        `${t("form.email")}: ${formState.email}`,
        `${t("form.company")}: ${formState.company || "-"}`,
        "",
        formState.message,
      ].join("\n"),
    });

    globalThis.location.href = `mailto:${siteConfig.email}?${params.toString()}`;
    setFeedback(t("form.success"));
    setFormState(initialState);
    setIsSubmitting(false);
  }

  return (
    <form className="panel rounded-[2rem] p-6 sm:p-8" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t("form.name")}
          <input
            aria-invalid={Boolean(formErrors.name)}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-foreground outline-none transition focus:border-sky-300/40 light:border-slate-900/10 light:bg-slate-900/4"
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder={t("form.namePlaceholder")}
            value={formState.name}
          />
          {formErrors.name ? <span className="text-sm text-rose-300">{formErrors.name}</span> : null}
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t("form.email")}
          <input
            aria-invalid={Boolean(formErrors.email)}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-foreground outline-none transition focus:border-sky-300/40 light:border-slate-900/10 light:bg-slate-900/4"
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder={t("form.emailPlaceholder")}
            type="email"
            value={formState.email}
          />
          {formErrors.email ? <span className="text-sm text-rose-300">{formErrors.email}</span> : null}
        </label>
      </div>
      <div className="mt-5 grid gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t("form.company")}
          <input
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-foreground outline-none transition focus:border-sky-300/40 light:border-slate-900/10 light:bg-slate-900/4"
            onChange={(event) => handleChange("company", event.target.value)}
            placeholder={t("form.companyPlaceholder")}
            value={formState.company}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t("form.message")}
          <textarea
            aria-invalid={Boolean(formErrors.message)}
            className="min-h-[168px] rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-base text-foreground outline-none transition focus:border-sky-300/40 light:border-slate-900/10 light:bg-slate-900/4"
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder={t("form.messagePlaceholder")}
            value={formState.message}
          />
          {formErrors.message ? <span className="text-sm text-rose-300">{formErrors.message}</span> : null}
        </label>
      </div>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div aria-live="polite" className="text-sm text-muted">
          {feedback ? <span className="text-emerald-300 light:text-emerald-700">{feedback}</span> : t("form.helper")}
        </div>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? t("form.submitting") : t("form.submit")}
          {isSubmitting ? <ArrowUpRight className="h-4 w-4" /> : <Send className="h-4 w-4" />}
        </Button>
      </div>
    </form>
  );
}
