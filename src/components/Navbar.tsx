import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-dark-surface/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bhagwati Filaments" className="h-14 md:h-16 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === link.path
                  ? "text-primary"
                  : "text-dark-surface-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="font-body">
            <Link to="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Get Inquiry
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark-surface-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-surface/95 backdrop-blur-md border-t border-primary/10 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-base py-2 transition-colors ${location.pathname === link.path
                    ? "text-primary"
                    : "text-dark-surface-foreground/80"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="font-body w-full">
              <Link to="/contact">Get Inquiry</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
