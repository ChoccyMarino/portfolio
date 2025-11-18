import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const allProjects = [
  {
    title: "AMM Booking System",
    client: "Academy of Medicine of Malaysia",
    description:
      "Architected comprehensive event and booking system using .NET Web Forms and SQL Server. Built database schema from scratch with Entity Framework Code-First, implementing complex business logic for event management, user authentication, invoicing, and payment processing.",
    tags: [".NET Web Forms", "SQL Server", "Entity Framework", "Code-First"],
    period: "July 2024 - Present",
    href: "https://amm.org.my/",
    slug: "amm-booking-system",
    status: "Live",
    metrics: "Conference & resource management for Malaysia's major medical institution",
  },
  {
    title: "APPSPGHAN Voting System",
    client: "APPSPGHAN Election",
    description:
      "Designed secure ASP.NET Web Forms + SQL Server platform for secret ballot election with live turnout tracking, token lifecycle controls, and exportable audit reports. Implemented full anonymity model with BCrypt-hashed authentication, GUID token generation, SHA256 validation, and detailed audit logging.",
    tags: ["ASP.NET", "SQL Server", "BCrypt", "SHA256", "Security"],
    period: "October 2025 - November 2025",
    href: null,
    slug: "appspghan-voting",
    status: "Completed",
    metrics: "Secure election platform with full voter anonymity",
  },
  {
    title: "MyInvois Compliance Middleware",
    client: "E-Commerce Tax Compliance",
    description:
      "Building ASP.NET middleware bridging legacy e-commerce systems with Malaysia's MyInvois tax compliance platform. Handles OAuth authentication, UBL 2.1 invoice generation, document verification, and automated submission to LHDN's digital tax system.",
    tags: ["ASP.NET", "OAuth", "UBL 2.1", "Tax Compliance", "API Integration"],
    period: "May 2025 - Present",
    href: null,
    slug: "myinvois-middleware",
    status: "In Progress",
    metrics: "Automated tax compliance for 2025 regulatory threshold",
  },
  {
    title: "Medical Course Shopping Cart",
    client: "Medical Institution",
    description:
      "Developed complete e-commerce platform for course enrollments with Stripe payment gateway integration, session-based shopping cart, and automated receipt/invoice generation using iTextSharp and ClosedXML. Designed SQL Server database schema with Entity Framework.",
    tags: ["ASP.NET", "Stripe", "SQL Server", "iTextSharp", "Entity Framework"],
    period: "August 2025 - October 2025",
    href: null,
    slug: "medical-course-cart",
    status: "Completed",
    metrics: "Secure payment processing & automated document generation",
  },
  {
    title: "MATCVS Workshop Registration",
    client: "MATCVS Medical Workshop",
    description:
      "Architected complete event management platform handling registration workflows for three distinct user roles: administrators, sponsors, and medical delegates. Engineered role-based authentication using OWIN Cookies with dynamic workshop filtering and multi-choice preference systems.",
    tags: [".NET", "OWIN", "SQL Server", "Code-First", "Role-Based Auth"],
    period: "May 2025 - June 2025",
    href: null,
    slug: "matcvs-registration",
    status: "Completed",
    metrics: "Multi-role event management with sponsor-delegate matching",
  },
  {
    title: "CSAMM Static Site",
    client: "College of Surgeons, AMM",
    description:
      "Unified society's static site on Eleventy + Tailwind with environment-aware configuration, automated CSS/HTML builds, and deployment validation. Centralised content in reusable data modules with dynamic event badges and polished navigation with dark-mode toggle.",
    tags: ["Eleventy", "Tailwind CSS", "JavaScript", "Static Site"],
    period: "July 2025 - Present",
    href: "https://www.csamm.org.my/",
    slug: "csamm-site",
    status: "Live",
    metrics: "Automated build pipeline with multi-level navigation",
  },
  {
    title: "MSA COA 2025 Conference",
    client: "MSA Conference",
    description:
      "Built complete conference website using Eleventy + Nunjucks with Bootstrap theming, countdown timer, downloadable resources, and dynamic navigation. Implemented custom incremental build tracker and JSON-driven navigation with responsive layouts.",
    tags: ["Eleventy", "Nunjucks", "Bootstrap", "JavaScript"],
    period: "January 2025 - September 2025",
    href: null,
    slug: "msa-coa-conference",
    status: "Archived",
    metrics: "Full conference platform with programme & registration",
  },
  {
    title: "MST Website Modernization",
    client: "Malaysian Society of Transplantation",
    description:
      "Modernized legacy static website with responsive navigation, automated build pipeline, and mobile-first redesign. Overhauled look and feel while simultaneously migrating old content to new website.",
    tags: ["HTML/CSS", "JavaScript", "Responsive Design", "CI/CD"],
    period: "May 2025",
    href: "https://www.mst.org.my/",
    slug: "mst-modernization",
    status: "Live",
    metrics: "Legacy migration with responsive mobile-first design",
  },
  {
    title: "Danieta's Oven",
    client: "Personal E-Commerce Project",
    description:
      "Developed full-stack e-commerce platform for home bakery with product browsing, shopping cart, and order management. Built with React and Next.js, integrated admin panel for inventory tracking, deployed on Netlify with automated CI/CD pipeline.",
    tags: ["React", "Next.js", "Netlify", "CI/CD", "E-Commerce"],
    period: "June 2025 - July 2025",
    href: "https://danietasoven.netlify.app/",
    slug: "danietas-oven",
    status: "Live",
    metrics: "Full e-commerce platform with admin dashboard",
  },
  {
    title: "Government Data Automation",
    client: "Private Client",
    description:
      "Automated extraction of 30,000+ records from complex government website with highly inconsistent and deeply nested HTML tables. Developed robust Python script to navigate and parse data, producing clean CSV format.",
    tags: ["Python", "Web Scraping", "Data Processing", "Automation"],
    period: "January 2025 - February 2025",
    href: null,
    slug: "data-automation",
    status: "Completed",
    metrics: "Saved hundreds of hours of manual labor",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          10+ Production Systems Delivered
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A comprehensive showcase of production systems built for medical
          institutions, compliance platforms, and e-commerce solutions. Each
          project represents end-to-end ownership from concept to deployment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {allProjects.map((project) => (
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
              {/* Status Badge & Period */}
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Live"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : project.status === "In Progress"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        : project.status === "Archived"
                          ? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                          : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {project.period}
                </span>
              </div>

              {/* Title & Client */}
              <CardTitle className="text-xl font-semibold">
                {project.title}
              </CardTitle>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {project.client}
              </p>

              {/* Tech Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <CardDescription className="mt-3">
                {project.description}
              </CardDescription>

              {/* Metrics */}
              <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {project.metrics}
              </p>

              {/* Links */}
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
    </section>
  );
}
