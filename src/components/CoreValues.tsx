import { motion } from "framer-motion";
import { Heart, Gem, Handshake, Zap, Globe, Leaf } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const values = [
  { icon: Gem, title: "Uncompromising Quality", desc: "Every spool is rigorously tested to meet the highest textile standards before it reaches you.", number: "01" },
  { icon: Handshake, title: "Trust & Transparency", desc: "Honest pricing, clear communication, and zero hidden costs — always.", number: "02" },
  { icon: Zap, title: "Speed & Agility", desc: "3-7 day delivery across India with real-time tracking and proactive updates.", number: "03" },
  { icon: Heart, title: "Client-First Approach", desc: "Dedicated relationship managers who treat your business like their own.", number: "04" },
  { icon: Globe, title: "Market Expertise", desc: "Deep knowledge of global yarn trends, pricing, and sourcing networks.", number: "05" },
  { icon: Leaf, title: "Sustainable Practices", desc: "Committed to eco-friendly sourcing and reducing our environmental footprint.", number: "06" },
];

const CoreValues = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-40 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <motion.div
          className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle watermark="Values">
          Our Core <span className="gold-gradient-text">Values</span>
        </SectionTitle>

        {/* 3×2 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden group cursor-default h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 30px 70px -20px hsla(40, 45%, 55%, 0.2)",
                  borderColor: "hsla(40, 45%, 55%, 0.45)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />

                {/* Large background number */}
                {/* <span className="absolute -top-2 -right-1 font-display text-[5rem] sm:text-[7rem] md:text-[8rem] font-bold text-foreground/[0.03] group-hover:text-primary/[0.07] transition-colors duration-700 select-none leading-none">
                  {item.number}
                </span> */}

                {/* Ambient glow */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-primary/5 rounded-full blur-[30px] group-hover:bg-primary/10 transition-all duration-700" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:shadow-[0_0_24px_hsla(40,45%,55%,0.15)] transition-all duration-500"
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Accent line */}
                  <div className="w-8 h-[2px] bg-primary/20 mt-6 transition-all duration-500 group-hover:w-14 group-hover:bg-primary/50" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
