import Image from "next/image";

const resourceLinks = [
  {
    title: "Templates",
    description:
      "Jump into curated starters built for portfolios, agencies, and SaaS teams.",
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  },
  {
    title: "Learning center",
    description:
      "Level up with interactive lessons that walk through the latest Next.js patterns.",
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section
        id="about"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="flex flex-col gap-6">
          <Image
            className="w-28 dark:invert sm:w-32"
            src="/next.svg"
            alt="Next.js logo"
            width={128}
            height={26}
            priority
          />
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Welcome
            </p>
            <h1 className="text-3xl font-semibold leading-snug text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Crafting thoughtful web experiences with Next.js.
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              To get started, edit the <code>app/page.tsx</code> file and begin
              shaping the story you want your portfolio to tell.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Resources
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Explore templates and documentation.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {resourceLinks.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-200/70 p-6 transition hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-800/80 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/60"
              >
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {resource.title}
                </span>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Ready to collaborate?
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Need a hand with your next launch? Reach out any time or deploy the
            starter straight to Vercel and continue iterating.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href="mailto:hello@example.com"
            >
              Email me
            </a>
            <a
              className="flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy now
            </a>
            <a
              className="flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
