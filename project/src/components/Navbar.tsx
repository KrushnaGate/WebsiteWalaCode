import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

interface NavbarProps {
  onGetQuote: () => void;
}

export default function Navbar({ onGetQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a192f]/95 shadow-lg shadow-black/20 overlay-backdrop"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#64ffda]/20 bg-[#64ffda]/10 group-hover:bg-[#64ffda]/20 transition-all flex items-center justify-center">
              <img
                src="/logo.png"
                alt="WebsiteWalaCode Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm leading-tight text-[#ccd6f6]">
                WebsiteWalaCode
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-[#64ffda] bg-[#64ffda]/10"
                    : "text-[#8892b0] hover:text-[#64ffda] hover:bg-[#64ffda]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm font-medium text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <Phone size={15} />
              <span className="hidden xl:inline">+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[#64ffda] hover:text-[#4cc9b0] transition-colors"
            >
              <MessageCircle size={15} />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <button
              onClick={onGetQuote}
              className="bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#64ffda]/20 active:scale-95"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onGetQuote}
              className="bg-[#64ffda] text-[#0a192f] px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#112240] border-t border-[#64ffda]/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                location.pathname === link.to
                  ? "text-[#64ffda] bg-[#64ffda]/10"
                  : "text-[#8892b0] hover:text-[#64ffda] hover:bg-[#64ffda]/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#64ffda]/10 mt-2 flex gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-[#8892b0] px-4 py-2"
            >
              <Phone size={15} /> +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#64ffda] px-4 py-2"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
