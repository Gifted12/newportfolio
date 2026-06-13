"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 mb-6 p-2 width-full transition-all duration-500  ${
          scrolled
            ? "py-3 glass  shadow-[0_2px_0_rgba(26,37,64,2)] backdrop-blur-3xl"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="max-w-10xl mx-auto px-6 flex items-center justify-between ">
        
          <a
            href="#"
            className="font-display font-800 text-xl tracking-tight group"
          >
            <Image
              src= "/favicon.png"
              alt="logo"
              width ={45}
              height={45}
            />
          </a>

          
          <ul className="hidden md:flex items-center gap-3 ">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative   text-l font-body font-medium   px-2 py-2  transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent-cyan rounded-full btn-outline"
                      : "text-text-secondary hover:text-text-primary "
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute rounded-full btn-outline inset-0 bg-accent-cyan/8  "
                    />
                  )}
                  <span className="relative px-5 py-3 z-10">{link.label}</span> 
                </a>
              </li>
            ))}
          </ul>

         
          <div className="hidden md:flex items-center px-4 gap-3">
            <a
              href="mailto:josiahyisa4reals@gmail.com"
              className="btn-primary outline-0 px-5 py-2 rounded-full text-sm"
            >
              Hire Me
            </a>
          </div>

        
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-4 left-4 right-4 z-40 bg-[#050810] rounded-b-xl  p-6  md:hidden"
          >
            <ul className="flex flex-col gap-1 pt-20">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-full text-sm font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-cyan-500 bg-cyan-400/8 border border-cyan-400/20"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t  border-border mt-2">
                <a href="mailto:josiahyisa4reals@gmail.com" className="btn-primary block text-center px-4 py-3 rounded-xl text-sm">
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
