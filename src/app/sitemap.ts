import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/utils/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    url: `${siteConfig.siteUrl}/${locale}`,
  }));
}
