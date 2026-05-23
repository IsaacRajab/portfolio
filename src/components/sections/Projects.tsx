import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="projects-heading"
          label="Work"
          title="Featured Projects"
          description="A selection of projects I've built — ranging from AI-powered tools to data infrastructure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  id,
  label,
  title,
  description,
}: {
  id: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <Badge variant="purple" className="mb-4">
        {label}
      </Badge>
      <h2 id={id} className="mb-4 text-gradient-brand">
        {title}
      </h2>
      <p className="text-slate-400 max-w-xl mx-auto">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-glass overflow-hidden hover:border-purple-400/40 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="slate" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-purple-300 transition-colors"
              aria-label={`${project.title} source code on GitHub`}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
