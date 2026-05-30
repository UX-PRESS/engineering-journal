export function ArticleNavigation() {
  return (
    <nav
      className="mt-16 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
      aria-label="Article navigation"
    >
      <div className="rounded-md border border-white/10 bg-white/[0.02] p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Previous
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          Previous article placeholder
        </p>
      </div>
      <div className="rounded-md border border-white/10 bg-white/[0.02] p-4 sm:text-right">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Next</p>
        <p className="mt-2 text-sm text-zinc-400">Next article placeholder</p>
      </div>
    </nav>
  );
}
