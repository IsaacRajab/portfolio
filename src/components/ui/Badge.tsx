import { cn } from "./cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "cyan" | "slate";
  className?: string;
}

export function Badge({ children, variant = "purple", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-sm font-medium border",
        variant === "purple" && "bg-purple-500/10 border-purple-500/20 text-purple-300",
        variant === "cyan" && "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        variant === "slate" && "bg-slate-800/60 border-slate-700/50 text-slate-300",
        className
      )}
    >
      {children}
    </span>
  );
}
