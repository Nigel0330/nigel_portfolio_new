import { useEffect, useRef, useState } from "react";
import photo from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="bg-ink text-paper min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["about", "skills", "projects", "experience", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "1rem 0" : "1.75rem 0",
        background:
          menuOpen || scrolled ? "rgba(10,10,15,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom:
          scrolled || menuOpen ? "1px solid #1e1e2e" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          className="logo font-display text-2xl font-semibold text-paper tracking-tight"
          style={{ display: "inline-flex", alignItems: "baseline" }}
        >
          N
          <span className="logo-h" style={{ lineHeight: 1 }}>
            H
          </span>
          <span className="text-gold">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={link}
                href={`#${id}`}
                className="relative font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ color: isActive ? "#c9a96e" : "#6b6b7a" }}
              >
                {link}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300"
                  style={{ width: isActive ? "100%" : "0%" }}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-5 h-px bg-paper block transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-px bg-paper block transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-3 h-px bg-gold block transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 w-5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-8 flex flex-col gap-6 border-t border-border mt-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-sm tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex w-fit px-6 py-3 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-all duration-300 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const lines = [
    { text: '> name: "Nigel Hernandez"', delay: 0 },
    { text: '> role: "Full-Stack Developer"', delay: 800 },
    { text: '> based: "Philippines"', delay: 1600 },
    { text: '> status: "Available for work"', delay: 2400 },
    { text: '> stack: ["React", "Node", "TS"]', delay: 3200 },
    { text: "> coffee: true", delay: 4000 },
  ];

  const [visible, setVisible] = useState([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => setVisible((prev) => [...prev, i]), line.delay);
    });
    const blink = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 pt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div>
            <h1
              className="font-display font-semibold text-paper mb-6"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            >
              <span
                style={{
                  display: "block",
                  opacity: 0,
                  transform: "translateY(40px)",
                  animation: "fadeUp 0.9s 0.2s ease forwards",
                }}
              >
                Nigel
              </span>
              <span
                className="text-gold italic"
                style={{
                  display: "block",
                  opacity: 0,
                  transform: "translateY(40px)",
                  animation: "fadeUp 0.9s 0.5s ease forwards",
                }}
              >
                Hernandez.
              </span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed font-light mb-10 md:mb-12">
              Full-Stack Developer crafting thoughtful digital experiences.
              Clean code, sharp interfaces, real impact.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <a
                href="#projects"
                className="px-6 md:px-7 py-3 md:py-3.5 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-all duration-300"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="text-muted font-mono text-xs tracking-[0.12em] uppercase hover:text-paper transition-colors duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Terminal — hidden on mobile */}
          <div className="hidden md:block">
            <div className="border border-border bg-surface overflow-hidden">
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-border"
                style={{ background: "#0d0d14" }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#ff5f57",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#febc2e",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#28c840",
                  }}
                />
                <span className="font-mono text-xs text-muted ml-3 tracking-widest">
                  nigel.config.js
                </span>
              </div>
              <div className="p-6 space-y-3 min-h-64">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className="font-mono text-sm transition-all duration-500"
                    style={{
                      opacity: visible.includes(i) ? 1 : 0,
                      transform: visible.includes(i)
                        ? "translateY(0)"
                        : "translateY(6px)",
                      color: line.text.includes("status")
                        ? "#c9a96e"
                        : line.text.includes("true")
                          ? "#28c840"
                          : "#a0a0b0",
                    }}
                  >
                    {line.text}
                    {i === lines.length - 1 && visible.includes(i) && (
                      <span
                        style={{ opacity: cursor ? 1 : 0, color: "#c9a96e" }}
                      >
                        |
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    {
      num: "01",
      title: "Clean Code",
      desc: "I write readable, maintainable code that teams can build on — not just code that works.",
    },
    {
      num: "02",
      title: "Sharp Design",
      desc: "I care about how things look and feel, not just how they function under the hood.",
    },
    {
      num: "03",
      title: "Real Impact",
      desc: "Every project I take on has a goal — I stay focused on outcomes, not just output.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-6 md:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
            02 -- About
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c9a96e",
              marginBottom: "1.5rem",
            }}
          />
          <h2
            className="font-display font-semibold text-paper"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Where design meets
            <br />
            <span className="text-gold italic">development.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20">
          <div className="flex justify-center items-start pt-4">
            <div className="relative">
              <div
                style={{
                  position: "absolute",
                  inset: -24,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: 6,
                  borderRadius: "50%",
                  background: "#0a0a0f",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background:
                      "conic-gradient(from 0deg, #c9a96e, #e8d5b0, #6b6b7a, #0a0a0f, #c9a96e)",
                    animation: "spinGradient 4s linear infinite",
                  }}
                />
                <div
                  style={{
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    background: "#13131a",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 50% 30%, rgba(201,169,110,0.1) 0%, transparent 70%)",
                    }}
                  />
                  <img
                    src={photo}
                    alt="Nigel Hernandez"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 text-muted leading-relaxed font-light text-base">
            <p>
              Hey, I am{" "}
              <span className="text-paper font-medium">Nigel Hernandez</span> —
              a Full-Stack Developer based in the Philippines with a passion for
              building things that are fast, accessible, and genuinely useful.
            </p>
            <p>
              I started coding out of pure curiosity and never stopped. Over the
              years I have worked on everything from small business websites to
              complex web apps — always bringing the same level of care and
              intention to each one.
            </p>
            <p>
              When I am not coding, I am probably exploring new tools, reading
              about design systems, or thinking about how to make the next
              project even better.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="px-7 py-3.5 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-all duration-300 inline-block"
              >
                Work with me
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((item) => (
            <div
              key={item.num}
              className="p-6 md:p-8 border border-border bg-surface hover:border-gold transition-colors duration-300"
            >
              <div className="font-mono text-xs text-gold tracking-widest mb-4">
                {item.num}
              </div>
              <h3 className="font-display text-xl text-paper font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = `scaleX(${level / 100})`;
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-sans text-sm text-paper font-light">{name}</span>
        <span className="font-mono text-xs text-gold">{level}%</span>
      </div>
      <div style={{ height: 1, background: "#1e1e2e", position: "relative" }}>
        <div
          ref={fillRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #c9a96e, #e8d5b0)",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const groups = [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML / CSS / JS", level: 95 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 72 },
        { name: "REST", level: 78 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git / GitHub", level: 92 },
        { name: "VS Code", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Vercel", level: 85 },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-6 md:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
            03 -- Skills
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c9a96e",
              marginBottom: "1.5rem",
            }}
          />
          <h2
            className="font-display font-semibold text-paper"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            What I work
            <br />
            <span className="text-gold italic">with.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {groups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-8">
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#c9a96e",
                    flexShrink: 0,
                  }}
                />
                <h3 className="font-mono text-xs text-muted tracking-[0.15em] uppercase">
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      num: "01",
      title: "Portfolio for Photography",
      desc: "A clean and responsive photography portfolio website built with HTML and CSS, designed to showcase visual work with elegance and clarity. Focused on minimal design, smooth navigation, and an immersive viewing experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://www.droldanphotography.com",
      repo: "https://github.com/Nigel0330/portfolio_photography",
    },
    {
      num: "02",
      title: "Management System for A Carshop",
      desc: "This car shop management system offers a clean, real-time dashboard that tracks key data, prioritizes new clients, and improves efficiency and customer experience.",
      tags: ["Node Js", "Supabase"],
      live: "https://car-management-system-seven.vercel.app/login",
      repo: "https://github.com/Nigel0330/car_management_system.git",
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 md:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
            04 -- Projects
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c9a96e",
              marginBottom: "1.5rem",
            }}
          />
          <h2
            className="font-display font-semibold text-paper"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Things I have
            <br />
            <span className="text-gold italic">built.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.num}
              className="group p-6 md:p-10 border border-border bg-surface hover:border-gold transition-all duration-400 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,169,110,0.05) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-gold tracking-widest">
                    {project.num}
                  </span>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-muted hover:text-paper transition-colors duration-200 tracking-wider uppercase"
                    >
                      Repo
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-gold tracking-wider uppercase"
                    >
                      Live
                    </a>
                  </div>
                </div>
                <h3
                  className="font-display font-semibold text-paper mb-4 group-hover:text-gold-light transition-colors duration-300"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-light mb-8">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-border text-muted font-mono text-xs tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-muted font-mono text-xs tracking-widest uppercase">
            More on{" "}
            <a
              href="https://github.com/Nigel0330"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-200"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      num: "01",
      role: "Freelance Developer",
      company: "Independent",
      period: "2026 — Present",
      desc: "Delivered end-to-end web solutions for local businesses — from UX wireframes to deployed production sites, handling client communication throughout.",
      tags: ["React", "Node.js", "MySQL"],
    },
  ];
  return (
    <section
      id="experience"
      className="pt-20 md:pt-32 pb-12 px-6 md:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
            05 -- Experience
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c9a96e",
              marginBottom: "1.5rem",
            }}
          />
          <h2
            className="font-display font-semibold text-paper"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Where I have
            <br />
            <span className="text-gold italic">worked.</span>
          </h2>
        </div>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.num}
              className="group p-6 md:p-10 border border-border bg-surface hover:border-gold transition-all duration-300 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,169,110,0.04) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3
                      className="font-display font-semibold text-paper mb-1"
                      style={{ fontSize: "1.4rem", letterSpacing: "-0.01em" }}
                    >
                      {job.role}
                    </h3>
                    <p className="font-mono text-xs text-gold tracking-wider">
                      {job.company}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-muted tracking-widest border border-border px-3 py-2 self-start">
                    {job.period}
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed font-light mb-8">
                  {job.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-border text-muted font-mono text-xs tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-6 border-t border-border flex flex-col items-center gap-3">
          <p className="text-muted font-light text-sm">
            View my full professional background
          </p>
          <a
            href="/Nigel_Hernandez_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    }
  };
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Nigel0330",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nigel-hernandez-804080231",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];
  return (
    <section id="contact" className="py-12 px-6 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
            06 -- Contact
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c9a96e",
              marginBottom: "1.5rem",
            }}
          />
          <h2
            className="font-display font-semibold text-paper"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Let us build
            <br />
            <span className="text-gold italic">something.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col gap-8 md:gap-10">
            <p className="text-muted leading-relaxed font-light text-base">
              I am currently open to freelance work and full-time opportunities.
              Whether you have a project in mind or just want to say hello — my
              inbox is always open.
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">
                  Email
                </p>
                <a
                  href="mailto:nigelhernandez0330@gmail.com"
                  className="text-paper font-light hover:text-gold transition-colors duration-200 text-sm md:text-base"
                >
                  nigelhernandez0330@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">
                  Based in
                </p>
                <p className="text-paper font-light">Philippines</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                  Socials
                </p>
                <div className="flex gap-6">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="text-muted hover:text-gold transition-colors duration-200"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            {sent ? (
              <div className="flex flex-col items-start justify-center gap-4 py-8">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    border: "1px solid #c9a96e",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#c9a96e",
                    }}
                  />
                </div>
                <h3 className="font-display text-2xl text-paper font-semibold">
                  Message sent.
                </h3>
                <p className="text-muted font-light text-sm">
                  Thanks for reaching out — I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-border text-paper font-light text-base pb-3 outline-none placeholder:text-border focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-border text-paper font-light text-base pb-3 outline-none placeholder:text-border focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase block mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border text-paper font-light text-base pb-3 outline-none placeholder:text-border focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-7 py-3.5 border border-gold text-gold font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex justify-center">
          <p className="font-mono text-xs text-muted tracking-widest">
            Nigel Hernandez — 2026
          </p>
        </div>
      </div>
    </section>
  );
}
