import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useAnimations";

const packages = [
  {
    title: "Simple Website",
    subtitle: "Template-based",
    price: "5,999",
    priceNote: "one-time",
    popular: false,
    maintenance: "5,000",
    features: [
      "5 pages",
      "Template-based design",
      "Mobile responsive",
      "Contact form",
      "Simple CMS / basic editing",
      "1-week delivery",
    ],
    cta: "Choose Plan",
  },
  {
    title: "Business Website",
    subtitle: "Custom MERN",
    price: "49,999",
    priceNote: "one-time",
    popular: true,
    maintenance: "8,000",
    features: [
      "10-15 pages",
      "Custom MERN frontend/backend",
      "Admin panel for content",
      "Basic SEO setup",
      "Fast loading, modern UI",
      "2-3 weeks delivery",
    ],
    cta: "Choose Plan",
  },
  {
    title: "E-commerce Store",
    subtitle: "Full MERN Store",
    price: "3,50,000",
    priceNote: "one-time",
    popular: false,
    maintenance: "12,000",
    features: [
      "Full MERN-based online store",
      "Payment gateway (Razorpay)",
      "Product catalog & inventory",
      "User accounts & order mgmt",
      "20+ pages, Advanced SEO",
      "4 weeks delivery",
    ],
    cta: "Choose Plan",
  },
  {
    title: "Custom MERN App",
    subtitle: "Enterprise / SaaS",
    price: "5,00,000+",
    priceNote: "quote-based",
    popular: false,
    maintenance: "15,000+",
    features: [
      "Full-stack MERN web app or SaaS",
      "API integrations, 3rd-party tools",
      "Scalable architecture",
      "Hosting setup on Hostinger",
      "Ongoing support",
      "6-8 weeks+ (flexible)",
    ],
    cta: "Get Custom Quote",
  },
];

// ── Why Website Is Important section ─────────────────────────────────────────

const whyWebsiteItems = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <circle cx="32" cy="32" r="28" fill="#4a90d9" opacity="0.9" />
        <ellipse
          cx="32"
          cy="32"
          rx="12"
          ry="28"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
        <line x1="4" y1="32" x2="60" y2="32" stroke="#fff" strokeWidth="2" />
        <line x1="10" y1="18" x2="54" y2="18" stroke="#fff" strokeWidth="1.5" />
        <line x1="10" y1="46" x2="54" y2="46" stroke="#fff" strokeWidth="1.5" />
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    title: "It gives you access to World Market.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <rect x="8" y="20" width="28" height="20" rx="4" fill="#7ed321" />
        <rect
          x="28"
          y="26"
          width="28"
          height="20"
          rx="4"
          fill="#5cb800"
          opacity="0.85"
        />
        <path d="M20 30 L36 38 L20 46 Z" fill="#fff" opacity="0.6" />
      </svg>
    ),
    title: "It creates a Image of Responsible Business.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <circle cx="24" cy="22" r="10" fill="#c97cd4" />
        <circle cx="40" cy="26" r="12" fill="#a855c8" />
        <ellipse cx="24" cy="48" rx="14" ry="8" fill="#c97cd4" />
        <ellipse cx="40" cy="52" rx="16" ry="8" fill="#a855c8" />
      </svg>
    ),
    title: "It creates Trust among your prospects and Customers",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <rect
          x="10"
          y="30"
          width="44"
          height="28"
          rx="3"
          fill="#00bcd4"
          opacity="0.2"
          stroke="#00e5ff"
          strokeWidth="1.5"
        />
        <path
          d="M18 30 L32 8 L46 30"
          stroke="#00e5ff"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="48" cy="18" r="8" fill="#00bcd4" />
        <path
          d="M44 18 L47 21 L53 15"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="22" y="40" width="8" height="10" rx="1" fill="#00e5ff" />
        <rect x="34" y="36" width="8" height="14" rx="1" fill="#00e5ff" />
      </svg>
    ),
    title: "It generates Leads and Sales for your company.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <path
          d="M8 12 Q20 4 32 12 Q44 4 56 12 L56 52 Q44 44 32 52 Q20 44 8 52 Z"
          fill="#00bcd4"
          opacity="0.15"
          stroke="#00e5ff"
          strokeWidth="1.5"
        />
        <circle cx="18" cy="22" r="5" fill="#00e5ff" />
        <path
          d="M18 22 Q28 32 38 22"
          stroke="#00e5ff"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="38" cy="22" r="4" fill="#4dd0e1" />
        <path
          d="M12 36 L28 36 M34 36 L50 36"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "It serves as a Digital Brochure and Product Showcase.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <rect
          x="16"
          y="8"
          width="32"
          height="40"
          rx="4"
          fill="none"
          stroke="#00e5ff"
          strokeWidth="2"
        />
        <rect
          x="20"
          y="14"
          width="24"
          height="3"
          rx="1.5"
          fill="#00e5ff"
          opacity="0.7"
        />
        <rect
          x="20"
          y="22"
          width="18"
          height="3"
          rx="1.5"
          fill="#00e5ff"
          opacity="0.5"
        />
        <path
          d="M24 36 L32 28 L40 36"
          stroke="#00bcd4"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="44" cy="44" r="10" fill="#00897b" />
        <path
          d="M39 44 L43 48 L50 40"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "It Makes your Business and You Authentic",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <circle cx="24" cy="24" r="10" fill="#c97cd4" opacity="0.8" />
        <circle cx="40" cy="28" r="12" fill="#a855c8" opacity="0.7" />
        <path
          d="M14 44 Q24 36 34 44 Q44 36 54 44"
          stroke="#c97cd4"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="34" cy="44" r="3" fill="#e040fb" />
      </svg>
    ),
    title: "It give you space to connect with your Digital audiences easily",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <rect
          x="10"
          y="20"
          width="16"
          height="28"
          rx="2"
          fill="#00bcd4"
          opacity="0.3"
          stroke="#00e5ff"
          strokeWidth="1.5"
        />
        <rect
          x="30"
          y="12"
          width="16"
          height="36"
          rx="2"
          fill="#00bcd4"
          opacity="0.5"
          stroke="#00e5ff"
          strokeWidth="1.5"
        />
        <path
          d="M14 34 Q18 28 22 34"
          stroke="#00e5ff"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M34 24 Q38 18 42 24"
          stroke="#00e5ff"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="48" cy="48" r="10" fill="#e91e63" />
        <path
          d="M44 48 L47 51 L53 44"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "It Brings Lots and Lots of Business for you",
  },
];

