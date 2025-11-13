import Link from "next/link";

const placeholderProjects = [
  { slug: "project-one", title: "Project One" },
  { slug: "project-two", title: "Project Two" },
  { slug: "project-three", title: "Project Three" },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Projects
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Case studies are on the way.
        </h1>
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Once project write-ups are finalized, this page will showcase the full
          portfolio with links to deep dives for each build. Until then, here is
          a placeholder list you can replace with real data.
        </p>
      </div>

      <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
        {placeholderProjects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              {project.title}
            </Link>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {" "}
              - details coming soon
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
