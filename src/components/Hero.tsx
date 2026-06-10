"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaArrowDown } from "react-icons/fa6";

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
              <FaArrowDown size={15} />
            </a>
            <a href="#contact" className="btn-outline px-7 py-3.5 rounded-2xl text-sm">
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-medium text-text-secondary glass border border-border hover:border-border-glow hover:text-text-primary transition-all duration-300"
            >
              <FaArrowDown size={15} />
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

            </motion.div>

          
            <div className="absolute inset-12 rounded-full blur-2xl bg-accent-cyan/15 -z-10" />
          </div>
        </motion.div>
      </div>


    </section>
  );
}
