export function TableOfContents() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-10 border-l border-white/10 pl-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Contents
        </p>
        <p className="mt-4 text-sm leading-6 text-zinc-500">
          Table of contents will be generated from article headings.
        </p>
      </div>
    </aside>
  );
}
