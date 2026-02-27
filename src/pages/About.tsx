import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import YarnHistoryTimeline from "@/components/YarnHistoryTimeline";
import { Award, Eye, Target, TrendingUp, Users, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CoreValues from "@/components/CoreValues";
import SectionTitle from "@/components/SectionTitle";
import aboutTeam from "@/assets/about-team.jpg";

const strengths = [
  { icon: Award, title: "Quality Assurance", desc: "Every batch tested for consistency and durability", number: "01" },
  { icon: TrendingUp, title: "Competitive Pricing", desc: "Best rates in Surat for bulk yarn orders", number: "02" },
  { icon: Users, title: "Customer Focus", desc: "Dedicated relationship managers for key accounts", number: "03" },
  { icon: Shield, title: "Reliable Supply", desc: "Consistent stock availability year-round", number: "04" },
];

const milestones = [
  { year: "2014", title: "Founded in Surat", desc: "Started with a small warehouse and a big vision" },
  { year: "2017", title: "500+ Clients", desc: "Reached our first major client milestone" },
  { year: "2020", title: "₹50 Cr Turnover", desc: "Crossed the ₹50 crore annual revenue mark" },
  { year: "2024", title: "Pan-India Reach", desc: "Expanded delivery network across India" },
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const About = () => {

  return (
    <>
      <Navbar />
      <main>
        {/* Hero — matching Services/Contact style */}
        <section className="relative section-dark pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[150px]" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">About Us</span>
            </motion.div> */}
            <SectionTitle watermark="About" dark>
              Our Journey in the{" "}
              <span className="gold-gradient-text">Yarn Industry</span>
            </SectionTitle>
            <p className="font-body text-dark-surface-foreground/60 max-w-xl mx-auto text-base sm:text-lg -mt-6 sm:-mt-8 md:-mt-12 leading-relaxed">
              Over a decade of trusted partnerships, premium quality, and relentless growth.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-dark-surface-foreground/40">
                {/* <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> */}
                {/* <span className="font-body text-sm">Trusted by 500+ clients across India</span> */}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction — editorial layout */}
        <section className="py-16 sm:py-20 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="font-body text-xs font-semibold text-primary uppercase tracking-wider">Est. 2014 — Surat, Gujarat</span>
              </motion.div>
              <SectionTitle watermark="About">
                Who We <span className="gold-gradient-text">Are</span>
              </SectionTitle>
              <p className="font-body text-muted-foreground leading-relaxed mb-5 text-lg">
                <span className="text-primary font-semibold">Bhagwati Filaments</span> was founded with a vision to become the most reliable yarn supplier in India's textile capital. Starting with a small warehouse in 2014, we have grown into a multi-crore enterprise serving 500+ clients across the nation.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our founder's deep understanding of the textile market, combined with our team's dedication to customer satisfaction, has made Bhagwati Filaments a trusted partner for businesses of all sizes.
              </p>
              <motion.div
                className="flex flex-col gap-4"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Premium quality yarn sourced globally", "500+ satisfied clients nationwide", "Dedicated support & relationship managers"].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 group"
                    variants={fadeSlideUp}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300"
                      whileHover={{ rotate: -8, scale: 1.1 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </motion.div>
                    <span className="font-body text-foreground/80 text-sm group-hover:text-foreground transition-colors duration-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={aboutTeam}
                  alt="Bhagwati Filaments Team"
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px] object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/20 to-transparent" />

                {/* Corner decorative accent */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className="absolute bottom-6 left-6 bg-dark-surface/80 backdrop-blur-md border border-primary/30 px-6 py-4 rounded-xl shadow-[0_8px_32px_hsla(40,45%,55%,0.15)]"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-4xl font-bold gold-gradient-text">10+</p>
                  <p className="font-body text-xs text-dark-surface-foreground/70 uppercase tracking-wider mt-1">Years of Trust</p>
                </motion.div>
              </div>
              <div className="hidden sm:block absolute -bottom-5 -right-5 w-full h-full border-2 border-primary/15 rounded-2xl -z-10 transition-all duration-500 group-hover:border-primary/30 group-hover:-bottom-6 group-hover:-right-6" />
              <div className="hidden sm:block absolute -bottom-10 -right-10 w-full h-full border border-primary/5 rounded-2xl -z-20" />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision — WOW */}
        <section className="relative py-16 sm:py-24 md:py-44 bg-dark-surface overflow-hidden">
          {/* Immersive background */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
            <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px]" />
            {/* Decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-primary/20 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <SectionTitle watermark="Mission" dark>
              Mission & <span className="gold-gradient-text">Vision</span>
            </SectionTitle>

            {/* Cards — dramatic bento style */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To provide the highest quality yarn products at competitive prices while maintaining the fastest delivery times in the industry, ensuring our clients' production never stops.",
                  number: "01",
                  highlights: ["Premium Quality", "Best Prices", "Fast Delivery"],
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  text: "To become India's most trusted yarn trading company by 2030, expanding our reach to international markets while maintaining the personal touch our clients value.",
                  number: "02",
                  highlights: ["India's #1", "Global Reach", "2030 Goal"],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, rotateX: 4 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="relative bg-dark-surface border border-primary/10 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden group cursor-default h-full"
                    whileHover={{
                      y: -12,
                      boxShadow: "0 30px 80px -20px hsla(40, 45%, 55%, 0.25)",
                      borderColor: "hsla(40, 45%, 55%, 0.5)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Top accent glow */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-500" />

                    {/* Large background number */}
                    {/* <span className="absolute -top-4 -right-2 font-display text-[6rem] sm:text-[8rem] md:text-[12rem] font-bold text-dark-surface-foreground/[0.02] group-hover:text-primary/[0.06] transition-colors duration-700 select-none leading-none">
                      {item.number}
                    </span> */}

                    {/* Corner decorative */}
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/10 rounded-tr-xl group-hover:border-primary/40 transition-colors duration-500" />
                    </div>

                    {/* Ambient glow behind icon */}
                    <div className="absolute top-8 left-8 w-20 h-20 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-all duration-700" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_hsla(40,45%,55%,0.2)] transition-all duration-500"
                        whileHover={{ rotate: -10, scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-dark-surface-foreground mb-4 sm:mb-5 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="font-body text-base md:text-lg text-dark-surface-foreground/50 leading-relaxed mb-8">
                        {item.text}
                      </p>

                      {/* Highlight pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="font-body text-[10px] font-bold text-primary/70 uppercase tracking-wider bg-primary/[0.08] border border-primary/15 rounded-full px-4 py-1.5 group-hover:bg-primary/[0.12] group-hover:border-primary/25 transition-all duration-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Expanding accent line */}
                      <div className="w-10 h-[2px] bg-primary/25 transition-all duration-500 group-hover:w-16 group-hover:bg-primary/60" />
                    </div>

                    {/* Bottom-right arrow */}
                    <motion.div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <CoreValues />

        {/* Yarn History Timeline */}
        <YarnHistoryTimeline />

        {/* Company Timeline */}
        <section className="py-16 sm:py-20 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <SectionTitle watermark="Journey">
              Key <span className="gold-gradient-text">Milestones</span>
            </SectionTitle>
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line — animated gradient */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-primary/30 md:-translate-x-px" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className={`relative flex items-start gap-6 mb-10 sm:mb-12 md:mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-12`}
                  initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Dot — pulse on entry */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-2 mt-2 z-10 shadow-[0_0_0_4px_hsla(40,45%,55%,0.15)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4, type: "spring", stiffness: 300 }}
                  />
                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-4" : "md:text-left md:pl-4"}`}>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient-text">{m.year}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-1">{m.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-16 sm:py-20 md:py-32 bg-muted overflow-hidden">
          <div className="container mx-auto px-4">
            <SectionTitle watermark="Strengths">
              Our <span className="gold-gradient-text">Strengths</span>
            </SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="relative bg-card border border-border rounded-xl p-6 sm:p-8 text-center overflow-hidden group cursor-default h-full"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 60px -15px hsla(40, 45%, 55%, 0.2)",
                      borderColor: "hsla(40, 45%, 55%, 0.4)",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />
                    {/* <span className="absolute top-2 right-4 font-display text-5xl sm:text-7xl font-bold text-border/30 group-hover:text-primary/10 transition-colors duration-500 select-none">
                      {s.number}
                    </span> */}
                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300"
                        whileHover={{ rotate: -8, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <s.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
                      <div className="w-8 h-[2px] bg-primary/20 mx-auto mt-5 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/50" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
