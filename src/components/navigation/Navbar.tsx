import Link from "next/link";

const navItems = [
  { label: "Articles", href: "/articles" },
  { label: "Incidents", href: "/articles?category=incidents" },
  { label: "Engineering", href: "/articles?category=engineering" },
  { label: "Security", href: "/articles?category=security" },
  { label: "Labs", href: "/articles?category=labs" },
  { label: "Research", href: "/articles?category=research" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black text-zinc-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-zinc-100"
        >
          Engineering Journal
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
