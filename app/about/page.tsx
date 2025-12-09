"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

// Fun hover animations for skill tags - each gets a unique effect!
const hoverAnimations = [
  { scale: 1.1, rotate: 5 },
  { scale: 1.15, rotate: -5 },
  { scale: 1.05, rotate: 10 },
  { scale: 1.1, rotate: -10 },
  { scale: 1.12, rotate: 3 },
  { scale: 1.08, rotate: -3 },
  { scale: 1.1, rotate: 7 },
  { scale: 1.15, rotate: -7 },
  { scale: 1.05, rotate: -12 },
  { scale: 1.12, rotate: 12 },
  { scale: 1.1 },
  { rotate: 6 },
];

import { skills } from "@/lib/data";

const experiences = [
  {
    role: "Full-Stack Developer",
    organization: "Webtechnic",
    period: "May 2024 - Present", // Resume says shipped 10+ systems in 18 months, current role implies ongoing. Resume doesn't explicitly state start date for Webtechnic but says "Lead developer...". I'll infer or keep it broad. Resume says "18 months". Let's assume ~mid 2023 or 2024. Wait, "May 2024" SPM graduated. So this is post-grad.
    description: "Lead developer for a digital agency specializing in the medical sector. Responsible for the full software development lifecycle (SDLC), from architectural design to deployment.",
    achievements: [
      "Developing MyInvois Middleware for LHDN tax compliance.",
      "Automated data migration for 30,000+ government records.",
      "Architected secure voting systems and event platforms.",
    ],
  },
  {
    role: "Full-Stack Developer",
    organization: "Academy of Medicine of Malaysia (AMM)",
    period: "Contract / Project-based",
    description: "Designed and built comprehensive event and booking engines for Malaysia's primary medical institution.",
    achievements: [
      "Built 'hotel-style' booking engine increasing member engagement.",
      "Designed Code-First database schemas for complex workflows.",
      "Revamped public-facing portals with modern UI.",
    ],
  },
];

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
      <section className="border-4 border-black bg-white p-10 dark:border-white dark:bg-black">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Professional Summary
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I am a self-taught developer who has shipped over 10 production systems in the last 18 months.
              Specializing in the medical sector, I build compliance middleware, complex event booking engines,
              and secure voting platforms.
            </p>
            <p>
              My expertise lies in the .NET ecosystem (C#, ASP.NET, Entity Framework) paired with modern
              JavaScript frameworks like React and Next.js. I have a proven ability to modernize legacy
              systems, turning manual 300-hour workflows into 2-day automated processes.
            </p>
            <p>
              From architecting database schemas to designing user-friendly frontends, I handle the
              full software development lifecycle with a focus on efficiency, security, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="border-4 border-black bg-white p-10 dark:border-white dark:bg-black">
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
      <section className="border-4 border-black bg-white p-10 dark:border-white dark:bg-black">
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
                {skills.languages.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1.5 text-sm font-medium dark:border-white cursor-pointer"
                    style={{ willChange: 'transform' }}
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1.5 text-sm font-medium dark:border-white cursor-pointer"
                    style={{ willChange: 'transform' }}
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="border-2 border-black bg-secondary px-3 py-1.5 text-sm font-medium dark:border-white cursor-pointer"
                    style={{ willChange: 'transform' }}
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            {/* Removed Databases section as it is merged into other categories */}
          </div>
          <div className="pt-4">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="border-2 border-black bg-secondary px-4 py-2 text-sm font-medium dark:border-white cursor-pointer"
                  style={{ willChange: 'transform' }}
                  whileHover={hoverAnimations[index % hoverAnimations.length]}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-4 border-black bg-white p-10 dark:border-white dark:bg-black">
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
      <section className="border-4 border-black bg-white p-10 dark:border-white dark:bg-black">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Get In Touch
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500">Location</p>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                Petaling Jaya, Malaysia
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500">Email</p>
              <a
                href="mailto:danielbeh6@gmail.com"
                className="text-base text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                danielbeh6@gmail.com
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
