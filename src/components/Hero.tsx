"use client";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaDownload } from "react-icons/fa6";

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.12 } },
};
const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } as never,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
    
      <div className="absolute inset-0 grid-bg opacity-60" />

 
      <div className="absolute inset-0 bg-gradient-radial from-accent-cyan/8 via-transparent to-transparent" style={{ backgroundPosition: "60% 40%", backgroundSize: "80% 60%" }} />

   
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent-purple/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
      
        <motion.div variants={stagger} initial="initial" animate="animate" className="order-2 lg:order-1">
        
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-cyan/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="section-label text-l">Available for opportunities</span>
          </motion.div>

        
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] tracking-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text glow-text">Josiah</span>
            <span className="text-accent-cyan">.</span>
          </motion.h1>

       
          <motion.p
            variants={fadeUp}
            className="font-display text-xl sm:text-2xl text-text-secondary font-500 leading-snug mb-6 max-w-lg"
          >
            Full-Stack Developer building{" "}
            <span className="text-text-primary">scalable, high-performance</span>{" "}
            web applications.
          </motion.p>

       
          <motion.p
            variants={fadeUp}
            className="text-text-secondary leading-relaxed mb-10 max-w-md text-base"
          >
            I craft end-to-end digital experiences — from pixel-perfect interfaces to robust server architectures. Passionate about clean code, modern tooling, and shipping products people love.
          </motion.p>

   
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <a href="#projects" className="btn-primary px-7 py-3.5 rounded-2xl text-sm inline-flex items-center gap-2">
              View Projects
              <ArrowDown size={15} />
            </a>
            <a href="#contact" className="btn-outline px-7 py-3.5 rounded-2xl text-sm">
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-medium text-text-secondary glass border border-border hover:border-border-glow hover:text-text-primary transition-all duration-300"
            >
              <FaDownload size={15} />
              Resume
            </a>
          </motion.div>

         
          <motion.div variants={fadeUp} className="flex items-center gap-4">
           
            {[
              { icon: FaGithub, href: "https://github.com/Gifted12", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/yisa-josiah-609859241", label: "LinkedIn" },
              { icon: FaXTwitter, href: "https://x.com/RenoGifted?t=Hsj46ostyJc3sE7eX3RQRw&s=08", label: "X" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit  flex items-center justify-center gap-3 transition-all duration-200"
              >
                <Icon size={21} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
        
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-accent-purple/15"
            />

            
            {[
              { label: "React", color: "#43d6ff", top: "5%", right: "10%", dur: 3.8, delay: 0 },
              { label: "Node", color: "#90d646", bottom: "15%", right: "5%", dur: 4.5, delay: 0.8 },
              { label: "TS", color: "#428cdb", top: "20%", left: "5%", dur: 3.2, delay: 1.4 },
              { label: "Next", color: "#ffffff", bottom: "10%", left: "15%", dur: 5.0, delay: 0.4 },
            ].map((tech) => (
              <motion.div
                key={tech.label}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: tech.dur, repeat: Infinity, ease: "easeInOut", delay: tech.delay }}
                className="absolute glass border border-border rounded-xl px-3 py-2 text-xs font-mono font-xl z-10 shadow-card size-16"
                style={{ top: tech.top, right: tech.right, bottom: tech.bottom, left: tech.left, color: tech.color, borderColor: tech.color + "33" }}
              >
                {tech.label}
              </motion.div>
            ))}

            
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-12 rounded-full overflow-hidden bg-gradient-to-br from-bg-card to-bg-elevated border-2 border-accent-cyan/30 shadow-glow flex items-center justify-center"
            >
             <Image
             src="/d581528ab01b454e976be817b030b14b.jpg"
             alt="myimg"
             width={500}
             height={500}
             priority
             />
              {/* <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <defs>
                  <radialGradient id="bgGrad" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#0c1222" />
                    <stop offset="100%" stopColor="#050810" />
                  </radialGradient>
                  <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f5c98a" />
                    <stop offset="100%" stopColor="#e8a96a" />
                  </linearGradient>
                  <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a2540" />
                    <stop offset="100%" stopColor="#0c1830" />
                  </linearGradient>
                </defs>
                
                <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" />
                
                <g opacity="0.07">
                  {[0,40,80,120,160,200].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#00d4ff" strokeWidth="0.5" />)}
                  {[0,40,80,120,160,200].map(y => <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#00d4ff" strokeWidth="0.5" />)}
                </g>
             
                <ellipse cx="100" cy="170" rx="58" ry="38" fill="url(#shirtGrad)" />
               
                <path d="M82,142 L100,165 L118,142" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6" />
                
                <text x="100" y="178" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="JetBrains Mono, monospace" opacity="0.7">&lt;dev /&gt;</text>
               
                <rect x="92" y="125" width="16" height="22" rx="7" fill="url(#skinGrad)" />
              
                <ellipse cx="100" cy="100" rx="34" ry="38" fill="url(#skinGrad)" />
                
                <path d="M68,92 Q70,60 100,58 Q130,60 132,92 Q128,76 100,74 Q72,76 68,92Z" fill="#1a1008" />
                
                <path d="M68,92 Q65,110 68,118 Q66,105 68,92Z" fill="#1a1008" />
                <path d="M132,92 Q135,110 132,118 Q134,105 132,92Z" fill="#1a1008" />
                
                <ellipse cx="88" cy="102" rx="5" ry="5.5" fill="#2d1b00" />
                <ellipse cx="112" cy="102" rx="5" ry="5.5" fill="#2d1b00" />
                
                <circle cx="90" cy="100" r="1.5" fill="white" opacity="0.8" />
                <circle cx="114" cy="100" r="1.5" fill="white" opacity="0.8" />
                
                <path d="M82,95 Q88,92 94,95" stroke="#4a2c00" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M106,95 Q112,92 118,95" stroke="#4a2c00" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                <path d="M91,116 Q100,123 109,116" stroke="#c07830" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                <rect x="58" y="155" width="84" height="52" rx="5" fill="#0c1222" stroke="#1a2540" strokeWidth="1" />
                <rect x="62" y="159" width="76" height="40" rx="3" fill="#050810" />
                
                <rect x="66" y="164" width="30" height="2" rx="1" fill="#00d4ff" opacity="0.8" />
                <rect x="66" y="170" width="45" height="2" rx="1" fill="#8b5cf6" opacity="0.7" />
                <rect x="66" y="176" width="20" height="2" rx="1" fill="#3b82f6" opacity="0.8" />
                <rect x="66" y="182" width="38" height="2" rx="1" fill="#00d4ff" opacity="0.5" />
                <rect x="66" y="188" width="25" height="2" rx="1" fill="#8b5cf6" opacity="0.6" />
                
                <rect x="99" y="182" width="1.5" height="7" rx="0.5" fill="#00d4ff">
                  <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                </rect>
              </svg> */}
            </motion.div>

          
            <div className="absolute inset-12 rounded-full blur-2xl bg-accent-cyan/15 -z-10" />
          </div>
        </motion.div>
      </div>

     
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent-cyan/60 to-transparent"
        /> */}
      {/* </motion.div> */}
    </section>
  );
}
