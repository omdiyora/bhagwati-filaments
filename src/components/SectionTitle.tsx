import { motion } from "framer-motion";

interface SectionTitleProps {
  /** Large watermark text behind the heading */
  watermark: string;
  /** The visible heading — can include JSX for gold-gradient spans */
  children: React.ReactNode;
  /** Whether the section has a dark background */
  dark?: boolean;
  /** Optional subtitle below the heading */
  subtitle?: string;
}

const SectionTitle = ({ watermark, children, dark = false, subtitle }: SectionTitleProps) => (
  <div className="relative text-center mb-10 sm:mb-16 md:mb-20">
    {/* Watermark */}
    <span
      className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-display text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] font-bold uppercase leading-none tracking-tight select-none pointer-events-none whitespace-nowrap ${
        dark ? "text-dark-surface-foreground/[0.04]" : "text-foreground/[0.04]"
      }`}
    >
      {watermark}
    </span>

    {/* Actual heading */}
    <motion.h2
      className={`relative z-10 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        dark ? "text-dark-surface-foreground" : "text-foreground"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>

    {subtitle && (
      <motion.p
        className={`relative z-10 font-body mt-4 max-w-2xl mx-auto text-lg ${
          dark ? "text-dark-surface-foreground/50" : "text-muted-foreground"
        }`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
