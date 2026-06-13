"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiMapPin} from "react-icons/fi";
import { BsSend} from "react-icons/bs";

const socialLinks = [
  { icon: Mail, label: "Email", value: "josiahyisa4reals@gmail.com", href: "mailto:josiahyisa4reals@gmail.com", color: "cyan" },
  { icon: FaGithub, label: "GitHub", value: "https://github.com/Gifted12", href: "https://github.com/Gifted12", color: "purple" },
  { icon:FaLinkedin, label: "LinkedIn", value: "@yisa-josiah", href: "https://www.linkedin.com/in/yisa-josiah-609859241", color: "blue" },
  { icon:FaXTwitter, label: "X / X", value: "@RenoGifted", href: "https://x.com/RenoGifted?t=Hsj46ostyJc3sE7eX3RQRw&s=08", color: "orange" },
];

const colorConfig: Record<string, { icon: string; hover: string }> = {
  cyan: { icon: "bg-cyan-500/10 text-cyan", hover: "hover:border-cyan-400-500/40 hover:bg-cyan-500/5" },
  purple: { icon: "bg-purple-500/10 text-purple", hover: "hover:border-purple-400-500/40 hover:bg-purple-500/5" },
  blue: { icon: "bg-blue-500/10 text-blue-400", hover: "hover:border-blue-400/40 hover:bg-blue-500/5" },
  orange: { icon: "bg-orange-500/10 text-orange-400", hover: "hover:border-orange-400/40 hover:bg-orange-500/5" },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            Have a project in mind, a role to fill, or just want to connect? I&apos;m always open to the right conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
        
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
     
            <div className="glass border border-cyan-400/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium">Open to Opportunities</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Currently available for freelance projects, full-time positions, and technical consulting.
              </p>
              <div className="flex items-center gap-2 mt-4 text-text-muted text-xs">
                <FiMapPin size={12} />
                <span>Remote • Worldwide</span>
              </div>
            </div>

           
            {socialLinks.map((social, i) => {
              const c = colorConfig[social.color];
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={`glass border border-border ${c.hover} rounded-xl p-4 flex items-center gap-4 group transition-all duration-200`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    <social.icon size={16} />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs">{social.label}</div>
                    <div className="text-text-primary text-sm font-medium">{social.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-border rounded-2xl p-8">
              <h3 className="font-display font-600 text-xl text-text-primary mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-secondary text-xs mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Your name"
                      required
                      className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-c/50 f-500ocus:bg-bg-elevated transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-xs mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-c/50 t-500ransition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-xs mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                    placeholder="What's this about?"
                    required
                    className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-500/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-xs mb-2 font-medium">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-500/50 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
                >
                  {sent ? (
                    <>
                      <span>✓</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <BsSend size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
