"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, GitCommit, Star, Users } from "lucide-react";

const stats = [
  { label: "Repositories", value: "48", icon: GitBranch, color: "cyan" },
  { label: "Total Commits", value: "1.2k+", icon: GitCommit, color: "purple" },
  { label: "Stars Earned", value: "761", icon: Star, color: "blue" },
  { label: "Followers", value: "230+", icon: Users, color: "orange" },
];


const STATIC_GRID: number[][] = [
  [4,0,2,4,0,3,1],[0,3,1,0,4,1,0],[3,3,0,2,4,2,1],[0,4,1,0,0,4,1],
  [2,0,1,3,2,0,4],[4,0,0,4,3,1,1],[1,3,3,0,1,3,0],[2,1,4,0,2,4,3],
  [0,4,2,1,0,2,1],[3,0,1,4,1,0,2],[4,2,3,1,4,0,1],[1,0,4,2,3,1,0],
  [2,4,0,1,2,4,3],[0,1,3,4,0,2,1],[3,2,1,0,4,1,3],[4,0,2,3,1,0,4],
  [1,3,0,2,4,3,0],[2,4,1,0,1,2,4],[0,2,4,1,3,0,1],[3,1,0,4,2,1,3],
  [4,0,3,1,0,4,2],[1,2,1,3,1,0,4],[3,4,2,0,3,2,1],[0,1,4,2,1,3,0],
  [2,3,0,4,2,1,3],[4,1,2,0,3,4,1],
];

const colorClasses = [
  "bg-bg-elevated",
  "bg-accent-cyan/20",
  "bg-accent-cyan/40",
  "bg-accent-cyan/65",
  "bg-accent-cyan",
];

function ContributionGrid() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-1 min-w-max">
        {STATIC_GRID.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${colorClasses[level]} transition-all duration-200 hover:scale-125 cursor-pointer`}
                title={`${level} contribution${level !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


const MONTHLY_VALUES = [45, 72, 58, 88, 63, 95, 80, 70, 85, 78, 92, 88];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MAX_VALUE = Math.max(...MONTHLY_VALUES);

function ActivityChart() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {

    const t = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex items-end gap-2 h-28">
      {MONTHS.map((month, i) => (
        <div key={month} className="flex-1 flex flex-col items-center gap-1.5">
          <div className="w-full flex items-end" style={{ height: "100%" }}>
            <div
              className="w-full rounded-t-sm bg-gradient-to-t from-accent-cyan/40 to-accent-cyan/80 relative group cursor-pointer hover:from-accent-cyan/60 hover:to-accent-cyan transition-all duration-700"
              style={{
                height: animated ? `${(MONTHLY_VALUES[i] / MAX_VALUE) * 100}%` : "4px",
                transitionDelay: animated ? `${i * 50}ms` : "0ms",
                minHeight: "4px",
              }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-bg-elevated border border-border rounded px-1.5 py-0.5 text-xs font-mono text-accent-cyan whitespace-nowrap z-10">
                {MONTHLY_VALUES[i]}
              </div>
            </div>
          </div>
          <span className="text-[9px] text-text-muted font-mono">{month.slice(0, 1)}</span>
        </div>
      ))}
    </div>
  );
}

const colorConfig: Record<string, { bg: string; text: string }> = {
  cyan:   { bg: "bg-accent-cyan/10",   text: "text-accent-cyan" },
  purple: { bg: "bg-accent-purple/10", text: "text-accent-purple" },
  blue:   { bg: "bg-blue-500/10",      text: "text-blue-400" },
  orange: { bg: "bg-orange-500/10",    text: "text-orange-400" },
};

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Open Source</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight">
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            Consistent contributions, open-source projects, and community involvement.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, i) => {
            const c = colorConfig[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-hover glass border border-border rounded-2xl p-6 text-center"
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon size={18} />
                </div>
                <div className={`font-display text-3xl font-800 mb-1 ${c.text}`}>{stat.value}</div>
                <div className="text-text-muted text-xs">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Contribution grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass border border-border rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display font-600 text-text-primary">Contribution Activity</h3>
              <p className="text-text-muted text-xs mt-0.5">Last 26 weeks</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span>Less</span>
              {colorClasses.map((c, i) => (
                <span key={i} className={`w-3 h-3 rounded-sm ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>
          <ContributionGrid />
        </motion.div>

        {/* Activity chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass border border-border rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-600 text-text-primary">Monthly Commits</h3>
              <p className="text-text-muted text-xs mt-0.5">2024 coding activity</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono">2024</span>
          </div>
          <ActivityChart />
        </motion.div>
      </div>
    </section>
  );
}
