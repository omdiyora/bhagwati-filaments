import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

const reachCards = [
  {
    icon: Mail,
    title: "Email Us",
    lines: ["bhagwatifilaments@gmail.com"],
    link:
      "mailto:bhagwatifilaments@gmail.com?subject=Yarn Inquiry from Website – Bhagwati Filaments",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 95868 36436"],
    link: "tel:+919586836436",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: ["+91 95867 36436"],
    link: "https://wa.me/919586736436",
  },
  {
    icon: MapPin,
    title: "Our Location",
    lines: [
      "275, Opera Business Hub, Mota Varachha, Surat,",
      "Gujarat 394101",
    ],
    link: "https://www.google.com/maps?q=Opera+Business+Hub+Mota+Varachha+Surat",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [yarnType, setYarnType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: yarnType,
      message: formData.get("message"),
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_3gnngcc",
        "template_2fr1nx9",
        data,
        "Kz0pw2Pe7wlYUquzK"
      );

      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative section-dark pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Decorative background */}
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
            {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
              <span className="font-body text-xs font-bold text-primary uppercase tracking-widest">Contact Us</span>
            </div> */}
            <SectionTitle watermark="Contact" dark>
              <span className="gold-gradient-text">Get in Touch</span>
            </SectionTitle>
            <p className="font-body text-dark-surface-foreground/60 max-w-xl mx-auto text-base sm:text-lg -mt-6 sm:-mt-8 md:-mt-12 leading-relaxed">
              Ready to discuss your yarn requirements? Reach out to us today.
            </p>
            {/* <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-dark-surface-foreground/40">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body text-sm">We respond within 24 hours</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Reach Out Cards */}
        <section className="py-10 sm:py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <SectionTitle watermark="Reach">
              <span className="gold-gradient-text">Reach</span> Out to Us
            </SectionTitle>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {reachCards.map((card, i) => (
                <motion.a
                  key={card.title}
                  href={card.link}
                  target={card.title === "Our Location" || card.title === "WhatsApp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {card.title}
                  </h3>

                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className="font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Map side by side */}
        <section className="pb-10 sm:pb-14 md:pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Form Card */}
              <motion.div
                className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8 lg:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Feel Free to Get in Touch or Visit our Location.
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Full Name*"
                      name="name"
                      required
                      className="font-body h-12 bg-background border-border border-dashed text-foreground placeholder:text-muted-foreground/50"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address*"
                      name="email"
                      required
                      className="font-body h-12 bg-background border-border border-dashed text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Phone Number*"
                      name="phone"
                      required
                      className="font-body h-12 bg-background border-border border-dashed text-foreground placeholder:text-muted-foreground/50"
                    />
                    <Select value={yarnType} onValueChange={setYarnType}>
                      <SelectTrigger
                        className={cn(
                          "h-12 bg-background border-border border-dashed font-body",
                          "focus:ring-0 focus:ring-offset-0",
                          !yarnType
                            ? "text-muted-foreground/50"
                            : "text-foreground"
                        )}
                      >
                        <SelectValue placeholder="Select Yarn Type*" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="polyester">Polyester Yarn</SelectItem>
                        <SelectItem value="cotton">Cotton Yarn</SelectItem>
                        <SelectItem value="nylon">Nylon Yarn</SelectItem>
                        <SelectItem value="industrial">Industrial Yarn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    placeholder="Type message*"
                    name="message"
                    rows={5}
                    required
                    className="font-body bg-background border-border border-dashed text-foreground placeholder:text-muted-foreground/50 resize-none"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="font-body text-sm font-bold uppercase tracking-wider px-8"
                    disabled={loading}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Submit Now"}
                  </Button>
                </form>
              </motion.div>

              {/* Map */}
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.837583124398!2d72.8863124758453!3d21.238288180547976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa0b44e199f%3A0xb2b2adaf3c125594!2sOpera%20Business%20Hub!5e0!3m2!1sen!2sin!4v1771999453577!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 350 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* <iframe
                  title="Bhagwati Filaments Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.55497264422!2d72.65756505!3d21.159305049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 350 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
