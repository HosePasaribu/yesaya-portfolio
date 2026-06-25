export const profile = {
  name: "Yesaya Pasaribu",
  role: "Penetration Tester",
  tagline: "Web · Android · API Security",
  location: "Bekasi, Indonesia",
  email: "carerra2804@gmail.com",
  phone: "+62 813-3481-3532",
  hackerone: "https://hackerone.com/narexsh",
  hackeroneHandle: "narexsh",
  linkedin: "https://linkedin.com/in/yesayapasaribu",
  github: "https://github.com/",
  cv: "/assets/Yesaya-Pasaribu-CV.pdf",
  availability: "Open to Onsite · Remote · Relocation — Worldwide",
  summary:
    "OSCP- and CEH-certified Penetration Tester with 3+ years of hands-on security research, specializing in web, Android, and API security. Verified bug bounty researcher on HackerOne and the Google Vulnerability Reward Program (VRP), with triaged reports and paid bounties on production systems — including a #1 ranking on a private, invite-only HackerOne program. Proven track record of responsible disclosure across 15+ enterprise targets in automotive, telecom, e-commerce, and enterprise software — including chained Critical findings such as SQL Injection, IDOR/BOLA, and Remote Code Execution.",
};

export const stats = [
  { value: "1157", label: "HackerOne Reputation", suffix: "" },
  { value: "1", label: "Rank on Private Program", prefix: "#" },
  { value: "15", label: "Organizations Disclosed", suffix: "+" },
  { value: "3", label: "Years of Research", suffix: "+" },
];

export const certifications = [
  {
    id: "oscp",
    name: "OSCP",
    full: "Offensive Security Certified Professional",
    issuer: "OffSec",
    image: "/assets/oscp.png",
    date: "Jun 2026",
    accent: "#ff6b35",
    blurb:
      "The industry's most respected hands-on offensive certification — 24-hour proctored exam exploiting live machines.",
  },
  {
    id: "ceh",
    name: "CEH",
    full: "Certified Ethical Hacker",
    issuer: "EC-Council (ANAB / ISO 17024)",
    image: "/assets/ceh.jpg",
    date: "Jan 2026",
    accent: "#c9a227",
    blurb:
      "ANSI-accredited credential covering the full ethical hacking lifecycle across enterprise attack surfaces.",
  },
  {
    id: "crtom",
    name: "CRTOM",
    full: "Certified Red Team Operations Management",
    issuer: "Red Team Leaders",
    image: "/assets/crtom.png",
    date: "Jan 2026",
    accent: "#e63946",
    blurb:
      "Red team operations, adversary emulation and engagement management for offensive security programs.",
  },
];

export const otherCerts = [
  "Networking & Security in Google Cloud — Google",
  "Cloud Computing Fundamentals (GCP) — Google",
  "System Administration & IT Infrastructure Services",
];

export const skills = [
  {
    category: "Security Tools",
    items: ["Burp Suite & Intruder", "OWASP ZAP", "Kali Linux", "Metasploit", "Wireshark", "Wazuh", "ADB"],
  },
  {
    category: "Vulnerabilities",
    items: ["SQL Injection", "IDOR / BOLA", "XSS", "SSRF", "CSRF", "RCE", "WebSocket Hijacking", "CORS Misconfig", "Broken Access Control"],
  },
  {
    category: "Mobile Security",
    items: ["APK Analysis", "Reverse Engineering", "Insecure Data Storage", "Log Leakage", "OWASP Mobile Top 10"],
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "SQL", "Bash", "HTML/CSS", "MATLAB"],
  },
  {
    category: "Cloud & Frameworks",
    items: ["GCP (Compute Engine, Cloud Run, Storage)", "Node.js", "Vue.js", "TailwindCSS"],
  },
  {
    category: "Databases / VCS",
    items: ["MySQL", "PostgreSQL", "SQLite", "Git & GitHub"],
  },
];

export const competencies = [
  "Web Application Pentesting",
  "Android / Mobile Pentesting",
  "API & WebSocket Security",
  "OWASP Top 10 & Mobile Top 10",
  "SQL Injection & Injection Attacks",
  "IDOR / BOLA / Broken Access Control",
  "Vulnerability Assessment & Reporting",
  "Responsible Disclosure & PoC Writing",
  "CVSS v3.1 Scoring",
];

export const bugBounty = [
  {
    program: "HackerOne",
    handle: "@narexsh",
    period: "2021 — Present",
    href: "https://hackerone.com/narexsh",
    points: [
      "Ranked #1 on a private, invite-only program — a trust signal reserved for researchers with a proven, high-quality track record.",
      "Submitted triaged, valid vulnerability reports and earned monetary bounties for confirmed findings on production targets.",
      "Verified track record: Reputation 1157 (all-time), earned from resolved / accepted reports across public & private programs.",
    ],
    focus: "BOLA/IDOR · Broken Access Control · Business-logic · Mobile",
  },
  {
    program: "Google VRP",
    handle: "Google Bug Hunters",
    period: "2023 — Present",
    href: "https://bughunters.google.com/",
    points: [
      "Reported multiple security vulnerabilities accepted as valid by Google's Security Team through the VRP.",
      "Submissions triaged and confirmed across Google products, contributing to remediation of production issues.",
      "Ongoing active participation in the Google Vulnerability Reward Program.",
    ],
    focus: "Web · Access Control · Production Security",
  },
];

