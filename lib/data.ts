export type Project = {
    slug: string;
    title: string;
    organization: string;
    category: "Full-Stack Development" | "Frontend Modernization" | "Automation & Compliance" | "Middleware Development" | "Systems Architecture" | "Other";
    period: string;
    status: "In Production" | "Completed" | "In Progress" | "Archived";
    description: string;
    tags: string[];
    achievements: string[];
    challenges: string[];
    solutions: string[];
    technologies: {
        backend: string[];
        frontend: string[];
        database: string[];
    };
    keyFeatures: { title: string; description: string }[];
    impact: { metric: string; description: string }[];
    learnings: string[];
    links?: {
        live?: string;
        repo?: string;
    };
};

export const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const skills = {
    languages: ["C#", ".NET", "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    frameworks: ["React", "Next.js", "Eleventy", "Bootstrap", "Tailwind CSS", "Entity Framework"],
    tools: ["Git", "VS Code", "Visual Studio", "Vite", "Netlify", "Docker"],
    core: ["Full-Stack Development", "System Architecture", "Database Design", "Web Scraping & Automation", "Payment Integration", "Compliance Systems"],
};

export const projects: Project[] = [
    {
        slug: "myinvois-middleware",
        title: "MyInvois Compliance Middleware",
        organization: "Webtechnic",
        category: "Automation & Compliance",
        period: "May 2025 - Present",
        status: "In Progress",
        description: "An ASP.NET middleware solution designed to bridge legacy e-commerce systems with LHDN’s digital tax system, enabling automated compliance through OAuth authentication and UBL 2.1 invoice generation.",
        tags: ["ASP.NET", "LHDN MyInvois", "UBL 2.1", "OAuth", "Middleware"],
        achievements: [
            "Designed a seamless bridge for legacy systems to communicate with LHDN APIs.",
            "Implemented robust OAuth 2.0 authentication flow for secure data transmission.",
            "Automated the generation and validation of complex UBL 2.1 invoice XML payloads.",
        ],
        challenges: [
            "Integrating with the complex and strict LHDN MyInvois API specifications.",
            "Handling the secure mapping of legacy database schemas to the rigid UBL 2.1 format.",
            "Ensuring real-time performance to avoid delaying e-commerce checkout flows.",
        ],
        solutions: [
            "Developed a modular adapter pattern to easily map various legacy data structures to a unified internal model before serialization.",
            "Implemented background processing jobs (Hangfire) to handle invoice submission asynchronously, preventing checkout latency.",
            "Built a comprehensive validation layer that pre-checks payloads against LHDN rules before submission to reduce API rejection rates.",
        ],
        technologies: {
            backend: ["ASP.NET Core", "C#", "Hangfire"],
            frontend: ["Razor Pages (Admin Dashboard)"],
            database: ["SQL Server", "Redis (Caching)"],
        },
        keyFeatures: [
            {
                title: "UBL 2.1 Generation",
                description: "Automated conversion of transaction data into compliant UBL 2.1 XML format.",
            },
            {
                title: "Digital Signature Integration",
                description: "Signing of invoice payloads using SHA-256 digital certificates for non-repudiation.",
            },
            {
                title: "OAuth 2.0 Auth",
                description: "Secure automated token management and renewal for LHDN API access.",
            },
            {
                title: "Failover Queue",
                description: "Automatic retry mechanisms for handling LHDN API downtime or timeouts.",
            },
        ],
        impact: [
            { metric: "100%", description: "Compliance with new national digital tax laws" },
            { metric: "<200ms", description: "Added latency to user checkout flow" },
        ],
        learnings: [
            "Deep understanding of the UBL 2.1 universal business language standard.",
            "Complexities of government regulatory compliance in software architecture.",
            "Advanced error handling strategies for critical financial middleware.",
        ],
    },
    {
        slug: "amm-portal-booking",
        title: "Academy of Medicine Booking Engine",
        organization: "Academy of Medicine of Malaysia (AMM)",
        category: "Full-Stack Development",
        period: "2024",
        status: "In Production",
        description: "A comprehensive event and booking engine serving Malaysia’s primary medical institution. Modeled after hotel booking systems, it handles complex registration workflows, group bookings, and automated invoicing.",
        tags: ["ASP.NET Web Forms", "SQL Server", "Code-First", "Booking Engine"],
        achievements: [
            "Built a 'hotel-style' booking engine capable of handling multi-day, multi-track conference registrations.",
            "Designed a Code-First database schema to support complex relationships between delegates, sponsors, and events.",
            "Revamped the public-facing portal with a modern UI, boosting member engagement.",
        ],
        challenges: [
            "Handling complex pricing tiers (Member vs Non-Member, Early Bird, Group rates).",
            "Migrating historical data from a legacy system without data loss.",
            "Ensuring transactional integrity during high-traffic registration openings.",
        ],
        solutions: [
            "Implemented a Strategy Pattern for the pricing engine to allow flexible rule definitions.",
            "Used database transactions and optimistic concurrency control to prevent overbooking.",
            "Created a robust data migration script with verification steps to ensure data integrity.",
        ],
        technologies: {
            backend: ["ASP.NET Web Forms", "C#", "Entity Framework"],
            frontend: ["Bootstrap", "jQuery", "Razor"],
            database: ["SQL Server"],
        },
        keyFeatures: [
            {
                title: "Hotel-Style Booking",
                description: "Intuitive flow for selecting rooms, add-ons, and workshops in a single transaction.",
            },
            {
                title: "Automated Invoicing",
                description: "Instant generation of PDF tax invoices upon successful payment.",
            },
            {
                title: "Member Portal",
                description: "Self-service dashboard for members to manage subscriptions and view history.",
            },
            {
                title: "Dynamic Pricing Engine",
                description: "Rule-based calculation for varying membership tiers and date-based discounts.",
            },
        ],
        impact: [
            { metric: "40%", description: "Increase in online registration utilization" },
            { metric: "Zero", description: "Double-booking incidents since launch" },
        ],
        learnings: [
            "Mastering complex SQL relationships and Code-First migrations.",
            "Importance of user experience in reducing support tickets for complex forms.",
            "Legacy modernization techniques within the .NET ecosystem.",
        ],
        links: {
            live: "https://www.acadmed.my/",
        },
    },
    {
        slug: "secure-voting-system",
        title: "Secure Medical Council Voting System",
        organization: "APPSPGHAN",
        category: "Systems Architecture",
        period: "2024",
        status: "Completed",
        description: "A high-security electronic voting platform designed for medical council elections, featuring anonymous ballots and auditable results.",
        tags: ["Entity Framework", "Security", "BCrypt", "Audit Trails"],
        achievements: [
            "Engineered an anonymous ballot system using GUID token generation to decouple votes from voter identities.",
            "Implemented BCrypt hashing to secure sensitive voter data.",
            "Built a real-time operations dashboard for turnout tracking without revealing vote trends.",
        ],
        challenges: [
            "Guaranteeing anonymity while preventing double-voting.",
            "Providing a verifiable audit trail for election commissioners.",
            "Ensuring system availability and security under potential attack vectors.",
        ],
        solutions: [
            "Utilized a 'blind signature' inspired approach where the voting token is cryptographically separated from the user identity upon issuance.",
            "Implemented immutable audit logs for every system action.",
            "Strict role-based access control (RBAC) to ensure no single admin could tamper with results.",
        ],
        technologies: {
            backend: ["ASP.NET", "C#", "Identity"],
            frontend: ["Razor", "Chart.js"],
            database: ["SQL Server"],
        },
        keyFeatures: [
            {
                title: "Anonymous Ballots",
                description: "Cryptographic separation of voter identity and cast vote.",
            },
            {
                title: "Real-time Dashboard",
                description: "Live monitoring of participation rates for election runners.",
            },
            {
                title: "Automated Auditing",
                description: "Generation of tamper-proof reports for post-election verification.",
            },
        ],
        impact: [
            { metric: "100%", description: "Trust rating from the medical council" },
            { metric: "2hrs", description: "Reduction in vote counting time vs manual paper ballots" },
        ],
        learnings: [
            "Principles of secure electronic voting and anonymity.",
            "Designing systems for high-stakes audits.",
            "Advanced Entity Framework security patterns.",
        ],
    },
    {
        slug: "audit-automation-script",
        title: "Government Database Scraper",
        organization: "Webtechnic",
        category: "Automation & Compliance",
        period: "Jan 2025",
        status: "Completed",
        description: "A Python-based automation tool that scraped and parsed over 30,000 records from a nested HTML government database, replacing a month-long manual entry task.",
        tags: ["Python", "BeautifulSoup", "Automation", "Data Scraping"],
        achievements: [
            "Reduced a 300-hour manual data entry workload to a 2-day automated process.",
            "Scraped and cleaned 30,000+ records from a poorly structured legacy website.",
            "Implemented intelligent error handling to manage connection drops and rate limits.",
        ],
        challenges: [
            "Handling inconsistent HTML structures and broken tags in the source site.",
            "Managing session timeouts and anti-bot measures.",
            "Data cleaning and normalization of free-text fields.",
        ],
        solutions: [
            "Built a robust parser using BeautifulSoup with fallback strategies for malformed HTML.",
            "Implemented a 'polite' crawling strategy with delays and user-agent rotation.",
            "Created an intermediate verification step where ambiguous data was flagged for manual review.",
        ],
        technologies: {
            backend: ["Python", "Pandas", "Requests"],
            frontend: ["CLI"],
            database: ["CSV / Excel"],
        },
        keyFeatures: [
            {
                title: "Resilient Scraping",
                description: "Auto-resume functionality and error logging for long-running jobs.",
            },
            {
                title: "Data Normalization",
                description: "Automated formatting of dates, names, and addresses into a standardized schema.",
            },
            {
                title: "Excel Export",
                description: "Direct generation of ready-to-use Excel files for the administrative team.",
            },
        ],
        impact: [
            { metric: "98%", description: "Reduction in man-hours required" },
            { metric: "30k+", description: "Records processed with high accuracy" },
        ],
        learnings: [
            "Advanced HTML parsing and DOM navigation.",
            "Ethical scraping practices and rate limiting.",
            "Data cleaning pipelines with Python Pandas.",
        ],
    },
    {
        slug: "event-management-matcvs",
        title: "MATCVS Event & Shopping Cart",
        organization: "MATCVS",
        category: "Full-Stack Development",
        period: "2025",
        status: "Completed",
        description: "A multi-role event management platform for medical workshops, featuring custom OWIN Cookie authentication and a seamless shopping cart experience for course enrollment.",
        tags: ["OWIN Auth", "Stripe", "iTextSharp", "Event Management"],
        achievements: [
            "Deployed a granular RBAC system for Admin, Sponsor, and Delegate user roles.",
            "Integrated Stripe Payment Gateway with webhooks for real-time transaction status updates.",
            "Automated PDF receipt and attendee manifest generation.",
        ],
        challenges: [
            "Managing concurrent registrations for limited-seat workshops.",
            "Handling complex state for the shopping cart across sessions.",
            "Securely processing payments and handling failures gracefully.",
        ],
        solutions: [
            "Implemented a persistent cart system using database-backed session storage.",
            "Used Stripe Webhooks to decouple payment processing from the user session, ensuring reliability.",
            "Developed a custom PDF generation engine using iTextSharp for branded receipts.",
        ],
        technologies: {
            backend: ["ASP.NET", "C#", "Stripe API", "iTextSharp"],
            frontend: ["Bootstrap", "jQuery"],
            database: ["SQL Server"],
        },
        keyFeatures: [
            {
                title: "Role-Based Access",
                description: "Distinct portals and permissions for Admins, Sponsors, and Attendees.",
            },
            {
                title: "Real-time Payments",
                description: "Instant payment confirmation and receipt generation via Stripe.",
            },
            {
                title: "Document Automation",
                description: "One-click export of attendee lists and financial reports.",
            },
        ],
        impact: [
            { metric: "100%", description: "Automation of receipt generation" },
            { metric: "Zero", description: "Payment discrepancies reported" },
        ],
        learnings: [
            "Third-party payment gateway integration nuances.",
            "PDF generation libraries in .NET.",
            "Advanced session management strategies.",
        ],
        links: {
            live: "https://matcvs.my/",
        },
    },
    {
        slug: "csamm-mst-modernization",
        title: "CSAMM & MST Site Modernization",
        organization: "College of Surgeons / MST",
        category: "Frontend Modernization",
        period: "2025",
        status: "In Production",
        description: "Modernization of legacy static sites for major medical societies, migrating them to Eleventy and Tailwind CSS to improve performance and maintainability.",
        tags: ["Eleventy", "Tailwind CSS", "CI/CD", "Static Site"],
        achievements: [
            "Migrated legacy HTML/CSS sites to a modern Jamstack architecture using Eleventy.",
            "Implemented automated CI/CD builds to streamline content updates.",
            "Centralized content management into reusable data modules, reducing maintenance time by 40%.",
        ],
        challenges: [
            "Preserving SEO rankings during the migration.",
            "Training non-technical staff to update content in the new system.",
            "Replicating complex legacy layouts in modern utility-first CSS.",
        ],
        solutions: [
            "Set up proper 301 redirects and maintained URL structures where possible.",
            "Created structured JSON/Markdown data files for easy content editing without touching code.",
            "Refactored CSS to use Tailwind's design tokens for consistency and maintainability.",
        ],
        technologies: {
            backend: ["Node.js (Build time)"],
            frontend: ["Eleventy", "Tailwind CSS", "Nunjucks"],
            database: ["Markdown/JSON"],
        },
        keyFeatures: [
            {
                title: "Incremental Builds",
                description: "Lightning-fast build times for rapid development cycles.",
            },
            {
                title: "Component Architecture",
                description: "Reusable Nunjucks components for headers, footers, and cards.",
            },
            {
                title: "Automated Deployment",
                description: "Push-to-deploy workflow via Git integration.",
            },
        ],
        impact: [
            { metric: "40%", description: "Reduction in maintenance time" },
            { metric: "99", description: "Lighthouse Performance Score" },
        ],
        learnings: [
            "Jamstack architecture patterns and benefits.",
            "Tailwind CSS best practices for scalability.",
            "Static site generation optimization strategies.",
        ],
        links: {
            live: "https://csamm.asm.org.my/",
        },
    },
    {
        slug: "danietas-oven",
        title: "Danieta's Oven",
        organization: "Personal Project",
        category: "Full-Stack Development",
        period: "2025",
        status: "In Production",
        description: "A full-stack e-commerce bakery store built with React and Next.js, featuring a custom admin panel for inventory tracking and order management.",
        tags: ["React", "Next.js", "Vite", "E-Commerce"],
        achievements: [
            "Built a performant, SEO-friendly storefront using Next.js SSC.",
            "Developed a custom admin dashboard for real-time inventory management.",
            "Implemented a responsive design ensuring a smooth mobile shopping experience.",
        ],
        challenges: [
            "Managing global state for the shopping cart and user session.",
            "Optimizing image delivery for a visually rich product catalog.",
        ],
        solutions: [
            "Utilized React Context API for lightweight state management.",
            "Implemented Next.js Image component for automatic optimization and lazy loading.",
        ],
        technologies: {
            backend: ["Next.js API Routes"],
            frontend: ["React", "Tailwind CSS"],
            database: ["PostgreSQL (Supabase)"],
        },
        keyFeatures: [
            {
                title: "Custom Admin Panel",
                description: "Manage products, orders, and customers from a secure dashboard.",
            },
            {
                title: "Responsive Design",
                description: "Mobile-first approach for capturing on-the-go customers.",
            },
        ],
        impact: [
            { metric: "100%", description: "Custom built solution" },
        ],
        learnings: [
            "React hooks and state management patterns.",
            "Next.js App Router architecture.",
            "Building authenticated admin interfaces.",
        ],
        links: {
            live: "https://danietasoven.com/",
        },
    },
];

export const featuredProjects = projects.filter(p => ["myinvois-middleware", "amm-portal-booking", "audit-automation-script", "csamm-mst-modernization"].includes(p.slug));
