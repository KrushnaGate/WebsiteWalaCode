import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBanner from "./components/Aboutbanner";
import TrustSignals from "./components/TrustSignals";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import LeadMagnet from "./components/LeadMagnet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollPopup from "./components/ScrollPopup";
import ExitIntentPopup from "./components/ExitIntentPopup";
import {
  FloatingWhatsApp,
  StickyGetQuote,
  ScrollToTop,
} from "./components/FloatingElements";

function HomePage({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <div className="page-enter">
      <Hero onGetQuote={onGetQuote} />
      <AboutBanner />
      <TrustSignals />
      <ServicesHome />
      <PackagesHome onGetQuote={onGetQuote} />
      <PortfolioHome />
      <Testimonials />
      <LeadMagnet />
    </div>
  );
}

function ServicesHome() {
  return (
    <section id="services" className="py-20 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            Everything You Need to{" "}
            <span className="text-[#64ffda] glow-secondary">Go Digital</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
            From custom websites to full-stack applications, we deliver
            solutions that drive real business results.
          </p>
        </div>
        <ServicesGrid />
        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 text-[#64ffda] border border-[#64ffda]/20 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            View All Services
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const services = [
    {
      icon: "Globe",
      title: "Website Development",
      desc: "Custom, responsive, SEO-friendly websites.",
    },
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      desc: "iOS & Android apps with React Native.",
    },
    {
      icon: "Code2",
      title: "Web App (MERN)",
      desc: "Full-stack MERN apps, dashboards, APIs.",
    },
    {
      icon: "Server",
      title: "Hosting & Server",
      desc: "Hostinger-optimized, SSL, backups.",
    },
    {
      icon: "Settings",
      title: "Maintenance & SEO",
      desc: "Ongoing support and SEO optimization.",
    },
    {
      icon: "Search",
      title: "SEO Optimization",
      desc: "Rank higher and get found online.",
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    Smartphone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    Code2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    Server: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    Settings: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    Search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      {services.map((service) => (
        <div
          key={service.title}
          className="group relative bg-[#0a192f] border border-[#64ffda]/10 rounded-2xl p-6 hover:border-[#64ffda]/30 hover:shadow-xl hover:shadow-[#64ffda]/5 transition-all duration-300 hover:-translate-y-1 card-shimmer overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          <div className="w-14 h-14 bg-[#64ffda]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#64ffda]/20 group-hover:scale-110 transition-all duration-300 text-[#64ffda]">
            {iconMap[service.icon]}
          </div>
          <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
            {service.title}
          </h3>
          <p className="text-[#8892b0] text-sm leading-relaxed">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

function PackagesHome({ onGetQuote }: { onGetQuote: () => void }) {
  const pkgs = [
    { title: "Simple Website", price: "25,000", popular: false },
    { title: "Business Website", price: "75,000", popular: true },
    { title: "E-commerce Store", price: "1,50,000", popular: false },
    { title: "Custom MERN App", price: "3,00,000+", popular: false },
  ];

  return (
    <section id="packages" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
            Packages & Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            Transparent Pricing,{" "}
            <span className="text-[#64ffda] glow-secondary">No Surprises</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
            Choose a plan that fits your business. All plans include 1-month
            basic support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {pkgs.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative bg-[#112240] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "border-2 border-[#64ffda]/40 shadow-lg shadow-[#64ffda]/10"
                  : "border border-[#64ffda]/10 hover:border-[#64ffda]/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#64ffda] text-[#0a192f] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-[#ccd6f6] mb-2">
                {pkg.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm text-[#8892b0]">&#8377;</span>
                <span className="text-2xl font-extrabold text-[#ccd6f6]">
                  {pkg.price}
                </span>
              </div>
              <button
                onClick={onGetQuote}
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  pkg.popular
                    ? "bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f]"
                    : "bg-[#0a192f] hover:bg-[#1d3461] text-[#64ffda] border border-[#64ffda]/20"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/packages"
            className="inline-flex items-center gap-2 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 text-[#64ffda] border border-[#64ffda]/20 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            View Full Pricing Details
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function PortfolioHome() {
  const projects = [
    {
      name: "ShopEase E-commerce",
      category: "E-commerce",
      result: "Sales up 200%",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "HealthTrack Dashboard",
      category: "Dashboard",
      result: "Efficiency +150%",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "FoodieApp Mobile",
      category: "App",
      result: "10K+ downloads",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-iphone-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            Projects That{" "}
            <span className="text-[#64ffda] glow-secondary">
              Deliver Results
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-[#0a192f] border border-[#64ffda]/10 rounded-2xl overflow-hidden hover:border-[#64ffda]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent" />
              </div>
              <div className="p-5">
                <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-[#ccd6f6] mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-[#64ffda] font-medium">
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 text-[#64ffda] border border-[#64ffda]/20 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [scrollPopupTriggered, setScrollPopupTriggered] = useState(false);
  const [exitPopupTriggered, setExitPopupTriggered] = useState(false);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const openQuotePopup = () => {
    setQuoteFormOpen(true);
    setShowScrollPopup(true);
  };

  const closeQuotePopup = () => {
    setShowScrollPopup(false);
    setQuoteFormOpen(false);
  };

  // Scroll popup at 40-50% scroll (home page only)
  useEffect(() => {
    const handleScroll = () => {
      if (scrollPopupTriggered) return;
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.4 && scrollPercent <= 0.5) {
        setShowScrollPopup(true);
        setScrollPopupTriggered(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPopupTriggered]);

  // Exit intent popup
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitPopupTriggered) return;
      if (e.clientY <= 0) {
        setShowExitPopup(true);
        setExitPopupTriggered(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [exitPopupTriggered]);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = () => {
      const elements = document.querySelectorAll(
        ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale, .stagger-children",
      );
      elements.forEach((el) => observer.observe(el));
    };

    observe();
    const interval = setInterval(observe, 1000);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Navbar onGetQuote={openQuotePopup} />
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<HomePage onGetQuote={openQuotePopup} />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/packages"
          element={<Packages onGetQuote={openQuotePopup} />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/contact"
          element={
            <Contact
              onGetQuote={openQuotePopup}
              quoteFormOpen={quoteFormOpen}
              onCloseQuote={closeQuotePopup}
            />
          }
        />
      </Routes>

      <Footer />

      {/* Floating elements */}
      <FloatingWhatsApp />
      <StickyGetQuote onClick={openQuotePopup} />
      <ScrollToTop />

      {/* Popups */}
      <ScrollPopup isOpen={showScrollPopup} onClose={closeQuotePopup} />
      <ExitIntentPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
        onGetQuote={() => {
          setShowExitPopup(false);
          openQuotePopup();
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
