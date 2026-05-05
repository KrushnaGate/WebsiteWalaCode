import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Code2,
  Server,
  Settings,
  Search,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useAnimations";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive websites designed for leads and sales. SEO-friendly, mobile-first, fast-loading.",
    color: "from-[#64ffda] to-[#4cc9b0]",
    detail:
      "We build modern, conversion-focused websites using React.js, Next.js, and the latest web technologies. Every site is mobile-responsive, SEO-optimized, and built to convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "iOS and Android apps built with modern frameworks (React Native or native where needed).",
    color: "from-[#64ffda] to-[#4cc9b0]",
    detail:
      "Cross-platform mobile applications using React Native for cost-effective development. Native performance with a single codebase, push notifications, offline support, and seamless UX.",
  },
  {
    icon: Code2,
    title: "Web App Development (MERN)",
    description:
      "Full-stack MERN applications. Admin panels, dashboards, user roles, APIs.",
    color: "from-[#64ffda] to-[#4cc9b0]",
    detail:
      "Complete full-stack web applications using MongoDB, Express.js, React.js, and Node.js. From admin dashboards to SaaS platforms, we build scalable solutions with robust APIs.",
  },
  {
    icon: Server,
    title: "Hosting & Server Management",
    description:
      "Secure, fast hosting on Hostinger shared/VPS. SSL setup, backups, basic monitoring.",
    color: "from-[#64ffda] to-[#4cc9b0]",
    detail:
      "We set up and optimize your hosting on Hostinger shared or VPS plans. Includes SSL certificates, automated backups, performance tuning, and 99.9% uptime guarantee.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Ongoing site updates, bug fixes, and performance checks to keep your site running smoothly.",
    color: "from-[#64ffda] to-[#4cc9b0]",
    detail:
      "Monthly maintenance packages include security updates, content changes, performance monitoring, bug fixes, and priority support. Keep your digital products in top shape.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Basic SEO setup and optimization to help your business rank higher and get found online.",
    color: "from-[#64ffda] to-[#4cc9b0]",
    detail:
      "On-page SEO, technical SEO audits, keyword research, meta optimization, schema markup, and local SEO for Pune businesses. Get found by your ideal customers.",
  },
];

function ContactBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "Website",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2137] via-[#0a3d5c] to-[#0d5a7a]" />
      {/* Network pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="60" cy="60" r="1.5" fill="#64ffda" />
              <circle cx="0" cy="0" r="1.5" fill="#64ffda" />
              <circle cx="120" cy="0" r="1.5" fill="#64ffda" />
              <circle cx="0" cy="120" r="1.5" fill="#64ffda" />
              <circle cx="120" cy="120" r="1.5" fill="#64ffda" />
              <circle cx="30" cy="90" r="1" fill="#64ffda" />
              <circle cx="90" cy="30" r="1" fill="#64ffda" />
              <line
                x1="60"
                y1="60"
                x2="0"
                y2="0"
                stroke="#64ffda"
                strokeWidth="0.4"
              />
              <line
                x1="60"
                y1="60"
                x2="120"
                y2="0"
                stroke="#64ffda"
                strokeWidth="0.4"
              />
              <line
                x1="60"
                y1="60"
                x2="0"
                y2="120"
                stroke="#64ffda"
                strokeWidth="0.4"
              />
              <line
                x1="60"
                y1="60"
                x2="120"
                y2="120"
                stroke="#64ffda"
                strokeWidth="0.4"
              />
              <line
                x1="60"
                y1="60"
                x2="30"
                y2="90"
                stroke="#64ffda"
                strokeWidth="0.3"
              />
              <line
                x1="60"
                y1="60"
                x2="90"
                y2="30"
                stroke="#64ffda"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + Info */}
          <div className="animate-on-scroll-left">
            {/* Green accent line */}
            <div className="w-16 h-1 bg-[#64ffda] rounded-full mb-6" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Lets Start Making Profit. <span className="text-white/90">"</span>
              <br />
              <span className="text-white">NO WEBSITE MEANS NO BUSINESS</span>
              <span className="text-white/90">"</span>
            </h2>

            {/* Green divider */}
            <div className="w-48 h-0.5 bg-[#64ffda] mb-8" />

            <div className="space-y-3 text-white/80 text-base leading-relaxed">
              <p>
                Call us at :{" "}
                <a
                  href="tel:8920495304"
                  className="text-white font-semibold hover:text-[#64ffda] transition-colors"
                >
                  8920495304
                </a>{" "}
                , Whatsapp us at :{" "}
                <a
                  href="https://wa.me/9540579991"
                  className="text-white font-semibold hover:text-[#64ffda] transition-colors"
                >
                  9540579991
                </a>
                . Get Your Dynamic Business Website today.
              </p>
              <p>
                Visit: Ganpati complex, Haripur kalan, Birla Farms, Dehradun
                Uttarakhand.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-on-scroll-right">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#64ffda]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-[#64ffda]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">
                    Message Sent!
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1.5">
                      Your Name{" "}
                      <span className="text-[#64ffda]">(required)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/90 text-[#0a192f] px-4 py-3 rounded-lg text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1.5">
                      Your Email{" "}
                      <span className="text-[#64ffda]">(required)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/90 text-[#0a192f] px-4 py-3 rounded-lg text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1.5">
                      Your Mobile{" "}
                      <span className="text-[#64ffda]">(required)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      className="w-full bg-white/90 text-[#0a192f] px-4 py-3 rounded-lg text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>

                  {/* Select Service */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1.5">
                      Select Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-white/90 text-[#0a192f] px-4 py-3 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all appearance-none cursor-pointer"
                    >
                      <option value="Website">Website</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Web App (MERN)">Web App (MERN)</option>
                      <option value="Hosting & Server">Hosting & Server</option>
                      <option value="Maintenance & Support">
                        Maintenance & Support
                      </option>
                      <option value="SEO Optimization">SEO Optimization</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] font-extrabold py-4 rounded-lg text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/30 hover:-translate-y-0.5 mt-2"
                  >
                    SEND
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: ref2 } = useScrollAnimation(0.1);

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
              Everything You Need to{" "}
              <span className="text-[#64ffda] glow-secondary">Go Digital</span>
            </h1>
            <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
              From custom websites to full-stack applications, we deliver
              solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Banner — below page header */}
      <ContactBanner />

      {/* Services grid */}
      <section className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref2}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative bg-[#0a192f] border border-[#64ffda]/10 rounded-2xl p-6 hover:border-[#64ffda]/30 hover:shadow-xl hover:shadow-[#64ffda]/5 transition-all duration-300 hover:-translate-y-1 card-shimmer overflow-hidden"
                >
                  {/* Gradient top border on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  <div className="w-14 h-14 bg-[#64ffda]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#64ffda]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={26} className="text-[#64ffda]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <p className="text-[#8892b0]/70 text-xs leading-relaxed mb-4">
                    {service.detail}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-[#64ffda] group-hover:gap-2 transition-all duration-200"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 ml-1 group-hover:ml-2 transition-all"
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
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a192f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-4">
            Need a custom solution?{" "}
            <span className="text-[#64ffda]">Let's talk.</span>
          </h2>
          <p className="text-[#8892b0] mb-6">
            We'll create a tailored plan for your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-8 py-3.5 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#64ffda]/20"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
