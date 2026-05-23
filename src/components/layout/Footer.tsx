import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SocialButton } from "@/components/ui/SocialButton";
import { SOCIAL_LINKS } from "@/constants/skills";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-purple-500/20 bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-slate-400 text-sm flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" aria-hidden="true" /> by Isaac
            Rajab · © {new Date().getFullYear()}
          </p>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <SocialButton key={link.icon} {...link} size="sm" showLabel={false} />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
