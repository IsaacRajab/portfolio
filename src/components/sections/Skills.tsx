import { motion } from "framer-motion";
import { Brain, Code2, Layers, Server, Database, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SKILL_CATEGORIES } from "@/constants/skills";
import type { SkillCategory } from "@/types";

const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Code2,
  Layers,
  Server,
  Database,
  Cloud,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="cyan" className="mb-4">
            Expertise
          </Badge>
          <h2 id="skills-heading" className="mb-4 text-gradient-brand">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and production-ready software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = ICON_MAP[category.iconName] ?? Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group card-glass p-6 hover:border-cyan-400/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/20 text-cyan-300">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-semibold text-white">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.08 + i * 0.04 }}
              className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 rounded-full text-slate-300 text-xs hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