export const featured = {
  title: "Honda Indonesia (HPM)",
  scope: "CRM Portal · Private APIs · e-Care Android App",
  period: "Feb — Mar 2026",
  note: "Responsible disclosure engagement. Full reports delivered with executive summary, CVSS v3.1 scoring, step-by-step PoC, and remediation guidance — available upon request under NDA.",
  web: [
    { sev: "CRITICAL", title: "Boolean-based SQL Injection", desc: "Bypassed authentication on an announcement endpoint to access 20,000+ cross-dealer records.", cwe: "CWE-89", owasp: "A03:2021" },
    { sev: "CRITICAL", title: "IDOR — Mass Admin Credential Disclosure", desc: "Contact-agents API leak; extraction automated with Burp Intruder.", cwe: "CWE-639", owasp: "A01:2021" },
    { sev: "CRITICAL", title: "BOLA — Full Customer PII Exposure", desc: "Profile endpoints exposed PII through parameter tampering.", cwe: "CWE-639", owasp: "A01:2021" },
    { sev: "HIGH", title: "Cross-Site WebSocket Hijacking", desc: "Session hijack and cross-dealer data exfiltration.", cwe: "CWE-345", owasp: "A07:2021" },
    { sev: "HIGH", title: "IDOR via WebSocket", desc: "Agent PII disclosure across dealer entities.", cwe: "CWE-639", owasp: "A01:2021" },
    { sev: "HIGH", title: "Broken Function-Level Authorization", desc: "National customer database extraction.", cwe: "CWE-285", owasp: "A01:2021" },
  ],
  mobile: [
    { sev: "CRITICAL", title: "RCE via Malicious APK Backdoor", desc: "Injected a Meterpreter reverse shell for full device compromise: arbitrary command execution, file access, system enumeration.", cwe: "CWE-94 / 494", owasp: "M8" },
    { sev: "HIGH", title: "Insecure CORS with Credential Support", desc: "Cross-origin data theft via permissive CORS policy.", cwe: "CWE-942", owasp: "M3" },
  ],
};

export const writeups = [
  {
    title: "Chaining SQLi → 20K Record Disclosure on a Dealer CRM",
    tag: "Web · SQL Injection",
    sev: "CRITICAL",
    summary: "How a boolean-based blind injection on a single announcement endpoint bypassed auth and unlocked cross-dealer data at scale.",
    read: "8 min read",
  },
  {
    title: "From IDOR to Mass Admin Credential Disclosure",
    tag: "Access Control · IDOR",
    sev: "CRITICAL",
    summary: "Automating object-reference enumeration with Burp Intruder to surface administrative credentials across an enterprise API.",
    read: "6 min read",
  },
  {
    title: "Cross-Site WebSocket Hijacking in the Real World",
    tag: "API · WebSocket",
    sev: "HIGH",
    summary: "Why WebSocket handshakes routinely skip origin checks — and how that becomes full session hijack and data exfiltration.",
    read: "7 min read",
  },
  {
    title: "Backdooring an Android APK for Full Device Compromise",
    tag: "Mobile · RCE",
    sev: "CRITICAL",
    summary: "Walkthrough of injecting a Meterpreter payload into a production APK and the OWASP Mobile controls that should stop it.",
    read: "10 min read",
  },
];

export const experience = [
  {
    role: "Bug Bounty Researcher",
    org: "HackerOne · Google VRP",
    period: "2021 — Present",
    points: [
      "Public & private programs across web, API & mobile; #1 on a private invite-only program.",
      "Triaged valid reports and paid bounties on production targets; HackerOne Reputation 1157 (all-time).",
    ],
  },
  {
    role: "Cloud Computing Cohort Student",
    org: "Bangkit Academy — Google, GoTo & Traveloka",
    period: "Feb — Aug 2024",
    points: [
      "Selected for one of Indonesia's most competitive tech acceleration programs.",
      "Intensive GCP training: IAM, VPC, firewall config, secure API deployment on Compute Engine, Cloud Run & Storage.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Telkomsel",
    period: "Aug — Sep 2024",
    points: [
      "SQL data processing, cleaning & validation supporting daily operational reporting at enterprise scale.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "Multimedia, Big Data & Cybersecurity Lab — Telkom University",
    period: "Jul — Sep 2023",
    points: [
      "Built 3D interactive models & gamified security simulations (Unity, Blender) for security education.",
      "Researched security visualization and immersive technology in security training.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-Employed",
    period: "Jul 2022 — Jan 2023",
    points: [
      "Production web apps with Vue.js, TailwindCSS & Node.js; Figma-to-interface delivery.",
      "Full project lifecycle: requirements, REST API integration, testing & deployment.",
    ],
  },
];

export const education = {
  degree: "B.Eng, Telecommunication Engineering",
  school: "Telkom University",
  period: "Aug 2021 — Nov 2025",
  points: [
    "GPA 3.64 / 4.00 — Cum Laude, Top 21 of 830 graduates (~Top 3%).",
    "Paragon Scholarship Awardee — 1 of 10 from 5,000+ applicants.",
    "Coursework: Network Security, Cloud Infrastructure, Cryptography, Data Communication.",
  ],
};

export const awards = [
  {
    title: "Paragon Scholarship",
    period: "2023 — 2025",
    desc: "Selected as 1 of 10 from 5,000+ national applicants for academic & leadership excellence.",
  },
  {
    title: "Cum Laude Graduate — Telkom University",
    period: "2025",
    desc: "Awarded to 21 of 830 graduates; Top ~3% of cohort, GPA 3.64 / 4.00.",
  },
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Native / Bilingual" },
  { name: "English", level: "Professional Working Proficiency" },
];
