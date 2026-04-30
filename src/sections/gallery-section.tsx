"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { galleryImages } from "@/assets/gallery";
import { Lightbox } from "@/components/ui/lightbox";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/utils/cn";

const aspectClasses = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
} as const;

export function GallerySection() {
  const t = useTranslations("Gallery");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      galleryImages.map((item) => ({
        ...item,
        alt: t(`items.${item.id}.alt`),
        title: t(`items.${item.id}.title`),
      })),
    [t],
  );

  return (
    <SectionShell id="gallery">
      <SectionHeading align="center" description={t("description")} eyebrow={t("eyebrow")} title={t("title")} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Reveal delay={index * 0.05} key={item.id}>
            <motion.button
              className={cn(
                "group panel relative w-full overflow-hidden rounded-[1.8rem] text-left",
                aspectClasses[item.aspect],
              )}
              onClick={() => setActiveIndex(index)}
              type="button"
              whileHover={{ y: -3, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <Image alt={item.alt} className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" src={item.src} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-200/80">{t("open")}</p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      <Lightbox
        index={activeIndex}
        items={items}
        onClose={() => setActiveIndex(null)}
        onNext={() => setActiveIndex((current) => (current === null ? null : (current + 1) % items.length))}
        onPrevious={() => setActiveIndex((current) => (current === null ? null : (current - 1 + items.length) % items.length))}
      />
    </SectionShell>
  );
}
