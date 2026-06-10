"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    avatar: "SC",
    color: "cyan",
    rating: 5,
    text: "Reno delivered an exceptional full-stack application ahead of schedule. His attention to detail, clean code standards, and ability to communicate complex technical concepts to non-technical stakeholders made him an invaluable team member.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    company: "StartupLaunch",
    avatar: "MJ",
    color: "purple",
    rating: 5,
    text: "Working with Reno was a game-changer for our product. He rebuilt our entire backend from scratch, improving API response times by 70% and drastically reducing infrastructure costs. Truly a senior-level engineer.",
  },
  {
    name: "Priya Nair",
    role: "Lead Frontend Engineer",
    company: "DesignStudio",
    avatar: "PN",
    color: "blue",
    rating: 5,
    text: "Reno's frontend skills are top-tier. The UI components he built were not only pixel-perfect but also fully accessible and performant. He brought a thoughtful design sensibility that elevated the entire product.",
  },
  {
    name: "David Okafor",
    role: "Founder",
    company: "Buildspace",
    avatar: "DO",
    color: "orange",
    rating: 5,
    text: "I hired Reno to build our MVP and he exceeded every expectation. He thinks like a product engineer — not just a coder. He proactively identified edge cases, optimized UX, and shipped a polished product that impressed investors.",
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Manager",
    company: "CloudBase",
    avatar: "ER",
    color: "pink",
    rating: 5,
    text: "Reno integrated seamlessly with our existing team. His TypeScript expertise and commitment to best practices raised the bar for our entire codebase. He's the kind of engineer every team wants.",
  },
  {
    name: "Alex Kimura",
    role: "Senior Developer",
    company: "OpenDev Co.",
    avatar: "AK",
    color: "green",
    rating: 5,
    text: "Collaborated with Reno on multiple open-source projects. His code reviews are thorough, his contributions well-structured, and his documentation impeccable. A genuine asset to any engineering team.",
  },
];

const colorConfig: Record<string, { avatar: string; quote: string; border: string; stars: string }> = {
  cyan: { avatar: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30", quote: "text-accent-cyan/30", border: "hover:border-accent-cyan/30", stars: "text-accent-cyan" },
  purple: { avatar: "bg-accent-purple/20 text-accent-purple border-accent-purple/30", quote: "text-accent-purple/30", border: "hover:border-accent-purple/30", stars: "text-accent-purple" },
  blue: { avatar: "bg-blue-500/20 text-blue-400 border-blue-500/30", quote: "text-blue-400/30", border: "hover:border-blue-400/30", stars: "text-blue-400" },
  orange: { avatar: "bg-orange-500/20 text-orange-400 border-orange-500/30", quote: "text-orange-400/30", border: "hover:border-orange-400/30", stars: "text-orange-400" },
  pink: { avatar: "bg-pink-500/20 text-pink-400 border-pink-500/30", quote: "text-pink-400/30", border: "hover:border-pink-400/30", stars: "text-pink-400" },
  green: { avatar: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", quote: "text-emerald-400/30", border: "hover:border-emerald-400/30", stars: "text-emerald-400" },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            What people{" "}
            <span className="gradient-text">say</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            Feedback from colleagues, clients, and collaborators I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const c = colorConfig[t.color];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass glass-hover card-shine border border-border ${c.border} rounded-2xl p-7 relative`}
              >
                {/* Quote icon */}
                <Quote size={32} className={`absolute top-6 right-6 ${c.quote}`} fill="currentColor" />

                {/* Stars */}
                <div className={`flex gap-0.5 mb-4 ${c.stars}`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-display font-700 flex-shrink-0 ${c.avatar}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-text-primary text-sm font-medium">{t.name}</div>
                    <div className="text-text-muted text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
