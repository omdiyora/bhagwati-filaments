import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import denishImage from "@/assets/team01.png";
import dishantkImage from "@/assets/team02.jpeg";
const teamMembers = [
    {
        name: "Denish Patel",
        role: "Founder & Managing Director",
        bio: "Over 30 years of experience in the textile industry, leading Bhagwati Filaments with vision and dedication.",
        image: denishImage
    },
    {
        name: "Dishant Patel",
        role: "Co-Founder",
        bio: "Ensures seamless production workflows and maintains the highest quality standards across all product lines.",
        image: dishantkImage,
    },
];
const Team = () => (
    <>
        <Navbar />
        <main>
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
                    <SectionTitle watermark="Team" dark>
                        Meet the People Behind{" "}
                        <span className="gold-gradient-text">Our Success</span>
                    </SectionTitle>
                    <p className="font-body text-dark-surface-foreground/60 max-w-xl mx-auto text-base sm:text-lg -mt-6 sm:-mt-8 md:-mt-12 leading-relaxed">
                        A passionate team committed to delivering excellence in every fiber.
                    </p>
                </div>
            </section>
            {/* Team Grid */}
            <section className="py-14 sm:py-20 md:py-28 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition"
                            >

                                {/* Image */}
                                <div className="relative h-[360px] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    <h3 className="text-xl font-semibold text-foreground">
                                        {member.name}
                                    </h3>

                                    <p className="text-primary text-sm font-medium mt-1">
                                        {member.role}
                                    </p>

                                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                        {member.bio}
                                    </p>

                                </div>

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
export default Team;