import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/utils/site-config";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="px-6 pb-8 pt-10 text-sm text-muted lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center light:border-slate-900/8 sm:flex-row sm:text-left">
        <p>
          {t("copy", { year: new Date().getFullYear() })} {siteConfig.name}
        </p>
        <p>{t("built")}</p>
      </div>
    </footer>
  );
}
