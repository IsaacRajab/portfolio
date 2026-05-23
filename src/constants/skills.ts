import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    iconName: "Brain",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "Hugging Face"],
  },
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "R"],
  },
  {
    title: "Frontend",
    iconName: "Layers",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    iconName: "Server",
    skills: ["Node.js", "FastAPI", "Flask", "REST", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Data & Analytics",
    iconName: "Database",
    skills: ["Pandas", "NumPy", "Apache Spark", "Data Viz", "Feature Engineering", "MLOps"],
  },
  {
    title: "Cloud & DevOps",
    iconName: "Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/IsaacRajab", icon: "github" as const },
  { label: "LinkedIn", href: "https://linkedin.com/in/IsaacRajab", icon: "linkedin" as const },
  { label: "Email", href: "mailto:isaacrajab17@gmail.com", icon: "mail" as const },
];
