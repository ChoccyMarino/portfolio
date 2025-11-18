export default function AboutPage() {
  const skills = {
    languages: ["C#", "Python", "JavaScript", "HTML/CSS", "SQL"],
    frameworks: [
      ".NET Framework",
      "ASP.NET Web Forms",
      "Entity Framework",
      "React",
      "Next.js",
      "Eleventy",
      "Bootstrap",
      "Tailwind CSS",
    ],
    tools: [
      "Git",
      "Visual Studio",
      "VS Code",
      "Vite",
      "SQL Server Management Studio",
    ],
    platforms: ["SQL Server", "Netlify", "Vercel", "IIS"],
    integrations: [
      "Stripe Payment Gateway",
      "OAuth 2.0",
      "MyInvois API",
      "LHDN Tax System",
      "Email SMTP",
    ],
    competencies: [
      "Full-Stack Development",
      "System Architecture",
      "Database Design (Code-First, Schema Design)",
      "Web Scraping & Automation",
      "Payment Integration",
      "Compliance Systems",
      "CI/CD Pipelines",
      "Role-Based Authentication",
      "Security & Encryption (BCrypt, SHA256, HTTPS)",
      "API Development & Integration",
    ],
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About Me
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Self-Taught Developer Building Production Systems
        </h1>
      </section>

      {/* Story Section */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            My Journey
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I graduated from SMK Bandar Utama Damansara (4) in May 2024 and
              made a deliberate choice: instead of pursuing formal tertiary
              education, I chose hands-on experience. I wanted to build real
              systems, solve real problems, and learn by shipping production
              code.
            </p>
            <p>
              In just <strong>18 months</strong>, I've architected and deployed{" "}
              <strong>10+ production systems</strong> for major Malaysian
              medical institutions, including the Academy of Medicine of
              Malaysia, Malaysian Society of Transplantation, and College of
              Surgeons. These aren't toy projects — they're live platforms
              handling event management, payment processing, secure elections,
              and tax compliance.
            </p>
            <p>
              What started as learning .NET and SQL Server evolved into a
              specialized focus on <strong>medical institution platforms</strong> and{" "}
              <strong>compliance middleware</strong>. I found my niche building
              complex, business-critical applications that require deep
              understanding of workflows, security, and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            What Makes Me Different
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                End-to-End Ownership
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                I don't just write code — I architect databases from scratch,
                design user workflows, integrate payment systems, implement
                security protocols, and handle deployment. Every project I take
                on, I own from concept to production.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                Specialized in Medical & Compliance Systems
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Through my work with medical institutions, I've developed deep
                expertise in building platforms that handle sensitive data,
                complex business rules, and regulatory compliance. I understand
                the unique challenges of healthcare technology and government
                integrations.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                Fast Learner, Proven Delivery
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Self-taught means I know how to learn quickly and solve problems
                independently. My track record speaks for itself: 10+ production
                systems in 18 months, each one more complex than the last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills - Comprehensive */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-8">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Technical Skills
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              A comprehensive breakdown of my technical capabilities across
              languages, frameworks, tools, and platforms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Languages */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.platforms.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations & APIs */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Integrations & APIs
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.integrations.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Core Competencies
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {skills.competencies.map((competency) => (
                <li
                  key={competency}
                  className="flex items-start text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span className="mr-2 mt-1 text-primary">•</span>
                  {competency}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Current Focus
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I'm currently self-employed as a <strong>freelance developer</strong>,
              taking on projects that challenge me to grow technically while
              delivering real business value. My recent work includes building
              compliance middleware for Malaysia's MyInvois tax system and
              maintaining production systems for medical institutions.
            </p>
            <p>
              I'm particularly interested in projects involving:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Complex database architecture and business logic</li>
              <li>Payment gateway integrations and e-commerce platforms</li>
              <li>Compliance systems and regulatory technology</li>
              <li>Secure authentication and role-based access control</li>
              <li>System modernization and legacy migrations</li>
            </ul>
            <p>
              If you have a challenging project that requires end-to-end
              development with a focus on security, compliance, or complex
              workflows, I'd love to discuss how I can help bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              SMK Bandar Utama Damansara (4), Petaling Jaya, Selangor
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              SPM — Graduated May 2024
            </p>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Chose hands-on experience over formal tertiary education to build
              production systems and gain real-world client experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
