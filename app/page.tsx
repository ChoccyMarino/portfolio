import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuredProjects = [
  {
    title: "Academy of Medicine Malaysia - Booking System",
    client: "Academy of Medicine of Malaysia (AMM)",
    description:
      "Comprehensive event and booking platform for Malaysia's major medical institution, handling conference management, registration workflows, and payment processing.",
    tags: [".NET", "SQL Server", "Entity Framework", "Web Forms"],
    href: "https://amm.org.my/",
    slug: "amm-booking-system",
  },
  {
    title: "Danieta's Oven",
    client: "Personal E-Commerce Project",
    description:
      "Full-stack e-commerce platform for a home bakery with product browsing, shopping cart, order management, and automated CI/CD deployment.",
    tags: ["React", "Next.js", "Netlify"],
    href: "https://danietasoven.netlify.app/",
    slug: "danietas-oven",
  },
  {
    title: "Government Data Automation",
    client: "Private Client",
    description:
      "Automated extraction of 30,000+ records from complex government website with inconsistent HTML structure, saving hundreds of hours of manual labor.",
    tags: ["Python", "Web Scraping", "Data Processing"],
    href: null,
    slug: "data-automation",
  },
];

const skillCategories = [
  {
    category: "Backend",
    skills: ["C#", ".NET", "Python", "SQL Server", "Entity Framework"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Tailwind", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "VS Code", "Netlify", "CI/CD", "Stripe API"],
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        id="hero"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Full-Stack Developer
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Self-Taught Developer Specializing in Medical Institution Platforms
            & Compliance Systems
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Shipped <strong>10+ production systems in 18 months</strong>,
            delivering complex projects from concept to deployment with a focus
            on system modernization, automation, and user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects">
        <div className="mb-6 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Featured Work
          </p>
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            Recent Projects
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col overflow-hidden transition hover:border-primary/70 hover:shadow-lg"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-600">
                  <span className="text-sm font-medium">Project Screenshot</span>
                </div>
              </div>
              <CardHeader className="flex-1">
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {project.client}
                </p>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
                <div className="mt-4 flex gap-3">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Live Site →
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-zinc-700 hover:underline dark:text-zinc-300"
                  >
                    Case Study →
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All 10+ Projects</Link>
          </Button>
        </div>
      </section>

      {/* Skills Overview */}
      <section
        id="skills-overview"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Technical Skills
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Tech Stack
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.category} className="space-y-3">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Link
              href="/about"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View full skills & background →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section
        id="about-preview"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Self-taught developer who chose hands-on experience over formal
            tertiary education. In 18 months, I've built and deployed production
            systems for major Malaysian medical institutions, specializing in
            compliance middleware, event management platforms, and secure voting
            systems.
          </p>
          <div className="pt-2">
            <Button asChild variant="outline">
              <Link href="/about">Read My Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact-cta"
        className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Ready to Collaborate?
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Currently available for freelance projects. Whether you need a
            full-stack application, compliance system, or custom automation
            solution, let's discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="mailto:danielbeh6@gmail.com">Email Me</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">View Contact Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
