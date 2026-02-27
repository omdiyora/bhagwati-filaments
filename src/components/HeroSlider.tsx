import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, title: "Leading Yarn Supplier in Surat", subtitle: "Premium quality yarn for every textile need — trusted by 500+ manufacturers across India", tag: "Since 2014" },
  { image: hero2, title: "Premium Quality Yarn Collection", subtitle: "From polyester to cotton, nylon to industrial — all types of yarn dealing under one roof", tag: "All Types" },
  { image: hero3, title: "Bulk Orders & Lightning Delivery", subtitle: "₹50+ crore annual turnover with pan-India delivery in 3-7 business days", tag: "Fast Delivery" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-dark-surface">
      {/* Background images with Ken Burns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/90 via-dark-surface/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-dark-surface/30" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(40, 45%, 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(40, 45%, 55%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content — left aligned for editorial feel */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Animated tag */}
            {/* <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-7"
              >
                <Play className="w-3 h-3 text-primary fill-primary" />
                <span className="font-body text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">{slides[current].tag}</span>
              </motion.div>
            </AnimatePresence> */}

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-dark-surface-foreground leading-[1.05] mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {slides[current].title}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                className="font-body text-sm sm:text-base md:text-xl text-dark-surface-foreground/70 max-w-xl mb-6 sm:mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="font-body text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-13 group/cta">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                size="lg"
                className="font-body text-sm sm:text-base px-5 sm:px-8 h-11 sm:h-13 border-2 border-primary-foreground/25 text-primary-foreground bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Contact Us</Link>
              </Button> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right side — slide counter */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className="group flex items-center gap-3"
          >
            <span className={`font-body text-xs font-bold transition-all duration-300 ${i === current ? "text-primary" : "text-white/70 group-hover:text-white"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={`h-[2px] transition-all duration-500 ${i === current ? "w-12 bg-primary" : "w-6 bg-white/40 group-hover:bg-white/70 group-hover:w-8"}`} />
          </button>
        ))}
      </div>

      {/* Bottom nav bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Progress bar */}
        <div className="h-[3px] bg-primary-foreground/10">
          <motion.div
            className="h-full bg-primary"
            key={`progress-${current}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>

        <div className="bg-dark-surface/40 backdrop-blur-md border-t border-primary-foreground/5">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Slide info */}
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl font-bold text-primary">{String(current + 1).padStart(2, "0")}</span>
              <div className="w-8 h-[1px] bg-white/30" />
              <span className="font-body text-sm text-white/70">{String(slides.length).padStart(2, "0")}</span>
            </div>

            {/* Mobile dots */}
            <div className="flex lg:hidden gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/30"}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary backdrop-blur-sm transition-colors duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-12 h-12 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary backdrop-blur-sm transition-colors duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
