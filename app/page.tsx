"use client";

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
import { motion } from "framer-motion";

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

// Fun hover animations for skill tags - each gets a unique effect!
const hoverAnimations = [
  { scale: 1.1, rotate: 5 }, // scale + slight rotate
  { scale: 1.15, y: -5 }, // scale + bounce up
  { scale: 1.05, rotate: -5 }, // subtle scale + rotate opposite
  { x: 5, scale: 1.08 }, // slide right + scale
  { y: -8, rotate: 3 }, // bounce + tilt
  { scale: 1.12, rotate: -3 }, // bigger scale + rotate
  { scale: 1.1, x: -3 }, // scale + slide left
  { y: -5, scale: 1.1, rotate: 2 }, // combo bounce/scale/rotate
  { scale: 1.15, rotate: 8 }, // big scale + bigger rotate
  { x: 4, y: -4, scale: 1.05 }, // diagonal shift
  { scale: 1.12 }, // simple scale
  { rotate: 6, scale: 1.08 }, // rotate + scale
];

// Helper component for animated section headings (Swiss style)
const AnimatedHeading = ({ children, className = "" }: { children: string; className?: string }) => {
  const words = children.split(" ");

  return (
    <div className="relative inline-block">
      <motion.h2 className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1] // Swiss-style easing
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-primary"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="border-4 border-black bg-white p-16 dark:border-white dark:bg-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <motion.div
              className="inline-block border-4 border-primary bg-primary px-4 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-foreground">
                SOFTWARE ENGINEER
              </p>
            </motion.div>
            <h1 className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
              {"Adam Daniel Beh".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.03,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="text-2xl font-bold leading-tight sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Full-Stack Developer specializing in .NET and modern JavaScript frameworks
            </motion.p>
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
      </motion.section>

      {/* About Preview Section */}
      <motion.section
        id="about-preview"
        className="border-4 border-black bg-white p-16 dark:border-white dark:bg-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.div
              className="h-1 w-20 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <AnimatedHeading className="text-4xl font-black tracking-tight">
              Building Modern Web Solutions
            </AnimatedHeading>
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
            <div className="space-y-4 border-4 border-black p-6 dark:border-white">
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
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="border-4 border-black bg-white p-16 dark:border-white dark:bg-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.div
              className="h-1 w-20 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <AnimatedHeading className="text-4xl font-black tracking-tight">
              Technologies & Tools
            </AnimatedHeading>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white cursor-pointer"
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white cursor-pointer"
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Tools & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white cursor-pointer"
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold uppercase tracking-wider">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1 text-sm font-medium dark:border-white cursor-pointer"
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        id="featured-projects"
        className="border-4 border-black bg-white p-16 dark:border-white dark:bg-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.div
              className="h-1 w-20 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <AnimatedHeading className="text-4xl font-black tracking-tight">
              Featured Projects
            </AnimatedHeading>
            <motion.p
              className="pt-2 text-base max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              [Section description placeholder - A selection of key projects demonstrating full-stack
              development capabilities]
            </motion.p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
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
              </motion.div>
            ))}
          </div>
          <div className="pt-2">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        id="contact-cta"
        className="border-4 border-primary bg-primary p-16 text-primary-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <AnimatedHeading className="text-4xl font-black tracking-tight">
            Let's Work Together
          </AnimatedHeading>
          <motion.p
            className="max-w-2xl text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            [CTA text placeholder - Interested in collaborating on a project or hiring for a position?
            I'm always open to discussing new opportunities and interesting challenges.]
          </motion.p>
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
      </motion.section>
    </div>
  );
}
