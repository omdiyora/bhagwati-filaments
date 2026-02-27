import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const subject = encodeURIComponent(
  "Yarn Inquiry – Bhagwati Filaments"
);

const body = encodeURIComponent(
  "Hello Bhagwati Filaments,\n\nI would like to inquire about your yarn products."
);

const Footer = () => (

  <footer className="relative bg-dark-surface overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(40, 45%, 55%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -bottom-60 -left-40 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[150px]" />
    </div>

    {/* Top accent line */}
    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container mx-auto px-4 relative z-10">
      {/* Upper footer — brand + CTA */}

      {/* Main footer grid */}
      <div className="py-10 sm:py-14 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img src={logo} alt="Bhagwati Filaments" className="h-12 w-auto brightness-0 invert mb-4" />
            </div>
            <p className="font-body text-sm text-dark-surface-foreground/60 leading-relaxed">
              Leading yarn supplier in Surat with 10+ years of experience. Specializing in polyester, cotton, nylon, and industrial yarn for businesses across India.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">
                Quick Links
              </span>
            </div>
            <ul className="space-y-3 font-body text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-dark-surface-foreground/50 hover:text-primary transition-colors duration-300"
                  >
                    <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">
                Contact
              </span>
            </div>
            <ul className="space-y-4 font-body text-sm text-dark-surface-foreground/50">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <a href="https://www.google.com/maps?q=Opera+Business+Hub+Mota+Varachha+Surat" target="_blank" className="hover:text-primary"><span className="leading-relaxed">275, Opera Business Hub, Mota Varachha,<br /> Surat, Gujarat 394101</span></a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <a href="tel:+919586836436" className="hover:text-primary"><span>+91 95868 36436</span></a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <a href={`mailto:bhagwatifilaments@gmail.com?subject=${subject}&body=${body}`} className="hover:text-primary"><span>bhagwatifilaments@gmail.com</span></a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">
                Hours
              </span>
            </div>
            <div className="bg-primary/[0.04] border border-primary/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-body text-sm font-semibold text-dark-surface-foreground/80">Business Hours</span>
              </div>
              <div className="space-y-2 font-body text-sm text-dark-surface-foreground/50 pl-11">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-dark-surface-foreground/70 font-medium">10 AM – 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat</span>
                  <span className="text-dark-surface-foreground/70 font-medium">10 AM – 1 PM</span>
                </div>
                <div className="w-full h-px bg-primary/10" />
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-primary/60 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 sm:py-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="font-body text-xs text-dark-surface-foreground/30 tracking-wide">
          © {new Date().getFullYear()} Bhagwati Filaments. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <span
              key={item}
              className="font-body text-xs text-dark-surface-foreground/30 hover:text-primary/60 cursor-pointer transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
