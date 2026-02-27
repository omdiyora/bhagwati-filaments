import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/SectionTitle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
const ContactForm = ({ dark = false }: { dark?: boolean }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [yarnType, setYarnType] = useState("");

  console.log(yarnType, 'yarnType');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const subject = encodeURIComponent(
    "Yarn Inquiry – Bhagwati Filaments"
  );

  const body = encodeURIComponent(
    "Hello Bhagwati Filaments,\n\nI would like to inquire about your yarn products."
  );

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="relative z-10 pt-20 md:pt-28 pb-4">
        <SectionTitle watermark="Contact">
          <span className="gold-gradient-text">Get in Touch</span>
        </SectionTitle>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-14 sm:pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Don't Be Shy
            </h3> */}
            <p className="font-body text-muted-foreground mb-10 max-w-sm leading-relaxed">
              Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <a
                // href={`mailto:bhagwatifilaments@gmail.com?subject=${subject}&body=${body}`}
                className="flex items-start gap-4 hover:opacity-80 transition"
              >
                <div className="w-12 h-12 rounded-md border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-0.5">
                    Mail Us
                  </p>
                  <p className="font-body text-sm text-muted-foreground p-0 m-0">
                    <a
                      href={`mailto:bhagwatifilaments@gmail.com?subject=${subject}&body=${body}`}
                      className="flex items-start gap-4 hover:text-primary transition"
                    >
                      bhagwatifilaments@gmail.com
                    </a>
                    {/* <br /> */}
                    <a
                      href={`mailto:denish@bhagwatifilaments.com?subject=${subject}&body=${body}`}
                      className="flex items-start gap-4 hover:text-primary transition"
                    >
                      denish@bhagwatifilaments.com
                    </a>

                  </p>
                </div>
              </a>

              <a
                // href="tel:+919586836436"
                className="flex items-start gap-4 "
              >
                <div className="w-12 h-12 rounded-md border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-0.5">
                    Call Us
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    <a
                      href="tel:+919586836436"
                      className="flex items-start gap-4 hover:text-primary transition"
                    >
                      +91 95868 36436
                    </a>
                    <a
                      href="tel:+919586736436"
                      className="flex items-start gap-4 hover:text-primary transition"
                    >
                      +91 95867 36436
                    </a>
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/9586836436?text=Hello%20Bhagwati%20Filaments%2C%20I%20would%20like%20to%20inquire%20about%20your%20yarn%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4  transition cursor-pointer"
              >
                <div className="w-12 h-12 rounded-md border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-0.5">
                    WhatsApp
                  </p>
                  <p className="font-body text-sm text-muted-foreground hover:text-primary">
                    95868 36436
                  </p>
                </div>
              </a>
              <a
                href="https://www.google.com/maps?q=Opera+Business+Hub+Mota+Varachha+Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4  transition cursor-pointer"
              >
                <div className="w-12 h-12 rounded-md border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-0.5">
                    Visit Us
                  </p>
                  <p className="font-body text-sm text-muted-foreground hover:text-primary">
                    275, Opera Business Hub, Mota Varachha, <br />
                    Surat, Gujarat 394101
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                placeholder="Enter your Full Name"
                required
                className="font-body h-13 bg-transparent border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/30 focus-visible:border-primary/50"
              />
              <Input
                type="email"
                placeholder="Enter a valid email address"
                required
                className="font-body h-13 bg-transparent border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/30 focus-visible:border-primary/50"
              />
              <Input
                type="text"
                placeholder="Enter your Phone"
                required
                className="font-body h-13 bg-transparent border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/30 focus-visible:border-primary/50"
              />
              <Select value={yarnType} onValueChange={setYarnType}>
                <SelectTrigger
                  className={cn(
                    "h-13 bg-transparent border-border focus:ring-primary/30 focus:border-primary/50",
                    !yarnType ? "text-muted-foreground/60" : "text-foreground"
                  )}
                >
                  <SelectValue placeholder="Select Yarn Type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="polyester">Polyester Yarn</SelectItem>
                  <SelectItem value="cotton">Cotton Yarn</SelectItem>
                  <SelectItem value="nylon">Nylon Yarn</SelectItem>
                  <SelectItem value="industrial">Industrial Yarn</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Enter your message"
                rows={5}
                required
                className="font-body bg-transparent border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/30 focus-visible:border-primary/50 resize-none"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: '160px' }}>
                <Button
                  type="submit"
                  size="lg"
                  className="font-body text-sm font-bold uppercase tracking-wider px-8"
                  disabled={loading}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
