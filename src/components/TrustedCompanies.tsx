import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const companies = [
  "Jiwarajka Textile Industries", "Oeko-Tex", "Star Export House", "Salasar Group", "Gurukrupa Group"
];

const LogoItem = ({ name }: { name: string }) => (
  <motion.div
    className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 lg:mx-10 flex items-center group cursor-default select-none"
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.25 }}
  >
    <span className="font-body text-sm sm:text-base md:text-lg lg:text-xl font-bold text-dark-surface-foreground/20 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

const TrustedCompanies = () => (
  <section className="py-10 sm:py-14 md:py-20 section-dark border-y border-primary/10 overflow-hidden">
    <SectionTitle watermark="Partners" dark>
      Trusted by Innovative{" "}
      <span className="gold-gradient-text">Companies</span>
    </SectionTitle>

    {/* Row 1 — scroll left */}
    <div className="relative mb-6">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-dark-surface to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-dark-surface to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...companies, ...companies].map((company, i) => (
          <LogoItem key={`r1-${i}`} name={company} />
        ))}
      </div>
    </div>

    {/* Row 2 — scroll right (reverse) */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-dark-surface to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-dark-surface to-transparent z-10" />
      <div className="flex animate-marquee-reverse whitespace-nowrap py-3">
        {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, i) => (
          <LogoItem key={`r2-${i}`} name={company} />
        ))}
      </div>
    </div>
  </section>
);

export default TrustedCompanies;
