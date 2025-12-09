import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

// Generate static params for all projects at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Projects
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">{project.title}</span>
      </nav>

      {/* Project Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === "In Production"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : project.status === "In Progress"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
            }`}>
            {project.status}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {project.period}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </section>

      {/* Project Overview */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Organization
              </h3>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                {project.organization}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Role
              </h3>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                Full-Stack Developer
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Category
              </h3>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                {project.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            The Challenge
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <ul className="list-inside list-disc space-y-2 pl-4">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            The Solution
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <ul className="list-inside list-disc space-y-2 pl-4">
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Technologies Used
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech) => (
                    <span key={tech} className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech) => (
                    <span key={tech} className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.database.map((tech) => (
                    <span key={tech} className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Key Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results/Impact */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Results & Impact
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {project.impact.map((item, index) => (
              <div key={index} className="space-y-2 text-center">
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  {item.metric}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <h3 className="mb-2 font-semibold">Key Achievements</h3>
            <ul className="list-inside list-disc space-y-2 text-base text-zinc-600 dark:text-zinc-400">
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Key Learnings
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <ul className="list-inside list-disc space-y-2 pl-4">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Project Links (if applicable) */}
      {(project.links?.live || project.links?.repo) && (
        <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Project Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.links?.live && (
                <Button asChild variant="outline">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                </Button>
              )}
              {project.links?.repo && (
                <Button asChild variant="outline">
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    View Repository
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <Button asChild variant="outline">
          <Link href="/projects">← Back to Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Get in Touch →</Link>
        </Button>
      </section>
    </div>
  );
}
