"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/utils/site-config";

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <label className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm text-foreground light:border-slate-900/10 light:bg-slate-900/4">
      <Languages className="h-4 w-4 text-muted" />
      <span className="sr-only">{t("label")}</span>
      <select
        aria-label={t("label")}
        className="bg-transparent pr-1 outline-none"
        defaultValue={locale}
        disabled={isPending}
        onChange={(event) => {
          const nextLocale = event.target.value;
          startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
          });
        }}
      >
        {routing.locales.map((item) => (
          <option className="bg-slate-950 text-white light:bg-white light:text-slate-900" key={item} value={item}>
            {siteConfig.localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
