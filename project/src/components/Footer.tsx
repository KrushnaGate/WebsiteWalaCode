import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  Shield,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Web App (MERN)",
  "Hosting & Server",
  "Maintenance & SEO",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] border-t border-[#64ffda]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#64ffda]/10 flex items-center justify-center font-bold text-lg text-[#64ffda] border border-[#64ffda]/20">
                <img
                  src="/logo.png"
                  alt="WebsiteWalaCode Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-[#ccd6f6] text-sm">
                  WebsiteWalaCode
                </p>
              </div>
            </div>
            <p className="text-sm text-[#8892b0] leading-relaxed mb-4">
              Fast, scalable, and affordable digital solutions for small
              businesses and startups in Pune and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#112240] hover:bg-[#64ffda]/10 border border-[#64ffda]/10 rounded-lg flex items-center justify-center transition-colors text-[#8892b0] hover:text-[#64ffda]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#112240] hover:bg-[#64ffda]/10 border border-[#64ffda]/10 rounded-lg flex items-center justify-center transition-colors text-[#8892b0] hover:text-[#64ffda]"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#112240] hover:bg-[#64ffda]/10 border border-[#64ffda]/10 rounded-lg flex items-center justify-center transition-colors text-[#8892b0] hover:text-[#64ffda]"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112240] hover:bg-[#64ffda]/10 border border-[#64ffda]/10 rounded-lg flex items-center justify-center transition-colors text-[#8892b0] hover:text-[#64ffda]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#ccd6f6] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#ccd6f6] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#ccd6f6] font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <Phone size={14} /> +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@krishnagateit.com"
                  className="flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <Mail size={14} /> hello@krishnagateit.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#64ffda]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8892b0]">
            &copy; 2026 WebsiteWalaCode. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#8892b0]">
            <a href="#" className="hover:text-[#64ffda] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#64ffda] transition-colors">
              Terms of Service
            </a>
            <span className="flex items-center gap-1">
              <Shield size={12} className="text-[#64ffda]" />
              Secure, Hostinger-hosted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
