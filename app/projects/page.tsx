import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    slug: "amm-booking-system",
    title: "AMM Event & Booking System",
    organization: "Academy of Medicine of Malaysia",
    category: "Full-Stack Development",
    period: "July 2024 - Present",
    status: "In Production",
    description: "[Description placeholder - Comprehensive event and booking system using .NET Web Forms and SQL database, functioning like a specialized hotel booking engine for conferences and resource management]",
    tags: [".NET Web Forms", "SQL Server", "Event Management"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "mst-website",
    title: "Malaysian Society of Transplantation Website",
    organization: "MST",
    category: "Front-End Development",
    period: "2024",
    status: "Completed",
    description: "[Description placeholder - Refactored legacy static site with modular templates, responsive hero carousel, and automated release pipeline]",
    tags: ["JavaScript", "Node.js", "Static Site", "Automation"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "msa-coa-conference",
    title: "MSA COA 2025 Conference Website",
    organization: "Malaysian Society of Anaesthesiologists",
    category: "Full-Stack Development",
    period: "January 2025 - September 2025",
    status: "Completed (Archived)",
    description: "[Description placeholder - Eleventy + Nunjucks conference site with Bootstrap theming, countdown timer, and comprehensive event management]",
    tags: ["Eleventy", "Nunjucks", "Bootstrap", "Static Site Generator"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "csamm-website",
    title: "College of Surgeons Website",
    organization: "CSAMM",
    category: "Full-Stack Development",
    period: "July 2025 - Present",
    status: "In Production",
    description: "[Description placeholder - Unified static site on Eleventy 3 + Tailwind with environment-aware configuration and dark mode toggle]",
    tags: ["Eleventy 3", "Tailwind CSS", "Dark Mode", "Static Site"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "matcvs-registration",
    title: "MATCVS Workshop Registration System",
    organization: "MATCVS",
    category: "Full-Stack Development",
    period: "May 2025 - June 2025",
    status: "Completed",
    description: "[Description placeholder - Complete event management platform with role-based authentication for administrators, sponsors, and medical delegates]",
    tags: [".NET", "Entity Framework 6", "OWIN", "Role-Based Auth"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "medical-course-ecommerce",
    title: "Medical Course E-Commerce Platform",
    organization: "Medical Institution",
    category: "Full-Stack Development",
    period: "August 2025 - October 2025",
    status: "Completed",
    description: "[Description placeholder - Complete e-commerce platform with Stripe integration, automated enrollment, and document generation]",
    tags: [".NET", "Stripe", "iTextSharp", "ClosedXML", "Entity Framework"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "data-automation",
    title: "Government Website Data Extraction",
    organization: "Private Client",
    category: "Data Automation",
    period: "January 2025 - February 2025",
    status: "Completed",
    description: "[Description placeholder - Automated extraction of 30,000+ records from complex government website with inconsistent HTML structure]",
    tags: ["Python", "Web Scraping", "Data Processing", "CSV"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "danietas-oven",
    title: "Danieta's Oven E-Commerce",
    organization: "Personal Project",
    category: "Full-Stack Development",
    period: "June 2025 - July 2025",
    status: "In Production",
    description: "[Description placeholder - Modern full-stack e-commerce web application built with React, Next.js and Vite]",
    tags: ["React", "Next.js", "Vite", "Netlify", "CI/CD"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
  {
    slug: "irbm-middleware",
    title: "LHDN MyInvois Middleware",
    organization: "E-Commerce Compliance",
    category: "Middleware Development",
    period: "May 2025 - Present",
    status: "In Progress",
    description: "[Description placeholder - ASP.NET middleware for e-commerce compliance with Malaysia LHDN, handling UBL 2.1 payloads and digital signatures]",
    tags: ["ASP.NET", "UBL 2.1", "OAuth", "XAdES", "SHA-256"],
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
];

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
          [Intro text placeholder - A comprehensive showcase of full-stack development projects
          spanning medical institutions, e-commerce platforms, and data automation solutions.
          Each project demonstrates expertise in system architecture, modern web technologies,
          and delivering scalable solutions.]
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
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            project.status === "In Production"
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
              [CTA text placeholder - Let's discuss how I can help with your next project]
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
