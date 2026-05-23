import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Open-source contributions" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-purple-400" aria-hidden="true" />
            <span className="text-sm text-purple-300 font-medium">About Me</span>
          </div>

          <h2 id="about-heading" className="mb-6 text-gradient-brand">
            Passionate about building intelligent software
          </h2>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm a software engineer with a strong focus on AI/ML and full-stack development. I
              enjoy building products that are fast, accessible, and genuinely useful — from
              conversational AI apps to data pipelines that process millions of records.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest research in large language models,
              contributing to open-source projects, or learning a new language (currently Rust).
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 md:grid-cols-1 gap-6"
        >
          {HIGHLIGHTS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="card-glass p-6"
            >
              <p className="text-3xl font-bold text-gradient-brand mb-1">{value}</p>
              <p className="text-slate-400 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
