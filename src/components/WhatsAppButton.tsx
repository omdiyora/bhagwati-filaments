import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton = () => (
  <a
    href="https://wa.me/9586836436?text=Hello%20Bhagwati%20Filaments%2C%20I%20would%20like%20to%20inquire%20about%20your%20yarn%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
