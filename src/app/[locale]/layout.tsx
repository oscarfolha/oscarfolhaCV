import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/utils/site-config";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("description"),
    keywords: [
      "Oscar Folha",
      "Óscar Folha",
      "Software Engineer",
      "Full Stack Developer",
      "TypeScript",
      "React",
      "Node.js",
      "Portugal",
    ],
    robots: {
      follow: true,
      index: true,
      googleBot: {
        follow: true,
        index: true,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((item) => [item, `/${item}`])),
    },
    openGraph: {
      description: t("description"),
      images: [
        {
          alt: siteConfig.name,
          height: 630,
          url: "/gallery/cover.svg",
          width: 1200,
        },
      ],
      locale,
      siteName: siteConfig.name,
      title: t("title"),
      type: "website",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      description: t("description"),
      images: ["/gallery/cover.svg"],
      title: t("title"),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Matosinhos",
      addressCountry: "PT",
    },
    url: `${siteConfig.siteUrl}/${locale}`,
    sameAs: siteConfig.socialLinks.map((link) => link.href).filter((href) => href.startsWith("http")),
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="relative min-h-screen overflow-x-clip">
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
          type="application/ld+json"
        />
        <div aria-hidden className="page-gradient pointer-events-none fixed inset-0 -z-10" />
        <Navbar />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
