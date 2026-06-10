"use client";
import { GitBranch, Link2, Mail, X } from "lucide-react";

// Computed once at module load time — identical on server and client
const CURRENT_YEAR = new Date().getFullYear();

const footerLinks = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ],
  Services: [
    { label: "Frontend Dev", href: "#services" },
    { label: "Backend Dev", href: "#services" },
    { label: "Full-Stack", href: "#services" },
    { label: "API Development", href: "#services" },
  ],
  Contact: [
    { label: "Hire Me", href: "mailto:reno@developer.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Resume", href: "#" },
  ],
};

const socials = [
  { icon: GitBranch, href: "https://github.com", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: X, href: "https://twitter.com", label: "X" },
  { icon: Mail, href: "mailto:reno@developer.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display font-800 text-2xl mb-4 inline-block">
              <span className="gradient-text">Reno</span>
              <span className="text-text-secondary">.</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Full-Stack Developer building scalable, high-performance web applications with modern technologies.
            </p>
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-2 glass border border-accent-cyan/20 rounded-full text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-accent-cyan">Available for work</span>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-600 text-text-primary text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-text-secondary text-sm hover:text-accent-cyan transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-text-muted text-xs">
            © {CURRENT_YEAR} Reno. Built with{" "}
            <span className="text-accent-cyan">Next.js</span> &{" "}
            <span className="text-accent-cyan">TypeScript</span>.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-text-muted text-xs hover:text-text-secondary transition-colors">
                {item}
              </a>
            ))}
            <span className="text-text-muted text-xs">
              Designed & built by{" "}
              <span className="gradient-text font-medium">Reno</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
