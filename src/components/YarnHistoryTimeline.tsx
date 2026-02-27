import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

import timelineGandhi from "@/assets/timeline-gandhi.jpg";
import timelineMills from "@/assets/timeline-mills.jpg";
import timelineSynthetic from "@/assets/timeline-synthetic.jpg";
import timelineGlobal from "@/assets/timeline-global.jpg";
import timelineDigital from "@/assets/timeline-digital.jpg";
import timelineModern from "@/assets/timeline-modern.jpg";

const eras = [
  {
    year: "1920s",
    era: "Swadeshi Movement",
    title: "Gandhi & the Charkha",
    desc: "Mahatma Gandhi championed the spinning wheel (charkha) as a symbol of self-reliance. The Swadeshi movement urged Indians to boycott British textiles and spin their own khadi yarn — igniting a revolution rooted in thread.",
    accent: "Khadi · Self-Reliance · Freedom",
    image: timelineGandhi,
  },
  {
    year: "1947",
    era: "Post-Independence",
    title: "Birth of Indian Textile Mills",
    desc: "After independence, India invested heavily in textile infrastructure. Cotton mills in Mumbai, Ahmedabad, and Surat laid the foundation for one of the world's largest textile industries, with yarn trading becoming a cornerstone of commerce.",
    accent: "Industrialization · Cotton Mills · Growth",
    image: timelineMills,
  },
  {
    year: "1970s",
    era: "Synthetic Revolution",
    title: "Rise of Polyester & Nylon",
    desc: "The introduction of synthetic fibres transformed the yarn market. Polyester and nylon offered durability and affordability, opening massive new markets. Surat emerged as India's synthetic textile capital during this era.",
    accent: "Polyester · Nylon · Surat",
    image: timelineSynthetic,
  },
  {
    year: "1991",
    era: "Liberalization",
    title: "Global Markets Open",
    desc: "Economic reforms opened India's textile sector to global trade. Yarn exports surged, international quality standards were adopted, and Indian traders began competing on the world stage with competitive pricing and scale.",
    accent: "Exports · Quality Standards · Scale",
    image: timelineGlobal,
  },
  {
    year: "2010s",
    era: "Digital Transformation",
    title: "Tech Meets Textiles",
    desc: "Digital platforms, supply chain automation, and e-commerce reshaped yarn trading. Traders adopted ERP systems, online marketplaces, and real-time logistics tracking — making the industry faster and more transparent than ever.",
    accent: "E-Commerce · Automation · Logistics",
    image: timelineDigital,
  },
  {
    year: "2024+",
    era: "Modern Era",
    title: "Sustainable & Smart Yarn",
    desc: "Today's yarn industry focuses on sustainability — recycled polyester, organic cotton, and eco-friendly dyes. Smart textiles and AI-driven demand forecasting define the new frontier of yarn trading in India and beyond.",
    accent: "Sustainability · Innovation · Future",
    image: timelineModern,
  },
];

const YarnHistoryTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-40 bg-dark-surface overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
          style={{ y: orbY }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          watermark="Heritage"
          dark
          subtitle="From Gandhi's charkha to modern smart textiles — the evolution of India's yarn industry."
        >
          Yarn Trading{" "}
          <span className="gold-gradient-text">Through the Ages</span>
        </SectionTitle>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical centre line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-primary/30 md:-translate-x-px" />

          {eras.map((era, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={era.year}
                className={`relative flex items-start mb-12 sm:mb-16 md:mb-20 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Dot on the line */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-8 z-20">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-dark-surface shadow-[0_0_0_4px_hsla(40,45%,55%,0.2),0_0_20px_hsla(40,45%,55%,0.15)]" />
                </div>

                {/* Year pill — visible on desktop at centre */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 mt-6 z-20 items-center justify-center">
                  <span className="bg-dark-surface border border-primary/30 rounded-full px-4 py-1 font-display text-sm font-bold text-primary shadow-[0_0_15px_hsla(40,45%,55%,0.1)]">
                    {era.year}
                  </span>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? "md:pr-4" : "md:pl-4"
                  }`}
                >
                  <motion.div
                    className="relative bg-dark-surface border border-primary/10 rounded-xl overflow-hidden group cursor-default"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 25px 60px -15px hsla(40, 45%, 55%, 0.2)",
                      borderColor: "hsla(40, 45%, 55%, 0.4)",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {/* Top glow line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500 z-10" />

                    {/* Image */}
                    <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                      <motion.img
                        src={era.image}
                        alt={era.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/30 to-transparent" />
                      {/* Year overlay on image */}
                      <span className="absolute bottom-3 right-4 font-display text-5xl font-bold text-dark-surface-foreground/[0.08] select-none">
                        {era.year}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="relative z-10 p-4 sm:p-5 md:p-7">
                      {/* Mobile year + era label */}
                      <div className="md:hidden mb-3">
                        <span className="font-display text-lg font-bold text-primary">{era.year}</span>
                        <span className="font-body text-xs text-dark-surface-foreground/40 ml-2">· {era.era}</span>
                      </div>

                      {/* Desktop era label */}
                      <div className="hidden md:block mb-2">
                        <span className="font-body text-xs font-bold text-primary/70 uppercase tracking-widest">
                          {era.era}
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-semibold text-dark-surface-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {era.title}
                      </h3>
                      <p className="font-body text-sm text-dark-surface-foreground/50 leading-relaxed mb-5">
                        {era.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {era.accent.split(" · ").map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-[10px] font-semibold text-primary/60 uppercase tracking-wider bg-primary/[0.06] border border-primary/10 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-8 h-[2px] bg-primary/20 mt-5 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/50" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YarnHistoryTimeline;
