import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium uppercase leading-5 tracking-normal transition-colors",
  {
    variants: {
      variant: {
        incident:
          "border-red-400/25 bg-red-500/10 text-red-200 shadow-[0_0_20px_rgba(248,113,113,0.08)]",
        research:
          "border-sky-400/25 bg-sky-500/10 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.08)]",
        engineering:
          "border-emerald-400/25 bg-emerald-500/10 text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.08)]",
        security:
          "border-amber-400/25 bg-amber-500/10 text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.08)]",
        labs:
          "border-violet-400/25 bg-violet-500/10 text-violet-200 shadow-[0_0_20px_rgba(167,139,250,0.08)]",
        "post-mortem":
          "border-zinc-300/20 bg-zinc-400/10 text-zinc-200 shadow-[0_0_20px_rgba(212,212,216,0.06)]",
      },
    },
    defaultVariants: {
      variant: "engineering",
    },
  },
);

export type PublicationBadgeVariant = NonNullable<
  VariantProps<typeof badgeVariants>["variant"]
>;

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="publication-badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}
