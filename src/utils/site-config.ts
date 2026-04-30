function normalizeSiteUrl(value: string) {
  return value.replace(/\/$/, "");
}

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
  name: "Óscar Folha",
  title: "Software Engineer",
  email: "oscarfolha@hotmail.com",
  location: "Matosinhos, Portugal",
  birthday: "15-04-2000",
  siteUrl: normalizeSiteUrl(envSiteUrl?.trim() || "https://oscar-folha.dev"),
  localeLabels: {
    en: "English",
    pt: "Português",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    zh: "中文",
  },
  socialLinks: [
    {
      id: "email",
      href: "mailto:oscarfolha@hotmail.com",
      placeholder: false,
    },
    {
      id: "github",
      href: "https://github.com/oscarfolha?tab=repositories",
      placeholder: false,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/%C3%B3scar-folha-50a7a923a/",
      placeholder: false,
    },

  ],
} as const;