function WhyWebsiteSection() {
  const { ref } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0533 0%, #2d0a6e 40%, #1a0a4a 70%, #0d1b3e 100%)",
      }}
    >
      {/* Circuit/glow BG decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute right-0 top-0 w-1/2 h-full opacity-20"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="500" cy="150" r="180" stroke="#a855f7" strokeWidth="1" />
          <circle
            cx="500"
            cy="150"
            r="120"
            stroke="#7c3aed"
            strokeWidth="0.5"
          />
          <line
            x1="300"
            y1="150"
            x2="600"
            y2="150"
            stroke="#a855f7"
            strokeWidth="0.5"
          />
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="400"
            stroke="#a855f7"
            strokeWidth="0.5"
          />
          {[30, 60, 90, 120, 150, 180].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="150"
              r={r}
              stroke="#6d28d9"
              strokeWidth="0.3"
              fill="none"
            />
          ))}
          <rect
            x="350"
            y="300"
            width="80"
            height="80"
            rx="8"
            stroke="#a855f7"
            strokeWidth="1"
            fill="#a855f7"
            fillOpacity="0.05"
          />
          <rect
            x="460"
            y="320"
            width="60"
            height="60"
            rx="6"
            stroke="#7c3aed"
            strokeWidth="0.8"
            fill="#7c3aed"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Why Website is Important ?
          </h2>
          {/* Yellow underline */}
          <div className="w-72 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />
          <p className="text-yellow-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            No website ,Means No Business . if you have no website ,there is no
            business in future ,website is your Face of Business .
          </p>
        </div>

        {/* 4-col grid × 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {whyWebsiteItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <p className="text-white font-bold text-base leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why SSL Is Important section ──────────────────────────────────────────────

function WhySSLSection() {
  const { ref } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-16 bg-[#e53935]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: SSL image mockup */}
          <div className="animate-on-scroll-left">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 max-w-md mx-auto lg:mx-0">
              {/* Header */}
              <p className="text-gray-600 text-sm font-medium mb-1">
                Secure your Website with
              </p>
              <h3 className="text-green-600 text-2xl font-extrabold mb-5">
                HTTPS and SSL
              </h3>

              {/* HTTPS row */}
              <p className="text-red-600 text-xs font-bold tracking-widest mb-2">
                HTTPS
              </p>
              <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 mb-4 bg-gray-50">
                <svg
                  className="w-4 h-4 text-green-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-green-700 font-semibold text-sm">
                  Secure
                </span>
                <span className="text-gray-400 mx-1">|</span>
                <span className="text-gray-600 text-sm">
                  https://domain.com
                </span>
              </div>

              {/* HTTP row */}
              <p className="text-red-600 text-xs font-bold tracking-widest mb-2">
                HTTP
              </p>
              <div className="flex items-center gap-2 border-2 border-red-200 rounded-lg px-3 py-2 bg-red-50">
                <svg
                  className="w-4 h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <circle cx="10" cy="10" r="8" strokeWidth="1.5" />
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M10 6v4M10 14h.01"
                  />
                </svg>
                <span className="text-gray-500 text-sm">
                  http://domain-name.com
                </span>
              </div>

              {/* SSL badge */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="bg-green-600 rounded-full p-3 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-extrabold text-gray-800 text-lg leading-none">
                    SSL
                  </p>
                  <p className="text-green-700 font-bold text-xs">SECURITY</p>
                </div>
                <div className="bg-green-500 text-white font-bold text-sm px-4 py-2 rounded-lg shadow">
                  Secure https://
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="animate-on-scroll-right text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Why SSL is important for your website ?? SSL क्यों ज़रूरी है।
            </h2>
            <p className="text-white/90 text-base leading-relaxed mb-4">
              SSL is a Security solution ,which safeguards websites from attacks
              and secure all the payments and transactions made on Website .
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              अपने वेबसाइट को दे सिक्योर कनेक्शन। अपने वेबसाइट की विश्वसनीयता
              बढ़ाये।
            </p>

            {/* Benefits list */}
            <ul className="mt-6 space-y-2">
              {[
                "Protects user data & payments",
                "Boosts Google search rankings",
                "Builds customer trust",
                "Required for online transactions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-white/90 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4 text-white flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface PackagesProps {
  onGetQuote: () => void;
}

export default function Packages({ onGetQuote }: PackagesProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { ref: ref2 } = useScrollAnimation(0.05);

  return (
    <div className="page-enter">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`text-center animate-on-scroll ${isVisible ? "animate-visible" : ""}`}
          >
            <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
              Packages & Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
              Transparent Pricing,{" "}
              <span className="text-[#64ffda] glow-secondary">
                No Surprises
              </span>
            </h1>
            <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
              Choose a plan that fits your business. All plans include 1-month
              basic support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Website Is Important */}
      <WhyWebsiteSection />

      {/* Why SSL Is Important */}
      <WhySSLSection />

      {/* Pricing cards */}
      <section className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref2}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children"
          >
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative bg-[#0a192f] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/5 ${
                  pkg.popular
                    ? "border-2 border-[#64ffda]/40 shadow-lg shadow-[#64ffda]/10 scale-[1.02]"
                    : "border border-[#64ffda]/10 hover:border-[#64ffda]/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#64ffda] text-[#0a192f] text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-[#ccd6f6]">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-[#8892b0]">{pkg.subtitle}</p>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#8892b0]">&#8377;</span>
                    <span className="text-3xl font-extrabold text-[#ccd6f6]">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#8892b0]">
                    {pkg.priceNote}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#8892b0]"
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${pkg.popular ? "text-[#64ffda]" : "text-[#64ffda]/60"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onGetQuote}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                    pkg.popular
                      ? "bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] shadow-lg shadow-[#64ffda]/20"
                      : "bg-[#112240] hover:bg-[#1d3461] text-[#64ffda] border border-[#64ffda]/20"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight size={16} />
                </button>

                <p className="text-xs text-[#8892b0]/60 text-center mt-3">
                  + Monthly Maintenance: &#8377;{pkg.maintenance}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#8892b0] mt-8">
            All plans can be customized for your needs. Prices include 1-month
            basic support.
          </p>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 bg-[#0a192f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-4">
            Not sure which plan?{" "}
            <span className="text-[#64ffda]">We'll help you choose.</span>
          </h2>
          <p className="text-[#8892b0] mb-6">
            Free consultation, no obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-8 py-3.5 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#64ffda]/20"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
