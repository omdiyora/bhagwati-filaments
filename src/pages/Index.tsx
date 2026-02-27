import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Counter from "@/components/Counter";
import OurStory from "@/components/OurStory";
import ProductSection from "@/components/ProductCard";
import TrustedCompanies from "@/components/TrustedCompanies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSlider />
      <Counter />
      <OurStory />
      <ProductSection />
      <TrustedCompanies />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
