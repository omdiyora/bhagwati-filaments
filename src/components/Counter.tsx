import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, IndianRupee, Clock, Package } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: IndianRupee, value: 50, suffix: "Cr+", label: "Annual Turnover" },
  { icon: Package, value: 65, suffix: "K+", label: "Orders Delivered" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <div ref={ref} className="tabular-nums">
      <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">{count}</span>
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary ml-0.5">{suffix}</span>
    </div>
  );
};

const Counter = () => (
  <section className="py-14 sm:py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-6 lg:gap-12 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 sm:mb-5">
              <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>

            {/* Number */}
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />

            {/* Label */}
            <p className="font-body text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-2 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Counter;
