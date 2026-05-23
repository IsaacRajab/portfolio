import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "./cn";
import type { SocialLink } from "@/types";

const ICONS = { github: Github, linkedin: Linkedin, mail: Mail };

interface SocialButtonProps extends SocialLink {
  size?: "sm" | "md";
  showLabel?: boolean;
  className?: string;
}

export function SocialButton({
  href,
  icon,
  label,
  size = "md",
  showLabel = true,
  className,
}: SocialButtonProps) {
  const Icon = ICONS[icon];

  return (
    <motion.a
      href={href}
      target={icon !== "mail" ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex items-center gap-3 rounded-full border border-purple-500/30",
        "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm",
        "hover:border-purple-400/50 transition-all overflow-hidden",
        size === "md" ? "px-6 py-3" : "p-3",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 transition-all duration-300" />
      <Icon className={cn("relative", size === "md" ? "w-5 h-5" : "w-4 h-4")} />
      {showLabel && <span className="relative font-medium">{label}</span>}
    </motion.a>
  );
}
