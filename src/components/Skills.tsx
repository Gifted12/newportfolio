"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {FaReact, FaNodeJs,FaGear, FaGitAlt,FaGithub, FaCode, FaServer, FaDatabase } from "react-icons/fa6";
import {RiNextjsFill, RiTailwindCssFill, RiFirebaseLine} from "react-icons/ri";
import {SiExpress, SiMongodb,SiPostgresql, SiVercel} from "react-icons/si";
import {BsTypescript, BsJavascript} from "react-icons/bs";
import { IconType } from "react-icons";
import { FaTools } from "react-icons/fa";

const categories = [
  {
    name: "Frontend",
    color: "cyan",
    icon: FaCode,
    skills: [
      { name: "React", level: 70, icon: FaReact },
      { name: "Next.js", level: 68, icon: RiNextjsFill },
      { name: "TypeScript", level: 68, icon: BsTypescript },
      { name: "JavaScript", level: 90, icon: BsJavascript },
      { name: "Tailwind CSS", level: 80, icon: RiTailwindCssFill},
    ],
  },
  {
    name: "Backend",
    color: "purple",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 70, icon: FaNodeJs },
      { name: "Express.js", level: 70, icon: SiExpress },
      { name: "REST APIs", level: 83, icon: FaGear },
    ],
  },
  {
    name: "Database",
    color: "blue",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", level: 85, icon: SiMongodb},
      { name: "PostgreSQL", level: 82, icon: SiPostgresql },
      { name: "Firebase", level: 80, icon: RiFirebaseLine },
    ],
  },
  {
    name: "Tools",
    color: "orange",
    icon: FaTools,
    skills: [
      { name: "Git", level: 95, icon: FaGitAlt },
      { name: "GitHub", level: 94, icon: FaGithub },
      { name: "Vercel", level: 90, icon: SiVercel },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; bar: string; glow: string }> = {
  cyan: {
    bg: "bg-accent-cyan/8",
    border: "border-accent-cyan/25",
    text: "text-accent-cyan",
    bar: "bg-gradient-to-r from-accent-cyan to-blue-400",
    glow: "shadow-[0_0_20px_rgba(0,212,255,0.15)]",
  },
  purple: {
    bg: "bg-accent-purple/8",
    border: "border-accent-purple/25",
    text: "text-accent-purple",
    bar: "bg-gradient-to-r from-accent-purple to-pink-500",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  },
  blue: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/25",
    text: "text-blue-400",
    bar: "bg-gradient-to-r from-blue-400 to-cyan-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  orange: {
    bg: "bg-orange-500/8",
    border: "border-orange-500/25",
    text: "text-orange-400",
    bar: "bg-gradient-to-r from-orange-400 to-amber-400",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  },
};

function SkillBar({ name, level, icon:Icon, color, delay }: { name: string; level: number; icon: IconType; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const c = colorMap[color];

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm"><Icon/></span>
          <span className="text-sm font-medium text-text-primary">{name}</span>
        </div>
        <span className={`text-xs font-mono font-medium ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full ${c.bar} rounded-full`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-accent-cyan/20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Tech Stack</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto text-base leading-relaxed">
            A curated set of tools and technologies I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className={`glass-hover glass card-shine border ${c.border} rounded-2xl p-7 hover:${c.glow}`}
              >
                
                <div className="flex items-center gap-3 mb-7">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-lg`}>
                    <cat.icon/>
                  </div>
                  <div>
                    <h3 className={`font-display font-600 text-base ${c.text}`}>{cat.name}</h3>
                    <p className="text-text-muted text-xs">{cat.skills.length} skills</p>
                  </div>
                </div>

           
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      color={cat.color}
                      delay={ci * 0.1 + si * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Vercel", "Git", "Tailwind CSS", "REST API", "Firebase"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 glass border border-border text-text-secondary text-sm rounded-full font-medium hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
