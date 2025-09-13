import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Brain, Database, Server } from "lucide-react";

// -------------------------
// Quick edit zone
// -------------------------
const PROFILE = {
  name: "Christopher McKenzie",
  role: "Data Science & ML Engineer",
  location: "New York, NY",
  email: "Chris.mcke876@gmail.com",
  github: "https://github.com/chalrees876",
  linkedin: "https://www.linkedin.com/in/your-handle/", // <- replace
  bio: `CS graduate and Mechanical Engineer pivoting to Data science / ML. I build clean, testable code and ship data-driven features with Python, Django, and scikit-learn.`,
  resumeUrl: "/resume.pdf", // place your PDF at the site root
};

const PROJECTS = [
  {
    title: "Tennis Analytics Platform",
    subtitle: "Django + scikit-learn",
    description:
      "End-to-end analytics app: relational models for players/tournaments/matches, pandas feature pipeline, logistic regression baseline, and evaluation visualizations rendered in a Django UI.",
    highlights: [
      "Relational schema & integrity rules",
      "pandas/NumPy feature building",
      "Train/test split, ROC-AUC, confusion matrix",
      "Base64 Matplotlib charts in templates",
    ],
    tags: ["Python", "Django", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
    repo: "https://github.com/chalrees876/tennisPrediction",
    live: null,
  },
  {
    title: "WGUPS Routing",
    subtitle: "Algorithms & Data Structures",
    description:
      "Package delivery routing with a greedy nearest-neighbor heuristic, custom hash table for fast lookups, and graph representations (adjacency lists, distance matrix). Includes complexity analysis and tests.",
    highlights: [
      "Custom hash table for package ops",
      "Adjacency list + distance matrix",
      "Greedy heuristic, memoization",
      "Big-O analysis & unit tests",
    ],
    tags: ["Python", "Algorithms", "Data Structures", "Graphs", "Hash Tables"],
    repo: "https://github.com/chalrees876", // replace with exact repo if public
    live: null,
  },
];

const SKILLS = [
  { label: "Python", Icon: Brain },
  { label: "Django", Icon: Server },
  { label: "SQL", Icon: Database },
  { label: "pandas / NumPy" },
  { label: "scikit-learn" },
  { label: "Matplotlib / Seaborn" },
  { label: "Java" },
  { label: "C/C++" },
  { label: "JavaScript" },
  { label: "Git" },
  { label: "Docker (basics)" },
];

// -------------------------
// UI bits
// -------------------------
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-lg bg-white/90 dark:bg-neutral-900/80 backdrop-blur p-6 ${className}`}>{children}</div>
);

const Tag = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full border border-neutral-300/60 dark:border-neutral-700/60">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold tracking-tight mb-4">{children}</h2>
);

const LinkButton = ({ href, children, Icon, variant = "solid" }) => {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-xl transition";
  const styles = {
    solid: "bg-black text-white dark:bg-white dark:text-black hover:opacity-90",
    invert: "bg-white text-black hover:opacity-90",
    outlineLight: "border border-white text-white hover:bg-white/10"
  };
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles[variant]}`}>
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {children}
    </a>
  );
};

// -------------------------
// Page
// -------------------------
export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-neutral-50">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 dark:bg-neutral-900/40 border-b border-neutral-200/60 dark:border-neutral-800">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">{PROFILE.name}</div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-24">
        <section className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {PROFILE.name}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              {PROFILE.role} · {PROFILE.location}
            </p>
            <p className="max-w-prose text-neutral-700 dark:text-neutral-300">
              {PROFILE.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={PROFILE.github} Icon={Github}>GitHub</LinkButton>
              <LinkButton href={PROFILE.linkedin} Icon={Linkedin}>LinkedIn</LinkButton>
              <LinkButton href={`mailto:${PROFILE.email}`} Icon={Mail}>Email</LinkButton>
              <LinkButton href={PROFILE.resumeUrl} Icon={Download}>Resume</LinkButton>
            </div>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-blue-600 text-white shadow-xl">
                <h3 className="text-2xl font-semibold">Quick facts</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><strong>Location:</strong> {PROFILE.location}</li>
                  <li><strong>Focus:</strong> ML & data pipelines, Django apps</li>
                  <li><strong>Stack:</strong> Python · Pandas · scikit-learn · Django · React</li>
                  <li><strong>Now:</strong> Tennis outcome model (better features & calibration)</li>
                </ul>
              </Card>
            </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, idx) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{p.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{p.description}</p>

                  <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-16">
          <SectionTitle>Skills</SectionTitle>
          <Card>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SKILLS.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  {Icon ? <Icon className="w-4 h-4" /> : <span className="w-4 h-4"/>}
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <SectionTitle>Contact</SectionTitle>
          <Card>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href={`mailto:${PROFILE.email}`} Icon={Mail}>Email</LinkButton>
              <LinkButton href={PROFILE.github} Icon={Github}>GitHub</LinkButton>
              <LinkButton href={PROFILE.linkedin} Icon={Linkedin}>LinkedIn</LinkButton>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
              For quick replies, email is best. Happy to share more code, diagrams, or metrics on request.
            </p>
          </Card>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind + Framer Motion.
      </footer>
    </div>
  );
}
