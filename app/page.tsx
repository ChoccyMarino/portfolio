import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const featuredProjects = [
  {
    title: "AMM Event & Booking System",
    category: "Full-Stack Development",
    description: "[Project description placeholder - Conference and resource management platform]",
    tags: [".NET", "SQL Server", "Web Forms"],
    href: "/projects/amm-booking-system",
  },
  {
    title: "MATCVS Workshop Registration",
    category: "Full-Stack Development",
    description: "[Project description placeholder - Medical workshop registration with role-based auth]",
    tags: [".NET", "Entity Framework", "OWIN"],
    href: "/projects/matcvs-registration",
  },
  {
    title: "Medical Course E-Commerce Platform",
    category: "Full-Stack Development",
    description: "[Project description placeholder - Course enrollment with Stripe integration]",
    tags: [".NET", "Stripe", "iTextSharp"],
    href: "/projects/medical-course-ecommerce",
  },
  {
    title: "IRBM MyInvois Middleware",
    category: "Middleware Development",
    description: "[Project description placeholder - E-commerce compliance middleware for Malaysia LHDN]",
    tags: ["ASP.NET", "UBL 2.1", "OAuth"],
    href: "/projects/irbm-middleware",
  },
];

const skills = {
  languages: ["C#", "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  frameworks: [".NET", "ASP.NET Web Forms", "React", "Next.js", "Entity Framework"],
  tools: ["Vite", "Git", "Visual Studio", "Netlify", "CI/CD"],
  core: ["Full-Stack Development", "System Architecture", "Database Design", "API Integration"],
};

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        id="hero"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              SOFTWARE ENGINEER
            </p>
            <h1 className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
              Adam Daniel Beh
            </h1>
            <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              Full-Stack Developer specializing in .NET and modern JavaScript frameworks
            </p>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              [Brief intro placeholder - A motivated and detail-oriented software engineer with experience
              in full-stack web development. Proven ability to deliver complex projects from concept to
              deployment, with a focus on system modernization and creating user-friendly applications.]
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a
                  href="https://github.com/ChoccyMarino"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section
        id="about-preview"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About Me
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Building Modern Web Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                [Bio content placeholder - Currently working with Academy of Medicine of Malaysia and
                associated institutions, architecting full-stack solutions for medical organizations.]
              </p>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                [Experience summary placeholder - Specialized in modernizing legacy systems, building
                e-commerce platforms, and creating scalable web applications.]
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-zinc-700 dark:text-zinc-300">
                  [School name placeholder]
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  SPM Graduate - May 2024
                </p>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Technical Skills
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Technologies & Tools
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Tools & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Featured Projects
            </h2>
            <p className="pt-2 text-base text-zinc-600 dark:text-zinc-400">
              [Section description placeholder - A selection of key projects demonstrating full-stack
              development capabilities]
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="block"
              >
                <Card className="h-full transition hover:border-primary/70 hover:shadow-lg">
                  <CardHeader>
                    <div className="space-y-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {project.category}
                      </p>
                      <CardTitle className="text-xl font-bold">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="pt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact-cta"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Let's Work Together
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            [CTA text placeholder - Interested in collaborating on a project or hiring for a position?
            I'm always open to discussing new opportunities and interesting challenges.]
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg">
              <Link href="/contact">Contact Me</Link>
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
            <Button asChild size="lg" variant="outline">
              <a href="mailto:your.email@example.com">
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
