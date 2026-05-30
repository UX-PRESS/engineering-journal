import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionHeaderProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  title,
  description,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      className={cn(
        "flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
      {...props}
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase leading-5 tracking-normal text-zinc-500">
          Publication
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
