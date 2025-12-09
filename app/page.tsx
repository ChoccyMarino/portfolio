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
import MagneticText from "@/components/MagneticText";
import React, { useRef, useState } from "react";

import { featuredProjects, skills } from "@/lib/data";

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

// Helper component for animated section headings (Swiss style)
const AnimatedHeading = ({ children, className = "" }: { children: string; className?: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [letterStates, setLetterStates] = useState(
    Array.from(children).map(() => ({ y: 0 }))
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const newLetterStates = Array.from(children).map((_, i) => {
      const letterElement = ref.current?.children[i] as HTMLElement;
      if (!letterElement) return { y: 0 };

      const letterRect = letterElement.getBoundingClientRect();
      const letterCenterX = letterRect.left - rect.left + letterRect.width / 2;

      const distance = Math.abs(mouseX - letterCenterX);
      const maxDistance = 150;

      if (distance < maxDistance) {
        const y = (1 - distance / maxDistance) * -10;
        return { y };
      }
      return { y: 0 };
    });

    setLetterStates(newLetterStates);
  };

  const handleMouseLeave = () => {
    setLetterStates(Array.from(children).map(() => ({ y: 0 })));
  };

  return (
    <div className="relative inline-block">
      <motion.h2
        ref={ref}
        className={`${className} flex`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from(children).map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            style={{ willChange: 'transform, opacity' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.03,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.span
              className="inline-block cursor-default"
              animate={{ y: letterStates[index]?.y || 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
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
            <MagneticText text="Adam Daniel Beh" as="h1" className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl" />
            <motion.p
              className="text-2xl font-bold leading-tight sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Full-Stack Developer specializing in .NET and modern JavaScript frameworks
            </motion.p>
            <p className="max-w-3xl text-lg leading-relaxed">
              Self-taught developer with over 18 months of experience shipping production systems.
              Specializing in medical institution platforms and compliance middleware, I have a proven
              track record of delivering complex projects—from concept to deployment—focusing on system modernization,
              automation, and efficiency.
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
                Currently serving as a Full-Stack Developer at Webtechnic, where I lead the development of
                automation tools and compliance middleware for national medical societies. My work involves
                bridging legacy systems with modern digital infrastructure, such as LHDN's MyInvois.
              </p>
              <p className="text-base leading-relaxed">
                I have architected and deployed multiple enterprise-grade solutions, including event
                booking engines, secure voting platforms, and e-commerce systems, primarily serving
                the medical sector in Malaysia.
              </p>
            </div>
            <div className="space-y-4 border-4 border-black p-6 dark:border-white">
              <h3 className="text-xl font-bold">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-bold">
                  SMK Bandar Utama Damansara (4)
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
                    style={{ willChange: 'transform' }}
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
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
                    style={{ willChange: 'transform' }}
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
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
                    style={{ willChange: 'transform' }}
                    whileHover={hoverAnimations[index % hoverAnimations.length]}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
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
              A selection of key projects demonstrating proficiency in full-stack development,
              system architecture, and process automation.
            </motion.p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                style={{ willChange: 'transform, opacity' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
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
            I'm always interested in new opportunities, whether it's full-time work, freelance projects,
            or interesting collaborations. Let's discuss how I can help your team.
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
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-current bg-transparent text-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <a href="mailto:danielbeh6@gmail.com">
                Email
              </a>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
