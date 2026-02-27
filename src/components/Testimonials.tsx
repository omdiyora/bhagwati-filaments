import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const testimonials = [
  { name: "Rajesh Patel", company: "Patel Textiles", review: "Bhagwati Filaments has been our go-to supplier for 5 years. Consistent quality and on-time delivery every single time. Their team understands our requirements perfectly.", rating: 5, initials: "RP" },
  { name: "Meena Shah", company: "Shah Fabrics Pvt Ltd", review: "The best yarn supplier in Surat. Their polyester yarn quality is unmatched and pricing is very competitive. We've never had to look elsewhere.", rating: 5, initials: "MS" },
  { name: "Vikram Desai", company: "Desai Weaving Mills", review: "Reliable, professional, and always available. Bhagwati Filaments has helped us scale our production significantly. Truly a partner, not just a supplier.", rating: 5, initials: "VD" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
          style={{ y: orbY }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle watermark="Testimonials">
          What Our Clients{" "}
          <span className="gold-gradient-text">Say</span>
        </SectionTitle>

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto relative">
          {/* Large decorative quote */}
          <Quote className="w-12 h-12 sm:w-20 sm:h-20 text-primary/[0.07] mx-auto mb-2 -mt-4" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stars */}
              <div className="flex gap-1.5 justify-center mb-10">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Quote text */}
              <p className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.3] mb-8 sm:mb-12 italic max-w-3xl mx-auto px-2">
                "{t.review}"
              </p>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-primary/30 mx-auto mb-8" />

              {/* Avatar & name */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-dark-surface border-2 border-primary/30 flex items-center justify-center shadow-[0_4px_20px_hsla(40,45%,55%,0.15)]">
                  <span className="font-display text-xl font-bold gold-gradient-text">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-16 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_25px_hsla(40,45%,55%,0.15)] transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-16 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_25px_hsla(40,45%,55%,0.15)] transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Dots with progress */}
          <div className="flex justify-center gap-3 mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-primary"
                    : "w-2 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
