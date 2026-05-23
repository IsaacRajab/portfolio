import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SocialButton } from "@/components/ui/SocialButton";
import { SOCIAL_LINKS } from "@/constants/skills";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-purple-400" aria-hidden="true" />
          </div>

          <h2 id="contact-heading" className="mb-4 text-gradient-brand">
            Let's work together
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether it's a project, full-time role, or just
            a conversation — my inbox is always open.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIAL_LINKS.map((link) => (
              <SocialButton key={link.icon} {...link} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
