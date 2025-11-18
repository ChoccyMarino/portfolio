import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      label: "Email",
      value: "danielbeh6@gmail.com",
      href: "mailto:danielbeh6@gmail.com",
      icon: "📧",
      description: "Best for project inquiries and collaboration discussions",
    },
    {
      label: "Phone",
      value: "+60-11-2305-6028",
      href: "tel:+60112305628",
      icon: "📱",
      description: "Available for calls during business hours (GMT+8)",
    },
    {
      label: "GitHub",
      value: "ChoccyMarino",
      href: "http://github.com/ChoccyMarino",
      icon: "💻",
      description: "View my code repositories and open-source contributions",
    },
    {
      label: "LinkedIn",
      value: "Adam Beh",
      href: "https://www.linkedin.com/in/adam-beh-437aa9334/",
      icon: "💼",
      description: "Connect professionally and view my work history",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Let's Build Something Together
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Currently available for freelance projects. Whether you need a
          full-stack application, compliance system, or custom automation
          solution, I'd love to discuss how I can help.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="grid gap-6 md:grid-cols-2">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-primary/70 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="space-y-3">
              <div className="text-4xl">{method.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {method.label}
              </h3>
              <p className="text-base font-medium text-primary group-hover:underline">
                {method.value}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {method.description}
              </p>
            </div>
          </a>
        ))}
      </section>

      {/* Location */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Location
          </h2>
          <div className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              B1308, Puncak Damansara Condominium
            </p>
            <p>Jalan Teratai, PJU 6</p>
            <p>47400, Selangor</p>
            <p>Malaysia</p>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            What to Expect
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              <strong className="text-zinc-900 dark:text-zinc-50">
                Response Time:
              </strong>{" "}
              I typically respond to emails within 24-48 hours during weekdays.
            </p>
            <p>
              <strong className="text-zinc-900 dark:text-zinc-50">
                Project Discussions:
              </strong>{" "}
              Feel free to reach out with project details, timelines, and budget
              expectations. I'm happy to discuss feasibility and provide
              estimates.
            </p>
            <p>
              <strong className="text-zinc-900 dark:text-zinc-50">
                Availability:
              </strong>{" "}
              Currently accepting new projects with flexible start dates. Long-term
              engagements and ongoing maintenance contracts are welcome.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Ready to Start Your Project?
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Whether you're a medical institution looking for a custom platform,
            a business needing compliance integration, or an organization
            requiring system modernization — let's talk about bringing your
            vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:danielbeh6@gmail.com">Send an Email</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
