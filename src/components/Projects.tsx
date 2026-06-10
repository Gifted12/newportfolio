"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub} from "react-icons/fa6";

const projects = [
  {
    title: "ClipSync",
    description: "A full-stack platform that help users pass datas from one device to the othee, built with an optimistic UI.",
    tech: ["React", "MongoDB", "Google Auth", "Css"],
    category: "Full-Stack",
    color: "cyan",
    live: "#",
    github: "#",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    mockupBg: "#0a1628",
    mockupLines: ["#00d4ff", "#3b82f6", "#8b5cf6"],
  },
  {
    title: "Event Tracker",
    description: "An Event management tool used to track activities on a daily, weekly, and montly bases.",
    tech: ["React", "FireBase", "Css"],
    category: "Full-Stack",
    color: "purple",
    live: "#",
    github: "#",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    mockupBg: "#0e0a1a",
    mockupLines: ["#8b5cf6", "#ec4899", "#6366f1"],
  },
  {
    title: "Travel Agent",
    description: "A travel agent site that torist or travelers can get insperation from to explore the world",
    tech: ["Node.js", "Javascript", "nodemailer", "Css"],
    category: "Fullstack",
    color: "blue",
    live: "#",
    github: "#",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    mockupBg: "#0a0f20",
    mockupLines: ["#3b82f6", "#00d4ff", "#22d3ee"],
  },
  {
    title: "Portfolio",
    description: "my personal portfolio ",
    tech: ["Next Js", "TypeScript", "Tailwind"],
    category: "Open Source",
    color: "orange",
    live: "#",
    github: "#",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    mockupBg: "#1a0e06",
    mockupLines: ["#f97316", "#eab308", "#f59e0b"],
  },
];

const colorConfig: Record<string, { badge: string; btn: string; border: string;  }> = {
  cyan: { badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20", btn: "text-accent-cyan hover:bg-accent-cyan/10", border: "hover:border-accent-cyan/40"},
  purple: { badge: "bg-accent-purple/10 text-accent-purple border-accent-purple/20", btn: "text-accent-purple hover:bg-accent-purple/10", border: "hover:border-accent-purple/40" },
  blue: { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", btn: "text-blue-400 hover:bg-blue-500/10", border: "hover:border-blue-400/40" },
  orange: { badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", btn: "text-orange-400 hover:bg-orange-500/10", border: "hover:border-orange-400/40" },
};


const BAR_WIDTHS = [62, 48, 55, 38, 45];

function MockupScreen({ project }: { project: typeof projects[0] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border" style={{ background: project.mockupBg }}>
 
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5">
        {["bg-red-500/60", "bg-yellow-500/60", "bg-green-500/60"].map((c, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${c}`} />
        ))}
        <div className="ml-2 flex-1 h-4 rounded bg-white/5 flex items-center px-2">
          <span className="text-[8px] font-mono text-white/30 truncate">https://{project.title.toLowerCase().replace(" ", "")}.vercel.app</span>
        </div>
      </div>
  
      <div className="p-4 h-40 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <div className="relative space-y-2">
         
          <div className="flex gap-2 mb-3">
            {project.mockupLines.map((color, i) => (
              <div key={i} className="h-1.5 rounded-full flex-1 opacity-50" style={{ background: color }} />
            ))}
          </div>
          {[85, 65, 75, 55, 70].map((w, i) => (
            <div key={i} className="h-2 rounded" style={{ width: `${w}%`, background: `${project.mockupLines[i % 3]}22` }}>
              <div className="h-full rounded" style={{ width: `${BAR_WIDTHS[i]}%`, background: project.mockupLines[i % 3], opacity: 0.6 }} />
            </div>
          ))}
          <div className="mt-3 flex gap-2">
            {[0, 1].map(i => (
              <div key={i} className="h-6 w-16 rounded" style={{ background: project.mockupLines[i] + "33", border: `1px solid ${project.mockupLines[i]}44` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            A selection of projects that showcase my technical depth and product thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => {
            const c = colorConfig[project.color];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`glass card-shine border border-border ${c.border} rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-card-hover`}
              >
               
                <div className="p-5 pb-0">
                  <MockupScreen project={project} />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${c.badge}`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-display font-700 text-lg text-text-primary">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                 
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-bg-elevated border border-border text-text-muted font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={project.live}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 border border-transparent ${c.btn}`}
                    >
                      {/* <FaExternalLink size={13} /> */}
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary px-4 py-2 rounded-xl hover:bg-bg-elevated transition-all duration-200"
                    >
                      <FaGithub size={13} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3.5 rounded-2xl text-sm inline-flex items-center gap-2"
          >
            <FaGithub size={15} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
