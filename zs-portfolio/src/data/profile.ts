// ============================================================
// PORTFOLIO CONTENT DATA — Zulqarnain Saeed
// All information is verified from public sources or directly
// provided by the portfolio owner.
// ============================================================

export interface CaseStudy {
  problem: string;
  approach: string;
  architecture: string[];
  keyFeatures: string[];
  outcomes: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: readonly string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  category: "systems" | "web";
  highlight: string;
  color: "teal" | "indigo" | "amber" | "slate" | "green" | "orange";
  caseStudy?: CaseStudy;
}

export const personal = {
  name: "Zulqarnain Saeed",
  shortName: "ZS",
  headline: "CS Student & Builder",
  tagline: "Building real software with curiosity, fundamental engineering, and clean code.",
  bio: [
    "I'm a Computer Science undergraduate at the University of Central Punjab, Lahore — exploring how software actually works, from algorithmic foundations and operating system internals to modern scalable web architectures.",
    "My technical interests center on software engineering, systems, DevOps, and DevSecOps. I believe that deeply understanding technical fundamentals — data structures, memory models, network layers, and automation — is what enables developers to build resilient, production-grade systems.",
    "Outside university coursework, I build real-world software. I founded Zentorix to design and deliver quality digital products for clients, and I am actively seeking software engineering and IT internships where I can contribute meaningfully and learn alongside senior engineers.",
  ],
  email: "zulqarnainsaeed2005@gmail.com",
  location: "Lahore, Pakistan",
  university: "University of Central Punjab (UCP)",
  degree: "BS Computer Science",
  enrolledYear: 2024,
  graduationYear: 2028,
  openToWork: true,
  links: {
    github: "https://github.com/zulqarnain-saeed",
    linkedin: "https://www.linkedin.com/in/zulqarnain-saeed/",
    leetcode: "https://leetcode.com/u/zulqarnain-saeed/",
    hackerrank: "https://www.hackerrank.com/profile/zulqarnain_saeed",
    portfolio: "https://zulqarnain-saeed.netlify.app/",
    zentorix: "https://zentorix.netlify.app/",
  },
} as const;

export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    items: [
      { name: "C", exploring: false },
      { name: "C++", exploring: false },
      { name: "Python", exploring: false },
      { name: "JavaScript (ES6+)", exploring: false },
      { name: "HTML5 & CSS3", exploring: false },
      { name: "SQL", exploring: false },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: "cpu",
    items: [
      { name: "Data Structures & Algorithms", exploring: false },
      { name: "Object-Oriented Programming (OOP)", exploring: false },
      { name: "Operating Systems Internals", exploring: false },
      { name: "Computer Networking Basics", exploring: false },
      { name: "Memory Management & Pointers", exploring: false },
    ],
  },
  {
    category: "Web & Frontend",
    icon: "layers",
    items: [
      { name: "React.js", exploring: false },
      { name: "Next.js", exploring: false },
      { name: "Tailwind CSS", exploring: false },
      { name: "Responsive Web Architecture", exploring: false },
      { name: "Modern Component Design", exploring: false },
    ],
  },
  {
    category: "Tools & Databases",
    icon: "database",
    items: [
      { name: "MySQL", exploring: false },
      { name: "Git & Version Control", exploring: false },
      { name: "GitHub Collaboration", exploring: false },
      { name: "Linux CLI & Bash Basics", exploring: false },
      { name: "VS Code & Debugging Tools", exploring: false },
    ],
  },
  {
    category: "Currently Exploring",
    icon: "compass",
    items: [
      { name: "DevOps & CI/CD Pipelines", exploring: true },
      { name: "DevSecOps & Secure Coding", exploring: true },
      { name: "Cloud Infrastructure (AWS/GCP)", exploring: true },
      { name: "TypeScript & Static Typing", exploring: true },
      { name: "Docker & Containerization", exploring: true },
    ],
  },
] as const;

