import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import productPolyester from "@/assets/product-polyester.jpg";
import productCotton from "@/assets/product-cotton.jpg";
import productNylon from "@/assets/product-nylon.jpg";
import productIndustrial from "@/assets/product-industrial.jpg";

const products = [
  {
    name: "Polyester Yarn",
    image: productPolyester,
    desc: "High tenacity polyester yarn available in various deniers (75D to 600D). Ideal for weaving, knitting, embroidery, and industrial applications.",
    features: ["High tensile strength", "Color fastness", "UV resistant", "Multiple denier options"],
    number: "01",
  },
  {
    name: "Cotton Yarn",
    image: productCotton,
    desc: "Premium combed and carded cotton yarn in single and multi-ply counts. Available in ring-spun, open-end, and compact varieties.",
    features: ["100% natural fiber", "Soft & breathable", "Eco-friendly", "Multiple counts available"],
    number: "02",
  },
  {
    name: "Nylon Yarn",
    image: productNylon,
    desc: "Durable nylon filament and textured yarn. Excellent elasticity and abrasion resistance for diverse textile applications.",
    features: ["High elasticity", "Abrasion resistant", "Lightweight", "Easy to dye"],
    number: "03",
  },
  {
    name: "Industrial Yarn",
    image: productIndustrial,
    desc: "Heavy-duty industrial grade yarn for technical textiles, ropes, nets, and specialized manufacturing applications.",
    features: ["Extra strength", "Weather resistant", "Custom specifications", "Bulk availability"],
    number: "04",
  },
];

const Services = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
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
            <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">Our Products</span>
          </motion.div> */}
          <SectionTitle watermark="Services" dark>
            Premium Yarn{" "}
            <span className="gold-gradient-text">Categories</span>
          </SectionTitle>
          <p className="font-body text-dark-surface-foreground/60 max-w-xl mx-auto text-base sm:text-lg -mt-6 sm:-mt-8 md:-mt-12 leading-relaxed">
            Explore our complete range of high-quality yarn products for every textile application.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 sm:py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 space-y-14 sm:space-y-20 md:space-y-28 max-w-6xl">
          {products.map((product, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={product.name}
                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={isReversed ? "md:order-2" : ""}>
                  <motion.div
                    className="relative group rounded-2xl overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35 }}
                  >
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 sm:h-72 md:h-96 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 right-5 font-display text-4xl sm:text-6xl font-bold text-dark-surface-foreground/[0.08] select-none">
                      {product.number}
                    </span>
                  </motion.div>
                </div>

                <div className={isReversed ? "md:order-1" : ""}>
                  {/* <div className="inline-flex items-center gap-3 mb-4">
                    <span className="font-display text-sm font-bold text-primary/40">{product.number}</span>
                    <div className="w-8 h-[2px] bg-primary/30" />
                  </div> */}
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 text-base">{product.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="font-body text-sm text-foreground/80 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="font-body text-sm sm:text-base px-6 sm:px-8 h-10 sm:h-12 group/btn">
                    <Link to="/contact">
                      Request Inquiry
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Services;