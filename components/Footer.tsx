import Link from "next/link";

const contactLinks = [
  { label: "danielbeh6@gmail.com", href: "mailto:danielbeh6@gmail.com" },
  { label: "GitHub", href: "http://github.com/ChoccyMarino" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adam-beh-437aa9334/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-zinc-900 dark:text-zinc-100">
          &copy; {currentYear} Adam Daniel Beh. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
