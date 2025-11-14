import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Let&apos;s Work Together
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          [Intro text placeholder - Interested in collaborating on a project or discussing
          opportunities? Feel free to reach out through any of the channels below.]
        </p>
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <section className="border-4 border-black bg-white p-12 dark:border-white dark:bg-black">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                Send a Message
              </h2>
              <p className="text-sm">
                [Form description placeholder - Fill out the form below and I&apos;ll get back to you as soon as possible]
              </p>
            </div>
            <form className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="[Your name placeholder]"
                  className="w-full border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-white dark:bg-black dark:placeholder:text-zinc-500"
                  required
                  disabled
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="[your.email@example.com placeholder]"
                  className="w-full border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-white dark:bg-black dark:placeholder:text-zinc-500"
                  required
                  disabled
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="[Subject placeholder]"
                  className="w-full border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-white dark:bg-black dark:placeholder:text-zinc-500"
                  required
                  disabled
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="[Your message placeholder...]"
                  className="w-full border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-white dark:bg-black dark:placeholder:text-zinc-500"
                  required
                  disabled
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled>
                Send Message
              </Button>

              <p className="text-xs text-zinc-500">
                [Note: Form functionality will be implemented with backend integration]
              </p>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details Card */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                [Description placeholder - Prefer to reach out directly? Here are my contact details]
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Email
                </h3>
                <a
                  href="mailto:your.email@example.com"
                  className="block text-base text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                    danielbeh6@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Phone
                </h3>
                <a
                  href="tel:+60112305602"
                  className="block text-base text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  +60-11-2305-6028
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Location
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  Selangor, Malaysia
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Links Card */}
          <Card>
            <CardHeader>
              <CardTitle>Connect Online</CardTitle>
              <CardDescription>
                [Description placeholder - Find me on these platforms]
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://github.com/ChoccyMarino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-black p-3 transition hover:bg-secondary dark:border-white"
              >
                <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-secondary dark:border-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    GitHub
                  </p>
                  <p className="text-xs text-muted-foreground">@ChoccyMarino</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/daniel-beh-437aa9334/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-black p-3 transition hover:bg-secondary dark:border-white"
              >
                <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-secondary dark:border-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    LinkedIn
                  </p>
                  <p className="text-xs text-muted-foreground">daniel-beh-437aa9334</p>
                </div>
              </a>
            </CardContent>
          </Card>

          {/* Availability Card */}
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 border-2 border-green-500 bg-green-500"></div>
                  <p className="text-sm font-medium">
                    [Status placeholder - Available for freelance work]
                  </p>
                </div>
                <p className="text-sm">
                  [Description placeholder - Currently accepting new projects and opportunities.
                  Typical response time: within 24 hours]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional CTA */}
      <section className="border-4 border-black bg-white p-16 text-center dark:border-white dark:bg-black">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-3xl font-black tracking-tight">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-base">
            [CTA text placeholder - I&apos;m always happy to discuss project ideas, collaboration
            opportunities, or just chat about technology]
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild size="lg" disabled>
              <a href="[Calendar link placeholder]" target="_blank" rel="noopener noreferrer">
                Schedule a Meeting
              </a>
            </Button>
          </div>
          <p className="text-xs text-zinc-500">
            [Note: Calendar integration to be added]
          </p>
        </div>
      </section>
    </div>
  );
}
