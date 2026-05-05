import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useAnimations";

const team = [
  {
    name: "Rahul Sharma",
    role: "Lead MERN Developer",
    tagline: "5+ years in MERN stack",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Priya Deshmukh",
    role: "Frontend Developer",
    tagline: "React & UI specialist",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Amit Kulkarni",
    role: "UI/UX Designer",
    tagline: "Design-driven development",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Sneha Patil",
    role: "DevOps & Hosting Specialist",
    tagline: "Hostinger-certified",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const rotatingServices = [
  "Web Development.",
  "Landing Page Design.",
  "Mobile App Development.",
  "Search Engine Optimisation.",
  "MERN Stack Solutions.",
  "SEO Optimization.",
];

function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = rotatingServices[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayText(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex > current.length) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else {
      // Move to next word
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % rotatingServices.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section className="py-24 bg-[#0a192f] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#64ffda]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#ccd6f6]/80 text-sm font-medium px-5 py-2 rounded-full mb-10">
          <span>🚀</span>
          <span>Empowering Brands with Digital Innovation</span>
        </div>

        {/* Animated headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#ccd6f6] leading-tight mb-6">
          We do{" "}
          <span className="relative inline-block">
            <span
              className="bg-gradient-to-r from-[#64ffda] via-[#7c6fcd] to-[#a78bfa] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {displayText}
            </span>
            {/* Blinking cursor */}
            <span
              className="inline-block w-[3px] h-[0.85em] bg-[#64ffda] ml-1 align-middle"
              style={{
                animation: "blink 1s step-end infinite",
                verticalAlign: "middle",
              }}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#8892b0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          At Website Wala, we're on a mission to design powerful,
          performance-driven websites and digital platforms that elevate your
          business online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c6fcd] to-[#a78bfa] hover:from-[#6c5fc0] hover:to-[#9171f8] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            Contact Us
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
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#ccd6f6] hover:text-[#64ffda] font-semibold px-6 py-3.5 rounded-xl border border-white/10 hover:border-[#64ffda]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Us
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
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1);
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation(0.1);

  return (
    <div className="page-enter">
      {/* Page header */}
      <section className="pt-32 pb-10 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`text-center animate-on-scroll ${isVisible ? "animate-visible" : ""}`}
          >
            <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
              Building Digital Products{" "}
              <span className="text-[#64ffda] glow-secondary">
                You Can Be Proud Of
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Animated Hero — below page header */}
      <AboutHero />

      {/* Story section */}
      <section className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref2}
            className={`grid lg:grid-cols-2 gap-12 items-center animate-on-scroll ${isVisible2 ? "animate-visible" : ""}`}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-6">
                Our <span className="text-[#64ffda]">Story</span>
              </h2>
              <p className="text-[#8892b0] mb-4 leading-relaxed">
                Founded in Pune in 2026, WebsiteWalaCode helps businesses build
                scalable websites and apps using modern MERN stack and reliable
                hosting.
              </p>
              <p className="text-[#8892b0] mb-6 leading-relaxed">
                We started because we saw too many small businesses stuck with
                outdated, slow websites. We help them launch fast, modern, and
                conversion-focused digital products they can be proud of.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "MERN Stack",
                  "React Native",
                  "Hostinger",
                  "SEO",
                  "UI/UX",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda] text-sm px-3 py-1.5 rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] border border-[#64ffda]/20 rounded-2xl p-8 box-glow-secondary">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "50+", label: "Projects Delivered" },
                    { number: "30+", label: "Happy Clients" },
                    { number: "5+", label: "Years Experience" },
                    { number: "24hr", label: "Response Time" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-[#0a192f]/50 rounded-xl"
                    >
                      <div className="text-3xl font-extrabold text-[#64ffda] glow-secondary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-[#8892b0] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#64ffda]/5 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#64ffda]/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref3}
            className={`animate-on-scroll ${isVisible3 ? "animate-visible" : ""}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-3">
                Meet Our <span className="text-[#64ffda]">Team</span>
              </h2>
              <p className="text-[#8892b0] max-w-lg mx-auto">
                A dedicated team of professionals committed to delivering
                excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group bg-[#112240] border border-[#64ffda]/10 rounded-2xl p-6 text-center hover:border-[#64ffda]/30 hover:shadow-xl hover:shadow-[#64ffda]/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#64ffda]/20 group-hover:border-[#64ffda]/50 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-bold text-[#ccd6f6]">{member.name}</h4>
                  <p className="text-[#64ffda] text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-[#8892b0] text-xs mt-1">
                    {member.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials on About page */}
      <TestimonialsSection />
    </div>
  );
}

function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const testimonials = [
    {
      name: "Vikram Mehta",
      role: "CEO, ShopEase",
      text: "WebsiteWalaCode IT built our e-commerce site in 3 weeks. Sales are up 200%. Highly recommended!",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "Ananya Joshi",
      role: "Founder, EduConnect",
      text: "Fast delivery, clear communication, and affordable pricing. Great for startups.",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "Rajesh Kulkarni",
      role: "COO, LogiFlow",
      text: "Our custom MERN dashboard helps us manage orders and inventory smoothly. Excellent work!",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "Meera Shah",
      role: "Director, PropRealty",
      text: "Our leads increased by 180% after the new website. The SEO setup was spot on.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  return (
    <section className="py-20 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "animate-visible" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-3">
              What Our <span className="text-[#64ffda]">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#0a192f] border border-[#64ffda]/10 rounded-2xl p-6 hover:border-[#64ffda]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#64ffda] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#64ffda]/20"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-[#ccd6f6] text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#8892b0]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
