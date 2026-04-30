import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SurfaceCard({ children, className, ...props }: SurfaceCardProps) {
  return (
    <div className={cn("panel rounded-[2rem]", className)} {...props}>
      {children}
    </div>
  );
}
