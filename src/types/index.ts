export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}
