"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: , suffix: "+", label: "Projects Completed", icon: Code2, color: "cyan" },
  { value: 20, suffix: "+", label: "Technologies Used", icon: Layers, color: "purple" },
  { value: 4, suffix: "+", label: "Years of Experience", icon: Zap, color: "blue" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="section-label mb-4">About Me</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight mb-8">
              Crafting digital experiences{" "}
              <span className="gradient-text">with precision</span>
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a Full-Stack Developer with a passion for building products that live at the intersection of beautiful design and solid engineering. I started my journey diving deep into web fundamentals, and never stopped learning.
              </p>
              <p>
                My approach combines <span className="text-text-primary font-medium">frontend craftsmanship</span> — pixel-perfect UIs, smooth animations, and accessible interfaces — with <span className="text-text-primary font-medium">backend reliability</span>: clean APIs, optimized databases, and scalable architectures.
              </p>
              <p>
                I believe great software is built through relentless iteration, clear communication, and a deep curiosity for problem-solving. When I&apos;m not coding, I&apos;m exploring new tools, contributing to open-source, or mentoring other developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Problem Solver", "Clean Code Advocate", "Continuous Learner", "Team Player"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass border border-border text-sm text-text-secondary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-hover glass card-shine border border-border rounded-2xl p-7 flex items-center gap-6"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  stat.color === "cyan" ? "bg-accent-cyan/10 text-accent-cyan" :
                  stat.color === "purple" ? "bg-accent-purple/10 text-accent-purple" :
                  "bg-accent-blue/10 text-accent-blue"
                }`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="font-display text-4xl font-800 text-text-primary mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-text-secondary text-sm">{stat.label}</div>
                </div>
                <div className={`ml-auto text-6xl font-display font-800 opacity-5 ${
                  stat.color === "cyan" ? "text-accent-cyan" :
                  stat.color === "purple" ? "text-accent-purple" :
                  "text-accent-blue"
                }`}>
                  {stat.value}
                </div>
              </motion.div>
            ))}

            {/* Mini decorative card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass border border-border rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-text-muted text-xs font-mono">productivity.js</span>
                <span className="flex gap-1">
                  {["bg-red-500/70", "bg-yellow-500/70", "bg-green-500/70"].map((c, i) => (
                    <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                </span>
              </div>
              <pre className="text-xs font-mono leading-relaxed">
                <span className="text-accent-purple">const</span>
                <span className="text-text-primary"> reno </span>
                <span className="text-text-secondary">= </span>
                <span className="text-accent-cyan">&#123;</span>
                {"\n  "}
                <span className="text-accent-blue">focus</span>
                <span className="text-text-secondary">: </span>
                <span className="text-green-400">&apos;full-stack&apos;</span>
                <span className="text-text-secondary">,</span>
                {"\n  "}
                <span className="text-accent-blue">passion</span>
                <span className="text-text-secondary">: </span>
                <span className="text-green-400">&apos;building products&apos;</span>
                {"\n"}
                <span className="text-accent-cyan">&#125;</span>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
