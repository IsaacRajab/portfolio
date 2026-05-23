import { motion } from "framer-motion";
import { cn } from "./cn";

interface GlowBlobProps {
  color: "purple" | "blue" | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
  animationDelay?: number;
}

const COLOR_CLASSES = {
  purple: "bg-purple-500/20",
  blue: "bg-blue-500/20",
  cyan: "bg-cyan-500/20",
};

const SIZE_CLASSES = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
};

export function GlowBlob({ color, size = "md", className, animationDelay = 0 }: GlowBlobProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        COLOR_CLASSES[color],
        SIZE_CLASSES[size],
        className
      )}
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: animationDelay }}
    />
  );
}