export const projects: Project[] = [
  {
    id: "nexus-grid",
    title: "Nexus Grid Recommendation System",
    shortDesc: "An intelligent recommendation engine engineered from algorithmic and mathematical fundamentals.",
    description:
      "A content recommendation system that analyzes interaction patterns and item attributes to deliver personalized recommendations. Built from the ground up to demonstrate a thorough grasp of vector similarity calculations, sparse data representations, and ranking heuristics without relying on high-level black-box machine learning APIs.",
    tags: ["Python", "Algorithms", "Data Structures", "Linear Algebra"],
    github: "https://github.com/zulqarnain-saeed",
    demo: null,
    featured: true,
    category: "systems",
    highlight: "Custom cosine-similarity ranking engine built without external ML framework dependencies",
    color: "teal",
    caseStudy: {
      problem:
        "Modern applications require relevance-driven content matching, yet beginner projects often rely on heavyweight external ML APIs that obscure the underlying algorithmic mechanics and introduce latency overhead.",
      approach:
        "Engineered a lightweight, pure-Python recommendation pipeline utilizing structured user-item interaction matrices and cosine-similarity computations across feature vectors.",
      architecture: [
        "Feature Vectorizer: Normalizes user preferences and item tags into clean dimensional spaces.",
        "Similarity Matrix Engine: Computes sparse dot-products and vector magnitudes efficiently.",
        "Ranking & Candidate Generator: Filters out consumed items and sorts candidate rankings with top-K thresholding.",
      ],
      keyFeatures: [
        "Cold-start handling through attribute fallback weighting.",
        "Zero external heavyweight machine learning framework dependencies.",
        "Deterministic, inspectable scoring for every recommended candidate.",
      ],
      outcomes:
        "Deepened practical understanding of linear algebra concepts, memory-efficient Python data structures, and algorithmic computational complexity (O(N·M) evaluation).",
    },
  },
  {
    id: "interactive-os-simulator",
    title: "Interactive OS Simulator",
    shortDesc: "A modular systems simulator visualizing scheduling, memory allocation, and process states.",
    description:
      "An educational systems simulator developed in C++ that brings operating system theoretical concepts to life. Simulates CPU process scheduling algorithms (FCFS, SJF, Round Robin, Priority), memory partitioning strategies, and state transitions with clear terminal visual output.",
    tags: ["C++", "Operating Systems", "Algorithms", "Concurrency"],
    github: "https://github.com/zulqarnain-saeed",
    demo: null,
    featured: true,
    category: "systems",
    highlight: "Implements multiple CPU scheduling algorithms with turnaround and wait time analytics",
    color: "indigo",
    caseStudy: {
      problem:
        "Concepts such as context switching, CPU burst times, quantum preemption, and memory fragmentation are difficult to internalize through textbook theory alone.",
      approach:
        "Designed an event-driven discrete simulation engine in modern C++ that mimics a real CPU dispatch loop, ready queue, and memory management unit.",
      architecture: [
        "Process Control Block (PCB): Tracks PID, state, arrival time, burst duration, priority, and wait metrics.",
        "Pluggable Scheduler Interface: Modular design enabling runtime switching between FCFS, Round Robin, SJF, and Priority algorithms.",
        "Performance Analyzer: Automatically computes average wait times, turnaround times, and CPU utilization benchmarks.",
      ],
      keyFeatures: [
        "Configurable time quantum for Round Robin preemption visualization.",
        "Simulated context-switch overhead penalties.",
        "Tabular reporting comparing efficiency metrics across all scheduling algorithms.",
      ],
      outcomes:
        "Mastered low-level C++ state manipulation, OOP polymorphism, queue and priority heap structures, and core OS process management principles.",
    },
  },
  {
    id: "zentorix",
    title: "Zentorix — Software & Web Venture",
    shortDesc: "My entrepreneurial venture delivering high-performance, modern web platforms for real clients.",
    description:
      "Zentorix is a digital agency and software platform I founded to deliver modern, fast, and conversion-focused web solutions. Building and operating it provides continuous hands-on experience covering the entire product lifecycle: technical scoping, frontend engineering, responsive design, and production deployment.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Production Deployment"],
    github: null,
    demo: "https://zentorix.netlify.app/",
    featured: true,
    category: "web",
    highlight: "Live commercial platform delivering real client engagements and product ownership",
    color: "amber",
    caseStudy: {
      problem:
        "Small businesses, contractors, and educational academies frequently operate with sluggish, non-responsive websites that fail to convert visitors and provide poor mobile user experiences.",
      approach:
        "Founded Zentorix to establish a modern standard: building ultra-fast, mobile-first web applications using React, Next.js, and Tailwind CSS with strict attention to performance and UX hierarchy.",
      architecture: [
        "Component Design System: Reusable, accessible UI components with consistent styling tokens.",
        "Performance Optimization Pipeline: Pre-rendered static pages, optimized web assets, and responsive media handling.",
        "Lead Capture & Contact Workflow: Secure client inquiry forms with anti-spam protections.",
      ],
      keyFeatures: [
        "Sub-second load times and fluid multi-device responsiveness.",
        "Semantic SEO structure with OpenGraph social preview integration.",
        "Production deployment with zero-downtime CI/CD on Netlify.",
      ],
      outcomes:
        "Successfully launched commercial projects for clients, managing the full delivery cycle from requirement gathering to post-deployment verification.",
    },
  },
  {
    id: "banking-system",
    title: "Banking System in C++",
    shortDesc: "A console-based banking application demonstrating applied OOP design and data persistence.",
    description:
      "A structured C++ banking software application implementing object-oriented programming principles. Provides secure account creation, deposits, withdrawals, fund transfers, and balance inquiries with robust input validation, account hierarchy, and local file serialization.",
    tags: ["C++", "Object-Oriented Programming", "File I/O", "Data Structures"],
    github: "https://github.com/zulqarnain-saeed",
    demo: null,
    featured: false,
    category: "systems",
    highlight: "Clean OOP class hierarchy with persistent transaction logs and input sanitation",
    color: "slate",
    caseStudy: {
      problem:
        "Building software that handles financial transactions requires strict encapsulation, accurate state updates, and defensive programming against edge cases like negative balances.",
      approach:
        "Structured the application with clean object-oriented class separation, isolating account logic, persistence mechanisms, and terminal UI interactions.",
      architecture: [
        "Account Base Class: Encapsulates account number, owner name, balance, and transaction history.",
        "Specialized Accounts: Derived Savings and Checking types with specific interest and withdrawal limit rules.",
        "File Storage Layer: Handles persistent serialization so account balances persist across execution sessions.",
      ],
      keyFeatures: [
        "Defensive error handling for overdraft prevention and invalid input rejection.",
        "Persistent file-based ledger storing all historical credit and debit events.",
        "Modular class design adhering to Single Responsibility and Encapsulation principles.",
      ],
      outcomes:
        "Demonstrated solid command of C++ classes, pointers, memory safety, standard library streams, and defensive software design.",
    },
  },
  {
    id: "al-huda-website",
    title: "Al Huda Online Quran Academy",
    shortDesc: "A comprehensive educational platform connecting students and teachers worldwide.",
    description:
      "A complete web platform built for an online Islamic education academy. Features course catalogs, teacher profiles, curriculum outlines for Tajweed, Hifz, and Arabic grammar, and structured student registration flows designed for international accessibility.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Client Work"],
    github: null,
    demo: null,
    featured: false,
    category: "web",
    highlight: "Client project delivered through Zentorix with international responsive accessibility",
    color: "green",
  },
  {
    id: "roofing-website",
    title: "Roofing Contractor Commercial Website",
    shortDesc: "A high-conversion marketing website built for a commercial home improvement business.",
    description:
      "A business landing page engineered specifically to drive quote requests and service inquiries. Features prominent service breakdowns, emergency repair CTAs, testimonial displays, and optimized mobile touchpoints.",
    tags: ["React.js", "Tailwind CSS", "Lead Generation", "Responsive Design"],
    github: null,
    demo: null,
    featured: false,
    category: "web",
    highlight: "Commercial frontend built with conversion-focused visual hierarchy and fast load times",
    color: "orange",
  },
];

