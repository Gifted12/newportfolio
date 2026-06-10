"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Code, Globe, Layers, Rocket, Target } from "lucide-react";

const timeline = [
  {
    year: "2020",
    title: "Started Web Development",
    desc: "Began the journey with HTML, CSS, and vanilla JavaScript. Built static websites and learned the fundamentals of the web platform.",
    icon: BookOpen,
    color: "cyan",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2021",
    title: "Mastered JavaScript",
    desc: "Dove deep into JavaScript — async programming, DOM manipulation, ES6+, and modern patterns. Started exploring Node.js and backend basics.",
    icon: Code,
    color: "blue",
    tags: ["ES6+", "Async/Await", "Node.js"],
  },
  {
    year: "2022",
    title: "Built React Applications",
    desc: "Fell in love with component-driven development. Shipped multiple React projects and adopted TypeScript for type-safe, maintainable code.",
    icon: Globe,
    color: "purple",
    tags: ["React", "TypeScript", "Redux"],
  },
  {
    year: "2023",
    title: "Full-Stack Development",
    desc: "Expanded into backend architecture — designing REST APIs, working with databases, and deploying containerized applications with Docker.",
    icon: Layers,
    color: "cyan",
    tags: ["Next.js", "PostgreSQL", "Docker", "MongoDB"],
  },
  {
    year: "2024",
    title: "Shipped Production Products",
    desc: "Led development of production-grade SaaS applications. Focused on performance, scalability, CI/CD pipelines, and engineering best practices.",
    icon: Rocket,
    color: "blue",
    tags: ["SaaS", "CI/CD", "Vercel", "AWS"],
  },
  {
    year: "2025+",
    title: "Current Focus & Goals",
    desc: "Exploring AI-powered applications, distributed systems, and open-source contributions. Aiming to work on products that impact millions of users.",
    icon: Target,
    color: "purple",
    tags: ["AI/ML", "Open Source", "Distributed Systems"],
    isCurrent: true,
  },
];

const colorMap: Record<string, { dot: string; line: string; badge: string; icon: string; year: string }> = {
  cyan: {
    dot: "bg-accent-cyan border-accent-cyan/40 shadow-[0_0_15px_rgba(0,212,255,0.4)]",
    line: "bg-accent-cyan/30",
    badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/25",
    icon: "bg-accent-cyan/10 text-accent-cyan",
    year: "text-accent-cyan",
  },
  blue: {
    dot: "bg-blue-400 border-blue-400/40 shadow-[0_0_15px_rgba(96,165,250,0.4)]",
    line: "bg-blue-400/30",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    icon: "bg-blue-500/10 text-blue-400",
    year: "text-blue-400",
  },
  purple: {
    dot: "bg-accent-purple border-accent-purple/40 shadow-[0_0_15px_rgba(139,92,246,0.4)]",
    line: "bg-accent-purple/30",
    badge: "bg-accent-purple/10 text-accent-purple border-accent-purple/25",
    icon: "bg-accent-purple/10 text-accent-purple",
    year: "text-accent-purple",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            Developer{" "}
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            From writing my first line of HTML to building production applications — the story so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const c = colorMap[item.color];
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-14 md:pl-0 ${isRight ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <div className={`glass glass-hover card-shine border border-border rounded-2xl p-6 ${item.isCurrent ? "border-accent-cyan/30" : ""}`}>
                      {/* Header */}
                      <div className={`flex items-center gap-3 mb-3 ${isRight ? "md:flex-row-reverse md:justify-start" : ""}`}>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                          <item.icon size={16} />
                        </div>
                        <div>
                          <div className={`font-mono text-xs font-medium mb-0.5 ${c.year}`}>{item.year}</div>
                          <h3 className="font-display font-600 text-text-primary leading-tight">{item.title}</h3>
                        </div>
                        {item.isCurrent && (
                          <span className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                            Now
                          </span>
                        )}
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.desc}</p>

                      <div className={`flex flex-wrap gap-2 ${isRight ? "md:justify-end" : ""}`}>
                        {item.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${c.badge}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 flex-shrink-0 z-10 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border-2 border-bg-primary ${c.dot}`} />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
