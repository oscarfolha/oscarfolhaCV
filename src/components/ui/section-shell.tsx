import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionShellProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className, children }: Readonly<SectionShellProps>) {
  return (
    <section className={cn("section-divider relative scroll-mt-28 py-18 sm:py-24 lg:py-28", className)} id={id}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}