export const timeline = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science (BS CS)",
    organization: "University of Central Punjab (UCP)",
    location: "Lahore, Pakistan",
    period: "2024 – 2028 (Expected)",
    description:
      "Pursuing a 4-year degree in Computer Science. Coursework emphasizes core fundamentals including Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, and Database Management Systems. Actively translating theory into functional projects.",
    current: true,
    icon: "graduation",
  },
  {
    type: "venture",
    title: "Founder & Lead Developer",
    organization: "Zentorix",
    location: "Lahore, Pakistan (Remote)",
    period: "2024 – Present",
    description:
      "Founded Zentorix to provide professional frontend development and modern web applications. Leading project scoping, client communications, technical implementation, and production deployments on Netlify.",
    current: true,
    link: "https://zentorix.netlify.app/",
    icon: "briefcase",
  },
  {
    type: "work",
    title: "Frontend Web Developer (Freelance)",
    organization: "Independent Practice (Sikaty, Contra)",
    location: "Remote",
    period: "2024 – Present",
    description:
      "Delivering high-performance, mobile-responsive web applications for businesses and educational organizations. Utilizing React.js, Next.js, and Tailwind CSS to create clean user interfaces with optimal performance and SEO scores.",
    current: true,
    icon: "code",
  },
] as const;

export const certifications = [
  {
    title: "BS Computer Science Academic Foundations",
    issuer: "University of Central Punjab (UCP)",
    date: "2024 – Present",
    credential: "Verified Degree Enrollment",
    description:
      "Completed rigorous coursework in C/C++ Programming, Object-Oriented Design, and Discrete Mathematics; maintaining strong academic standing.",
    status: "Active Student",
  },
  {
    title: "Algorithmic Problem Solving & Data Structures",
    issuer: "Independent Practice (LeetCode & HackerRank)",
    date: "2024 – Present",
    credential: "Public Profiles",
    description:
      "Continuous algorithmic practice focusing on arrays, linked lists, trees, recursion, sorting algorithms, and complexity analysis.",
    status: "Active Practice",
  },
  {
    title: "DevOps & Cloud Computing Roadmap",
    issuer: "Independent Professional Study",
    date: "2025 Roadmap",
    credential: "In Progress",
    description:
      "Actively working toward formal cloud and containerization certifications (Docker, Linux Foundation, AWS fundamentals) as part of career development.",
    status: "In Progress",
  },
] as const;

export const codingProfiles = [
  {
    platform: "GitHub",
    handle: "zulqarnain-saeed",
    url: "https://github.com/zulqarnain-saeed",
    description: "Explore my public code repositories, projects, and active development activity.",
    icon: "github",
    accent: "#6e7681",
    tag: "Source Code & Projects",
  },
  {
    platform: "LeetCode",
    handle: "zulqarnain-saeed",
    url: "https://leetcode.com/u/zulqarnain-saeed/",
    description: "Continuous practice on Data Structures, Algorithms, and technical problem solving.",
    icon: "code2",
    accent: "#FFA116",
    tag: "Data Structures & Algos",
  },
  {
    platform: "HackerRank",
    handle: "zulqarnain_saeed",
    url: "https://www.hackerrank.com/profile/zulqarnain_saeed",
    description: "Skill assessments, competitive programming challenges, and syntax mastery.",
    icon: "terminal",
    accent: "#00EA64",
    tag: "Skill Challenges",
  },
] as const;
