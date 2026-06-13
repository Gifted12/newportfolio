"use client";
import {Mail} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
    { label: "Hire Me", href: "mailto:josiahyisa4reals@gmail.com" },
    { label: "GitHub", href: "https://github.com/Gifted12" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yisa-josiah-609859241" },
    { label: "Resume", href: "#" },
  ],
};

const socials = [
  { icon: FaGithub, href: "https://github.com/Gifted12", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/yisa-josiah-609859241", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/RenoGifted?t=Hsj46ostyJc3sE7eX3RQRw&s=08", label: "X" },
  { icon: Mail, href: "mailto:josiahyisa4reals@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          
          <div className="lg:col-span-2">
            <a href="#" className="font-display font-800 text-2xl mb-4 inline-block">
              <span className="gradient-text">Josiah</span>
              <span className="text-text-secondary">.</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Full-Stack Developer building scalable, high-performance web applications with modern technologies.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-2 glass border border-cyan-400/20 rounded-full text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-500 text-center">Available for work</span>
            </div>
            
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9  flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

         
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-600 text-text-primary text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-text-secondary text-sm hover:text-cyan-500 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-text-muted text-xs">
            © {CURRENT_YEAR} Josiah. Built with{" "}
            <span className="text-cyan-500">Next.js</span> &{" "}
            <span className="text-cyan-500">TypeScript</span>.
          </p>
          <div className="flex items-center gap-4">

            <span className="text-text-muted text-xs">
              Designed & built by{" "}
              <span className="gradient-text font-medium">Josiah</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
