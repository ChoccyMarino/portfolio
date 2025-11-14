import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const projectTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Projects
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">{projectTitle}</span>
      </nav>

      {/* Project Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
            [Status Placeholder]
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            [Period Placeholder]
          </span>
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {projectTitle}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          [Project tagline/subtitle placeholder]
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
                [Organization name placeholder]
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Role
              </h3>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                [Role placeholder - e.g., Full-Stack Developer]
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Timeline
              </h3>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                [Timeline placeholder - e.g., 3 months]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Project Overview
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              [Overview paragraph 1 placeholder - What was the project about? What problem did it solve?]
            </p>
            <p>
              [Overview paragraph 2 placeholder - Context about the client/organization and their needs]
            </p>
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
            <p>
              [Challenge description placeholder - What were the main technical challenges?]
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>[Challenge point 1 placeholder]</li>
              <li>[Challenge point 2 placeholder]</li>
              <li>[Challenge point 3 placeholder]</li>
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
            <p>
              [Solution description placeholder - How did you approach solving these challenges?]
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>[Solution approach 1 placeholder]</li>
              <li>[Solution approach 2 placeholder]</li>
              <li>[Solution approach 3 placeholder]</li>
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
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    [Tech 1]
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    [Tech 2]
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    [Tech 1]
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    [Tech 2]
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    [Tech 1]
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    [Tech 2]
                  </span>
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
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                [Feature 1 Title]
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                [Feature 1 description placeholder]
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                [Feature 2 Title]
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                [Feature 2 description placeholder]
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                [Feature 3 Title]
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                [Feature 3 description placeholder]
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                [Feature 4 Title]
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                [Feature 4 description placeholder]
              </p>
            </div>
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
            <div className="space-y-2 text-center">
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                [Metric 1]
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                [Metric 1 description]
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                [Metric 2]
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                [Metric 2 description]
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                [Metric 3]
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                [Metric 3 description]
              </p>
            </div>
          </div>
          <div className="pt-4">
            <ul className="list-inside list-disc space-y-2 text-base text-zinc-600 dark:text-zinc-400">
              <li>[Impact point 1 placeholder]</li>
              <li>[Impact point 2 placeholder]</li>
              <li>[Impact point 3 placeholder]</li>
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
            <p>
              [Learnings description placeholder - What did you learn from this project?]
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>[Learning 1 placeholder]</li>
              <li>[Learning 2 placeholder]</li>
              <li>[Learning 3 placeholder]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Links (if applicable) */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Project Links
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" disabled>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Live Site
              </a>
            </Button>
            <Button asChild variant="outline" disabled>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </Button>
          </div>
          <p className="text-sm text-zinc-500">
            [Note: Links will be added if publicly available]
          </p>
        </div>
      </section>

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
