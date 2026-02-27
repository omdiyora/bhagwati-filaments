import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, TrendingUp, Shield, Truck, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import yarnSpools from "@/assets/hero-2.jpg";

const achievements = [
  { icon: Award, title: "ISO Certified", desc: "Highest quality standards in yarn production & testing", number: "01" },
  { icon: TrendingUp, title: "₹50 Cr+ Turnover", desc: "Consistent growth year over year since inception", number: "02" },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous multi-stage testing at every step", number: "03" },
  { icon: Truck, title: "Pan India Delivery", desc: "Fast & reliable logistics across the nation", number: "04" },
];

const OurStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-surface overflow-hidden">
      {/* Parallax decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dotted grid texture — parallax */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            y: gridY,
            backgroundImage:
              "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glow orbs — parallax at different rates */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
          style={{ y: orbY1 }}
        />
        <motion.div
          className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[150px]"
          style={{ y: orbY2 }}
        />
        {/* Decorative vertical line — parallax */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{ y: lineY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle watermark="Story" dark>
          A Decade of Excellence{" "}
          <span className="gold-gradient-text">in Yarn Trading</span>
        </SectionTitle>

        {/* Image + story text — editorial layout */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 md:mb-36">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.img
                src={yarnSpools}
                alt="Bhagwati Filaments premium yarn collection"
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/70 via-dark-surface/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/30 to-transparent" />

              <motion.div
                className="absolute bottom-6 left-6 bg-dark-surface/80 backdrop-blur-md border border-primary/30 px-6 py-4 rounded-xl shadow-[0_8px_32px_hsla(40,45%,55%,0.15)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="font-display text-4xl font-bold gold-gradient-text">10+</p>
                <p className="font-body text-xs text-dark-surface-foreground/70 uppercase tracking-wider mt-1">
                  Years of Trust
                </p>
              </motion.div>

              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
            </div>

            <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-full h-full border-2 border-primary/15 rounded-2xl -z-10 transition-all duration-500 group-hover:border-primary/30 group-hover:-bottom-6 group-hover:-right-6 hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-full h-full border border-primary/5 rounded-2xl -z-20 hidden sm:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">
                Est. 2014 — Surat, Gujarat
              </span>
            </div>

            <p className="font-body text-lg md:text-xl text-dark-surface-foreground/85 leading-relaxed mb-6">
              Established in the heart of Surat,{" "}
              <span className="text-primary font-semibold">Bhagwati Filaments</span> has been a
              trusted name in the textile industry for over 10 years. We specialize in
              supplying premium quality yarn — from polyester and cotton to nylon and
              industrial-grade threads.
            </p>
            <p className="font-body text-dark-surface-foreground/60 leading-relaxed mb-10">
              Our commitment to quality, competitive pricing, and timely delivery has
              earned us the trust of 500+ satisfied clients and an annual turnover
              exceeding ₹50 crore. Every spool that leaves our warehouse reflects our
              promise of excellence.
            </p>

            {/* <div className="flex flex-wrap gap-6 sm:gap-10 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-primary/10">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "₹50Cr+", label: "Annual Turnover" },
                { value: "3-7", label: "Days Delivery" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <p className="font-display text-2xl md:text-3xl font-bold gold-gradient-text">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-dark-surface-foreground/50 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div> */}

            <Button asChild size="lg" className="font-body text-base px-6 py-2 h-13 group/btn">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative bg-dark-surface border border-primary/10 rounded-xl p-8 overflow-hidden group cursor-default h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 60px -15px hsla(40, 45%, 55%, 0.2)",
                  borderColor: "hsla(40, 45%, 55%, 0.4)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* <span className="absolute top-2 right-4 font-display text-7xl font-bold text-dark-surface-foreground/[0.04] group-hover:text-primary/10 transition-colors duration-500 select-none">
                  {item.number}
                </span> */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/30"
                    whileHover={{ rotate: -8, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-dark-surface-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-dark-surface-foreground/50 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="w-8 h-[2px] bg-primary/20 mt-5 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/50" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
