import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/utils/site-config";

export async function HeroSection() {
  const t = await getTranslations("Hero");

  return (
    <SectionShell className="overflow-hidden border-b-0 pt-10 sm:pt-14 lg:pt-20" id="home">
      <div className="grid items-center gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/90 light:border-sky-300/30 light:bg-sky-200/10 light:text-sky-950">
              {t("eyebrow")}
            </span>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.32em] text-muted">{t("greeting")}</p>
            <h1 className="mt-4 max-w-4xl bg-gradient-to-r from-foreground via-sky-100 to-sky-200 bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent light:from-slate-950 light:via-slate-800 light:to-sky-700 sm:text-6xl lg:text-7xl">
              {t("titleLead")} <span className="block">{t("titleAccent")}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted/90 sm:text-lg">{t("intro")}</p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button className="w-full justify-center sm:w-auto" href={`mailto:${siteConfig.email}`}>
                {t("primaryCta")}
                <Mail className="h-4 w-4" />
              </Button>
              <Button className="w-full justify-center sm:w-auto" href="#projects" variant="secondary">
                {t("secondaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="panel rounded-[1.75rem] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{t("availability")}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{t("availabilityValue")}</p>
              </div>
              <div className="panel rounded-[1.75rem] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{t("locationLabel")}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{siteConfig.location}</p>
              </div>
              <div className="panel rounded-[1.75rem] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{t("experienceLabel")}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{t("experienceValue")}</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent rounded-[2rem] blur-2xl" />
            <div className="panel relative overflow-hidden rounded-[2rem] aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
              <Image
                alt="Óscar Folha"
                className="object-cover object-center"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                src="/me.jpeg"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
