import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { projects } from "@/lib/data";

const categories = Array.from(new Set(projects.map((p) => p.category)));

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Projects & Experience
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A showcase of diverse projects spanning enterprise medical systems, government compliance middleware,
          and automated data solutions. Each project represents a unique challenge in system architecture,
          automation, and user experience.
        </p>
      </section>

      {/* Filter/Stats Section */}
      <section>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {projects.length}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Total Projects
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {projects.filter((p) => p.status === "In Production").length}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                In Production
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {categories.length}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Categories
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Projects by Category */}
      {categories.map((category) => (
        <section key={category} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {category}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {projects.filter((p) => p.category === category).length} project
              {projects.filter((p) => p.category === category).length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects
              .filter((project) => project.category === category)
              .map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="block"
                >
                  <Card className="h-full transition hover:border-primary/70 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${project.status === "In Production"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : project.status === "In Progress"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                              : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                            }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {project.title}
                      </CardTitle>
                      <div className="space-y-1 pt-1">
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {project.organization}
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                          {project.period}
                        </p>
                      </div>
                      <CardDescription className="pt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="pt-2">
                          <span className="text-sm font-medium text-primary hover:underline">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section>
        <Card className="p-10">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Interested in Working Together?
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I'm always ready to discuss how my experience in full-stack development and automation
              can bring value to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://github.com/ChoccyMarino"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
