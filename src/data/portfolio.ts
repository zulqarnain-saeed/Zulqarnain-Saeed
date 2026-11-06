export const profile = {
  name: "Zulqarnain Saeed",
  role: "Computer Science Undergraduate",
  location: "Lahore, Pakistan",
  email: "zulqarnainsaeed2005@gmail.com",
  phone: "+92 347 4897898",
  phoneHref: "tel:+923474897898",
  github: "https://github.com/zulqarnain-saeed",
  linkedin: "https://www.linkedin.com/in/zulqarnain-saeed/",
  leetcode: "https://leetcode.com/u/zulqarnain-saeed/",
  hackerrank: "https://www.hackerrank.com/profile/zulqarnain_saeed",
  resume: "/Zulqarnain_Saeed_Resume.pdf",
  portrait: "/me.jpg",
  availability: "Open to software & IT internships",
  summary:
    "BS Computer Science student at the University of Central Punjab. I build modular C++ systems, Python tools, and deployed websites, and I am aiming toward DevOps, DevSecOps, and cloud engineering.",
};

export type SkillKey = "cpp" | "web" | "tools";

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  detail: string;
  stack: string[];
  skills: SkillKey[];
  image?: string;
  art?: "nexus" | "os" | "zaq" | "zsat" | "zakat";
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "nexus",
    title: "Nexus Grid",
    eyebrow: "C++ · Data structures",
    year: "2026",
    summary:
      "City emergency-response simulator: routing, dispatch, inventory, and citizen lookup across 10+ modules.",
    detail:
      "Fourth-semester data structures project. Applies Dijkstra, graphs, AVL and BST trees, heaps, hash tables, queues, stacks, and Huffman coding. Manages 100+ records through file handling, with route planning, resource allocation, and log compression.",
    stack: ["C++", "Graphs", "Dijkstra", "AVL / BST", "Heaps", "Hashing", "File I/O"],
    skills: ["cpp"],
    art: "nexus",
    github: "https://github.com/zulqarnain-saeed/Nexus-Grid-Recommendation-System",
    featured: true,
  },
  {
    id: "os",
    title: "Interactive OS Simulator",
    eyebrow: "C++ · OOP",
    year: "2026",
    summary:
      "Eight-plus module operating system simulator covering scheduling, memory, devices, and a file system.",
    detail:
      "Third-semester OOP project. Models FCFS and priority scheduling, memory allocation, device management, file operations, and a system clock. Built with encapsulation, inheritance, and polymorphism across 15+ C++ source and header files.",
    stack: ["C++", "OOP", "STL", "FCFS", "Priority scheduling"],
    skills: ["cpp"],
    art: "os",
    github: "https://github.com/zulqarnain-saeed/Interactive-OS-Simulator",
    featured: true,
  },
  {
    id: "zentorix",
    title: "Zentorix",
    eyebrow: "Web · Founder",
    year: "2026",
    summary:
      "Business site for Zentorix — web development, custom software, and IT services, shipped and deployed.",
    detail:
      "Founded Zentorix and took the public site from layout through deployment. Responsive pages in HTML, CSS, and JavaScript, covering services, process, and a contact path for new work.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    skills: ["web"],
    image: "/projects/zentorix.jpg",
    github: "https://github.com/zulqarnain-saeed/zentorix",
    live: "https://zentorix.netlify.app/",
    featured: true,
  },
  {
    id: "video",
    title: "Video Splicer",
    eyebrow: "Web · Tool",
    year: "2026",
    summary:
      "Browser video editor that trims clips locally and stitches the keep-ranges back into one file.",
    detail:
      "Marks sections to remove and joins what remains, without sending the file to a server. Built as a focused single-page tool for students and creators who need a simple cut.",
    stack: ["HTML", "CSS", "JavaScript"],
    skills: ["web", "tools"],
    image: "/projects/video.jpg",
    github: "https://github.com/zulqarnain-saeed/video_splicer",
    live: "https://zulqarnain-saeed.github.io/video_splicer/",
  },
  {
    id: "zaq",
    title: "ZAQ Bank",
    eyebrow: "C++ · File handling",
    year: "2025",
    summary:
      "Console bank for 50+ accounts: login, deposits, withdrawals, transfers, and transaction history.",
    detail:
      "Second-semester programming fundamentals project. About 600 lines of modular C++ with input validation and persistent account records. Avoids a pile of globals in favor of clear functions and file-backed state.",
    stack: ["C++", "File handling", "Validation"],
    skills: ["cpp"],
    art: "zaq",
    github: "https://github.com/zulqarnain-saeed/Zaq_Bank_Management_System",
  },
  {
    id: "zsat",
    title: "Z-SAT Bank",
    eyebrow: "C++ · Group project",
    year: "2025",
    summary:
      "ATM-style console bank: CNIC account creation, PIN change, loans, currency conversion, and a help chatbot.",
    detail:
      "Group build with Shavaiz Jamil, Talha Usman, and Anas Yaseen. Covers balance inquiry, deposits, withdrawals, and basic file handling on top of loops, conditionals, arrays, and functions.",
    stack: ["C++", "Arrays", "Functions", "File I/O"],
    skills: ["cpp", "tools"],
    art: "zsat",
    github: "https://github.com/zulqarnain-saeed/Z-SAT-Bank-System",
  },
  {
    id: "zakat",
    title: "Zakat Calculator",
    eyebrow: "C++ · Tool",
    year: "2025",
    summary:
      "Calculates 2.5% Zakat from cash, gold, silver, investments, stock, and liabilities.",
    detail:
      "Console tool that takes a gold price, derives nisab, subtracts liabilities, and shows net worth before and after payment. Built to make the yearly calculation explicit instead of a spreadsheet guess.",
    stack: ["C++", "Console", "Arithmetic"],
    skills: ["cpp", "tools"],
    art: "zakat",
    github: "https://github.com/zulqarnain-saeed/Zakat_Calculator",
  },
  {
    id: "cafe",
    title: "Cafe & Co",
    eyebrow: "Web · Hospitality",
    year: "2026",
    summary: "Café site for Cafe & Co with menu, gallery, reviews, and a booking path.",
    detail:
      "A dark, hospitality-focused website introducing the café, its menu, and how to book a table. Deployed on GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    skills: ["web"],
    image: "/projects/cafe.jpg",
    github: "https://github.com/zulqarnain-saeed/Cafe-Co",
    live: "https://zulqarnain-saeed.github.io/Cafe-Co/",
  },
  {
    id: "dera",
    title: "Dera Ali Akbar",
    eyebrow: "Web · Restaurant",
    year: "2026",
    summary: "Restaurant website for Dera Ali Akbar — menu, gallery, and reservations.",
    detail:
      "Presents the dining room, signature plates, and a reserve call-to-action. Built as a responsive business site and published on GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    skills: ["web"],
    image: "/projects/dera.jpg",
    github: "https://github.com/zulqarnain-saeed/Dera-Ali-Akbar",
    live: "https://zulqarnain-saeed.github.io/Dera-Ali-Akbar/",
  },
  {
    id: "sensations",
    title: "Sensations Bake & Coffee",
    eyebrow: "Web · Bakery",
    year: "2026",
    summary: "Bakery and coffee house site with story, menu, and visit details.",
    detail:
      "Online presence for Sensations Bake & Coffee House in Rahim Yar Khan, covering the counter, the hours, and how to get there.",
    stack: ["HTML", "CSS", "JavaScript"],
    skills: ["web"],
    image: "/projects/sensations.jpg",
    github: "https://github.com/zulqarnain-saeed/Sensations-Bake-Coffee-House",
    live: "https://zulqarnain-saeed.github.io/Sensations-Bake-Coffee-House/",
  },
  {
    id: "azmat",
    title: "Azmat Homestay",
    eyebrow: "Web · Hospitality",
    year: "2026",
    summary: "Boys hostel website with rooms, amenities, reviews, and a booking contact.",
    detail:
      "Introduces Azmat Homestay Boys Hostel to prospective residents: location, rooms, and a direct way to get in touch. Live on GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    skills: ["web"],
    image: "/projects/azmat.jpg",
    github: "https://github.com/zulqarnain-saeed/Azmat-Homestay-Boys-hostel-",
    live: "https://zulqarnain-saeed.github.io/Azmat-Homestay-Boys-hostel-/",
  },
  {
    id: "flower",
    title: "Flower Animation",
    eyebrow: "CSS · Motion",
    year: "2026",
    summary: "A small interactive bloom — velvet textures, a rose, and a tap-to-open sequence.",
    detail:
      "Motion study in CSS and the browser. A loading ritual opens into the flower rather than a static illustration.",
    stack: ["HTML", "CSS"],
    skills: ["web", "tools"],
    image: "/projects/flower.jpg",
    github: "https://github.com/zulqarnain-saeed/flower-animation-",
    live: "https://zulqarnain-saeed.github.io/flower-animation-/",
  },
  {
    id: "portfolio-site",
    title: "Portfolio on Netlify",
    eyebrow: "Web · Personal",
    year: "2025",
    summary: "Earlier public portfolio — the site currently live at zulqarnain-saeed.netlify.app.",
    detail:
      "The published personal site and the GitHub profile repository that carries the résumé, portrait, and project index. This page is the rebuilt version of that work.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    skills: ["web"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/zulqarnain-saeed/Zulqarnain-Saeed",
    live: "https://zulqarnain-saeed.netlify.app/",
  },
];

