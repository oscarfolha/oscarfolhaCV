import { AtSign, BriefcaseBusiness, FileDown, Mail, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteConfig } from "@/utils/site-config";

const socialIcons = {
  cv: FileDown,
  email: Mail,
  github: AtSign,
  linkedin: BriefcaseBusiness,
} as const;

export async function ContactSection() {
  const t = await getTranslations("Contact");

  return (
    <SectionShell id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading description={t("description")} eyebrow={t("eyebrow")} title={t("title")} />
          <Reveal className="mt-8">
            <SurfaceCard className="p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-100 light:bg-sky-100 light:text-slate-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{t("emailLabel")}</p>
                  <a className="mt-2 inline-block text-lg font-semibold text-foreground hover:text-sky-200 light:hover:text-sky-900" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-100 light:bg-sky-100 light:text-slate-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{t("locationLabel")}</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>
          <Reveal className="mt-6" delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.socialLinks.map((link) => {
                const Icon = socialIcons[link.id];

                return (
                  <SurfaceCard className="flex h-full flex-col justify-between p-5" key={link.id}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-sky-100 light:bg-sky-200/20 light:text-sky-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-semibold text-foreground">{t(`social.${link.id}`)}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{link.placeholder ? t("social.placeholder") : t("social.ready")}</p>
                    </div>
                    <Button className="mt-6" href={link.href} variant="secondary">
                      {t("social.open")}
                    </Button>
                  </SurfaceCard>
                );
              })}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </SectionShell>
  );
}
