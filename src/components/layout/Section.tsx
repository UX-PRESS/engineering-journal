import type { LucideIcon } from "lucide-react"

type SectionProps = {
  title: string
  description: string
  emptyText: string
  icon: LucideIcon
}

export default function Section({
  title,
  description,
  emptyText,
  icon: Icon,
}: SectionProps) {
  return (
    <section className="min-h-64 rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-sm shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-zinc-900 text-sky-300">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-8 flex min-h-28 items-center justify-center rounded-md border border-dashed border-white/10 bg-zinc-950/55 px-4 text-center text-sm text-zinc-500">
        {emptyText}
      </div>
    </section>
  )
}
