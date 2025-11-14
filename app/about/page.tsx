import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const experiences = [
  {
    role: "Full-Stack Developer",
    organization: "Academy of Medicine of Malaysia (AMM)",
    period: "July 2024 - Present",
    description: "[Description placeholder - Architected event/booking system, modernized websites for MSA, MST, MATCVS]",
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
      "[Achievement 3 placeholder]",
    ],
  },
  {
    role: "Full-Stack Developer",
    organization: "College of Surgeons, Academy of Medicine (CSAMM)",
    period: "July 2025 - Present",
    description: "[Description placeholder - Unified static site on Eleventy 3 + Tailwind]",
    achievements: [
      "[Achievement 1 placeholder]",
      "[Achievement 2 placeholder]",
    ],
  },
];

const skills = {
  languages: ["C#", "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  frameworks: [".NET", "ASP.NET Web Forms", "React", "Next.js", "Entity Framework 6", "Eleventy", "Bootstrap", "Tailwind CSS"],
  tools: ["Visual Studio", "Git", "Vite", "Netlify", "Node.js", "npm"],
  databases: ["SQL Server", "Entity Framework"],
  specializations: [
    "Full-Stack Development",
    "System Architecture",
    "Web Scraping & Data Automation",
    "Database Management",
    "Project Modernization",
    "Middleware Development",
    "Payment Integration (Stripe)",
    "Role-Based Authentication (OWIN)",
  ],
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About Me
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Adam Daniel Beh
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Full-Stack Developer specializing in .NET and modern JavaScript frameworks
        </p>
      </section>

      {/* Bio Section */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Professional Summary
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              [Bio paragraph 1 placeholder - A motivated and detail-oriented software engineer with
              experience in full-stack web development, specializing in .NET and modern JavaScript
              frameworks like React. Proven ability to deliver complex projects from concept to
              deployment, with a focus on system modernization, automation, and creating user-friendly,
              efficient web applications.]
            </p>
            <p>
              [Bio paragraph 2 placeholder - Currently working with the Academy of Medicine of Malaysia
              and associated medical institutions, architecting comprehensive event management systems,
              modernizing legacy websites, and building e-commerce platforms for course enrollment and
              workshop registration.]
            </p>
            <p>
              [Bio paragraph 3 placeholder - Passionate about solving complex technical challenges,
              from building robust authentication systems to integrating payment gateways and automating
              data extraction processes. Experienced in managing full project lifecycles and working
              with diverse stakeholders in the medical and healthcare sectors.]
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-700"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Technical Skills
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Database & Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.specializations.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                SMK Bandar Utama Damansara (4)
              </CardTitle>
              <p className="text-sm text-zinc-500">Petaling Jaya, Selangor</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium text-zinc-700 dark:text-zinc-300">
                  Sijil Pelajaran Malaysia (SPM)
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Graduated: May 2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Get In Touch
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500">Location</p>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                [Location placeholder - Selangor, Malaysia]
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500">Email</p>
              <a
                href="mailto:your.email@example.com"
                className="text-base text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                [Email placeholder]
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500">GitHub</p>
              <a
                href="https://github.com/ChoccyMarino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                github.com/ChoccyMarino
              </a>
            </div>
          </div>
          <div className="pt-4">
            <Button asChild size="lg">
              <Link href="/contact">Send Me a Message</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
