"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Globe, Layers, MonitorSmartphone, Webhook } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    desc: "Crafting beautiful, responsive, and performant user interfaces using React, Next.js, and Tailwind CSS. Every pixel matters.",
    features: ["React & Next.js", "TypeScript", "Animations"],
    color: "cyan",
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Building robust server-side logic and RESTful APIs with Node.js and Express. Designed for scale and maintainability.",
    features: ["Node.js & Express", "Database Design", "Authentication & Security", "Performance Optimization"],
    color: "purple",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    desc: "End-to-end product development — from architecture design to deployment. One developer, complete ownership.",
    features: ["System Architecture"],
    color: "blue",
  },
  {
    icon: Webhook,
    title: "API Development",
    desc: "Designing clean, well-documented REST APIs with proper authentication, rate limiting, and versioning strategies.",
    features: ["REST API Design", "JWT & OAuth", "Rate Limiting "],
    color: "orange",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    desc: "Mobile-first, fully responsive websites that look and perform flawlessly across all devices and screen sizes.",
    features: ["Mobile-First Design", "Cross-browser Compat.", "Performance Auditing"],
    color: "pink",
  },
  {
    icon: Code2,
    title: "Code Review & Consulting",
    desc: "Technical guidance, code reviews, and architecture consulting for teams looking to level up their engineering.",
    features: ["Code Quality Reviews", "Refactoring", "Best Practices", "Team Mentoring"],
    color: "green",
  },
];

const colorConfig: Record<string, { icon: string; border: string; num: string; dot: string }> = {
  cyan: { icon: "bg-cyan-500/10 text-cyan-400", border: "hover:border-cyan-400/40", num: "text-cyan-400/20", dot: "bg-cyan-400" },
  purple: { icon: "bg-purple-500/10 text-purple-400", border: "hover:border-purple-400/40", num: "text-purple-400/20", dot: "bg-purple-400" },
  blue: { icon: "bg-blue-500/10 text-blue-400", border: "hover:border-blue-400/40", num: "text-blue-400/20", dot: "bg-blue-400" },
  orange: { icon: "bg-orange-500/10 text-orange-400", border: "hover:border-orange-400/40", num: "text-orange-400/20", dot: "bg-orange-400" },
  pink: { icon: "bg-pink-500/10 text-pink-400", border: "hover:border-pink-400/40", num: "text-pink-400/20", dot: "bg-pink-400" },
  green: { icon: "bg-emerald-500/10 text-emerald-400", border: "hover:border-emerald-400/40", num: "text-emerald-400/20", dot: "bg-emerald-400" },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">What I Offer</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            Services &{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            From ideation to deployment, I bring the full engineering stack to your project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const c = colorConfig[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-hover glass card-shine border border-border ${c.border} rounded-2xl p-7 relative overflow-hidden group`}
              >
               
                <span className={`absolute top-4 right-4 font-display text-7xl font-800 ${c.num} select-none`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${c.icon}`}>
                  <service.icon size={22} />
                </div>

                <h3 className="font-display font-600 text-lg text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{service.desc}</p>

                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
