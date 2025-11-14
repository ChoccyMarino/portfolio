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
    <div className="space-y-8">
      {/* Hero Section */}
      <section
        id="hero"
        className="border-4 border-black bg-white p-12 dark:border-white dark:bg-black"
      >
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              SOFTWARE ENGINEER
            </p>
            <h1 className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
              Adam Daniel Beh
            </h1>
            <p className="text-2xl font-bold leading-tight sm:text-3xl">
              Full-Stack Developer specializing in .NET and modern JavaScript frameworks
            </p>
            <p className="max-w-3xl text-lg leading-relaxed">
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
        className="border-4 border-black bg-white p-12 dark:border-white dark:bg-black"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              About Me
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Building Modern Web Solutions
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                [Bio content placeholder - Currently working with Academy of Medicine of Malaysia and
                associated institutions, architecting full-stack solutions for medical organizations.]
              </p>
              <p className="text-base leading-relaxed">
                [Experience summary placeholder - Specialized in modernizing legacy systems, building
                e-commerce platforms, and creating scalable web applications.]
              </p>
            </div>
            <div className="space-y-4 border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-bold">
                  [School name placeholder]
                </p>
                <p className="text-sm text-muted-foreground">
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
        className="border-4 border-black bg-white p-12 dark:border-white dark:bg-black"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Technical Skills
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Technologies & Tools
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Tools & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white"
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
        className="border-4 border-black bg-white p-12 dark:border-white dark:bg-black"
      >
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Featured Projects
            </h2>
            <p className="pt-2 text-base">
              [Section description placeholder - A selection of key projects demonstrating full-stack
              development capabilities]
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group block border-4 border-black bg-white p-6 transition-all hover:bg-black hover:text-white dark:border-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-black leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed opacity-80">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-current px-2 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
        className="border-4 border-primary bg-primary p-12 text-primary-foreground"
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tight">
            Let's Work Together
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            [CTA text placeholder - Interested in collaborating on a project or hiring for a position?
            I'm always open to discussing new opportunities and interesting challenges.]
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-current bg-transparent text-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <a
                href="https://github.com/ChoccyMarino"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-current bg-transparent text-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
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