export const filters: { id: "all" | SkillKey; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cpp", label: "C++" },
  { id: "web", label: "Web" },
  { id: "tools", label: "Tools" },
];

export const focus = [
  {
    num: "01",
    title: "C++ systems",
    body: "Console applications with object-oriented design, STL, and file-backed state — from banks to an OS simulator.",
    tags: ["C++", "OOP", "STL", "File I/O"],
  },
  {
    num: "02",
    title: "Python",
    body: "Coursework and certificates in Python fundamentals and data structures, used for assignments and small automation.",
    tags: ["Python", "Functions", "Data structures"],
  },
  {
    num: "03",
    title: "Web",
    body: "Responsive business sites shipped for Zentorix and local hospitality clients, deployed on Netlify and GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    num: "04",
    title: "Algorithms",
    body: "Graphs, trees, heaps, hashing, and shortest paths applied inside Nexus Grid rather than left as textbook diagrams.",
    tags: ["DSA", "Dijkstra", "AVL", "Heaps"],
  },
  {
    num: "05",
    title: "Linux & systems",
    body: "Operating systems, networking fundamentals, and the command line — including Cisco Linux Essentials.",
    tags: ["Linux", "Ubuntu", "OS", "Networking"],
  },
  {
    num: "06",
    title: "DevOps direction",
    body: "Actively studying DevOps, DevSecOps, cloud, and automation as the next professional step after core CS.",
    tags: ["DevOps", "DevSecOps", "Cloud", "Git"],
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["C", "C++", "Python", "SQL / MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Computer science",
    items: ["Data structures", "OOP", "Graph algorithms", "Operating systems", "DBMS", "File I/O"],
  },
  {
    title: "Tools & IT",
    items: ["Git", "GitHub", "VS Code", "Visual Studio", "Ubuntu", "Debugging", "Networking"],
  },
];

export const stackBars = [
  { label: "C++ systems", value: 5, note: "5 repositories" },
  { label: "Web (HTML / CSS / JS)", value: 8, note: "8 repositories" },
  { label: "Python coursework", value: 2, note: "2 certificates" },
];

export const experience = [
  {
    org: "Zentorix",
    role: "Founder & web developer",
    when: "2026 — present",
    place: "Lahore",
    points: [
      "Founded a small practice offering web development, custom software, and IT solutions.",
      "Designed, built, and deployed the public Zentorix website.",
    ],
  },
  {
    org: "Mindbridge",
    role: "Customer support representative",
    when: "May — July 2024",
    place: "Lahore",
    points: [
      "Handled 80–90 customer calls a day and logged them in the CRM.",
      "Reached 92% first-contact resolution through troubleshooting and clear follow-up.",
    ],
  },
  {
    org: "UCP Rotaract Club",
    role: "Media team",
    when: "Student society",
    place: "University of Central Punjab",
    points: [
      "Supported club communication and campus initiatives with the media team.",
    ],
  },
];

export const certificates = [
  {
    id: "linux",
    issuer: "Cisco Networking Academy",
    track: "Linux",
    title: "Linux Essentials",
    when: "Issued Oct 2026",
    credential: "aed3a0e6-05a5-41af-8af3-8b89029e7b0a",
    href: "https://www.netacad.com/certificates?issuanceId=aed3a0e6-05a5-41af-8af3-8b89029e7b0a",
    featured: true,
  },
  {
    id: "google-it",
    issuer: "Google",
    track: "IT support",
    title: "Technical Support Fundamentals",
    when: "Issued Mar 2025",
    credential: "W7M1YBNF3M9P",
    href: "https://www.coursera.org/verify/W7M1YBNF3M9P",
    featured: true,
  },
  {
    id: "google-net",
    issuer: "Google",
    track: "Networking",
    title: "The Bits and Bytes of Computer Networking",
    when: "Issued Jun 2025",
    credential: "FJ3U0NZWMS2L",
    href: "https://www.coursera.org/verify/FJ3U0NZWMS2L",
    featured: true,
  },
  {
    id: "google-sec",
    issuer: "Google",
    track: "Security",
    title: "Play It Safe: Manage Security Risks",
    when: "Issued May 2025",
    credential: "4DS4USRGQGA3",
    href: "https://www.coursera.org/verify/4DS4USRGQGA3",
  },
  {
    id: "py-start",
    issuer: "University of Michigan",
    track: "Python",
    title: "Programming for Everybody",
    when: "Issued Dec 2024",
    credential: "XAFVE4RXEW1H",
    href: "https://www.coursera.org/verify/XAFVE4RXEW1H",
  },
  {
    id: "py-ds",
    issuer: "University of Michigan",
    track: "Python",
    title: "Python Data Structures",
    when: "Issued Jun 2025",
    credential: "GTIOBR22FZV6",
    href: "https://www.coursera.org/verify/GTIOBR22FZV6",
  },
  {
    id: "cpp",
    issuer: "Simplilearn",
    track: "C++",
    title: "Programming with C++",
    when: "Issued Jun 2025",
    credential: "I6506RBS5UV9",
    href: "https://www.coursera.org/verify/I6506RBS5UV9",
  },
  {
    id: "comms",
    issuer: "LearnKartS / HEC",
    track: "Professional skills",
    title: "Effective Communication Skills",
    when: "Issued Jun 2026",
    credential: "92EH7LWJ6AXX",
    href: "https://www.coursera.org/verify/92EH7LWJ6AXX",
  },
  {
    id: "ms-debug",
    issuer: "Microsoft Learn Student Ambassadors",
    track: "Islamabad",
    title: "Debugging The Interview",
    when: "Issued Jul 2025",
    credential: "Listed on LinkedIn",
    href: "https://www.linkedin.com/in/zulqarnain-saeed/",
  },
];

export const achievements = [
  {
    title: "HPE CodeWars 2025",
    detail: "17th place · 1,730 points · competitive programming in C++.",
  },
  {
    title: "CGPA 3.56 / 4.00",
    detail: "BS Computer Science, University of Central Punjab. 5th semester. Expected 2028.",
  },
  {
    title: "13 public repositories",
    detail: "Systems projects and deployed client sites, each linked from this page.",
  },
];
