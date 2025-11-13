import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-black/40">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-4 px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-950 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-white"
        >
          Portfolio
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-1 flex-wrap items-center justify-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:justify-center"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
