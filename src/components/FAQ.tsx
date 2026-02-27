import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What types of yarn do you supply?", a: "We supply a wide range of yarns including Polyester, Cotton, Nylon, and Industrial-grade yarn. We deal in both raw and processed yarn suitable for weaving, knitting, and industrial applications.", number: "01" },
  { q: "Do you provide bulk orders?", a: "Yes, we specialize in bulk orders and can handle large-scale requirements. We offer competitive pricing for bulk purchases with flexible payment terms.", number: "02" },
  { q: "What is your delivery timeline?", a: "Our standard delivery timeline is 3-7 business days for domestic orders. For bulk orders, we provide a detailed delivery schedule upon order confirmation.", number: "03" },
  { q: "How can we request a quotation?", a: "You can request a quotation through our contact form, by calling us directly, or via WhatsApp. Our team responds within 24 hours with detailed pricing.", number: "04" },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-surface overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
          style={{ y: orbY }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          {/* Left — heading & CTA */}
          <motion.div
            className="md:sticky md:top-32"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle watermark="FAQ" dark>
              Frequently Asked{" "}
              <span className="gold-gradient-text">Questions</span>
            </SectionTitle>
            <p className="font-body text-dark-surface-foreground/60 leading-relaxed mb-10 max-w-sm">
              Everything you need to know about our yarn products, ordering process, and delivery.
            </p>

            <Button asChild size="lg" variant="outline" className="px-6 py-2 font-body text-base border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground h-13 group/btn backdrop-blur-sm">
              <Link to="/contact">
                {/* <MessageCircle className="w-4 h-4 mr-2" /> */}
                Ask a Question
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Right — accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AccordionItem
                    value={`faq-${i}`}
                    className="group/faq border border-primary/10 rounded-xl px-7 bg-dark-surface-foreground/[0.02] hover:no-underline hover:border-primary/25 transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.04] data-[state=open]:shadow-[0_8px_30px_-10px_hsla(40,45%,55%,0.1)]"
                  >
                    <AccordionTrigger className="font-body text-dark-surface-foreground hover:text-primary text-left py-6 gap-4 [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                      <span className="flex items-center gap-4">
                        {/* <span className="font-display text-sm font-bold text-primary/40 group-data-[state=open]/faq:text-primary transition-colors duration-300">
                          {faq.number}
                        </span> */}
                        <span className="font-medium text-base no-underline ">{faq.q}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-dark-surface-foreground/60 leading-relaxed pb-6 pl-12 text-[15px]">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Bottom note */}
            <motion.div
              className="mt-8 flex items-center gap-4 px-7 py-5 rounded-xl border border-dashed border-primary/15 bg-primary/[0.03]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <p className="font-body text-sm text-dark-surface-foreground/50">
                Still have questions?{" "}
                <Link to="/contact" className="text-primary font-semibold">
                  Contact our team
                </Link>{" "}
                — we respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
