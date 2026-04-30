"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

type LightboxItem = {
  alt: string;
  src: string;
  title: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function Lightbox({ items, index, onClose, onNext, onPrevious }: Readonly<LightboxProps>) {
  const currentItem = index === null ? null : items[index];

  useEffect(() => {
    if (index === null) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {currentItem ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-md"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          <button
            aria-label="Close gallery lightbox"
            className="absolute inset-0 cursor-zoom-out"
            onClick={onClose}
            type="button"
          />
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5 rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-2xl sm:p-6"
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{currentItem.title}</p>
              </div>
              <Button aria-label="Close lightbox" className="h-11 w-11 rounded-full px-0" onClick={onClose} variant="secondary">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/90">
              <div className="relative w-full">
                <Image alt={currentItem.alt} className="h-auto w-full object-contain" src={currentItem.src} width={1200} height={800} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Button onClick={onPrevious} type="button" variant="secondary">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button onClick={onNext} type="button" variant="secondary">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
