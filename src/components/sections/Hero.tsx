import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { SocialButton } from "@/components/ui/SocialButton";
import { SOCIAL_LINKS } from "@/constants/skills";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay } }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
      aria-label="Introduction"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <GlowBlob color="purple" className="top-20 left-20" />
        <GlowBlob color="blue" size="lg" className="bottom-20 right-20" animationDelay={2} />
        <GlowBlob color="cyan" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" animationDelay={4} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Badge */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          <span className="text-sm text-purple-300 tracking-wider font-medium">
            SOFTWARE ENGINEER
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.15}
          className="mb-6 text-gradient leading-tight"
        >
          Hi, I'm Isaac Rajab
          <br />
          <span className="text-gradient-brand">I build things for the web.</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Software engineer specialising in AI-powered applications, full-stack web development,
          and intelligent data pipelines. I turn ideas into production-ready products.
        </motion.p>

        {/* Social buttons */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.45}
          className="flex flex-wrap gap-4 justify-center"
        >
          {SOCIAL_LINKS.map((link) => (
            <SocialButton key={link.icon} {...link} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-300/60 hover:text-purple-300 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
