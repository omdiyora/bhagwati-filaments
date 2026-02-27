import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import productPolyester from "@/assets/product-polyester.jpg";
import productCotton from "@/assets/product-cotton.jpg";
import productNylon from "@/assets/product-nylon.jpg";
import productIndustrial from "@/assets/product-industrial.jpg";

const products = [
  { name: "Polyester Yarn", desc: "High tenacity polyester yarn for weaving & knitting", image: productPolyester },
  { name: "Cotton Yarn", desc: "Premium combed & carded cotton yarn", image: productCotton },
  { name: "Nylon Yarn", desc: "Durable nylon filament yarn for diverse applications", image: productNylon },
  { name: "Industrial Yarn", desc: "Heavy-duty yarn for industrial textile manufacturing", image: productIndustrial },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const ProductSection = () => (
  <section className="py-20 bg-muted overflow-hidden">
    <div className="container mx-auto px-4">
      <SectionTitle watermark="Services">
        Premium Yarn{" "}
        <span className="gold-gradient-text">Collection</span>
      </SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link to="/services" className="group block">
              <motion.div
                className="bg-card border border-border rounded-xl overflow-hidden relative"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 50px -10px hsla(40, 45%, 55%, 0.2)",
                  borderColor: "hsl(40, 45%, 55%)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Image container */}
                <div className="overflow-hidden aspect-square relative">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Floating CTA on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">{product.desc}</p>
                  <span className="inline-flex items-center text-primary text-sm font-body font-medium">
                    Learn more
                    <motion.span
                      className="inline-block ml-1"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
