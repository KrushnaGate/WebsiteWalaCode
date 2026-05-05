import { useEffect, useRef } from "react";

export default function AboutBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const el = sectionRef.current;
    if (el) {
      const animEls = el.querySelectorAll(
        ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right",
      );
      animEls.forEach((e) => observer.observe(e));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="animate-on-scroll-left relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#64ffda]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-[#64ffda]/10 shadow-2xl shadow-[#0a192f]/50">
              <img
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Website Wala - Build beautiful websites"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a192f]/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#112240] border border-[#64ffda]/20 rounded-xl px-4 py-3 shadow-xl flex items-center gap-2 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-[#64ffda] pulse-glow inline-block" />
              <span className="text-[#ccd6f6] text-sm font-semibold">
                100+ Projects Delivered
              </span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="animate-on-scroll-right">
            {/* Badge */}
            <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#64ffda]/20 tracking-wide">
              ABOUT WEBSITE WALA
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-6 leading-tight">
              We Build Websites That{" "}
              <span className="text-[#64ffda] glow-secondary">
                Build Your Business
              </span>
            </h2>

            <p className="text-[#8892b0] text-lg leading-relaxed mb-5">
              <span className="text-[#ccd6f6] font-semibold">Website Wala</span>{" "}
              is a dynamic web development agency offering tailored digital
              solutions to help your business thrive online.
            </p>

            <p className="text-[#8892b0] text-base leading-relaxed mb-8">
              From responsive web design to powerful CRM systems and
              SEO-optimized platforms, we specialize in transforming your ideas
              into high-performing digital experiences. Our team is driven by
              creativity, innovation, and a commitment to client success.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "5★", label: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#112240] border border-[#64ffda]/10 rounded-xl p-3 text-center hover:border-[#64ffda]/30 transition-colors"
                >
                  <div className="text-xl font-extrabold text-[#64ffda] glow-secondary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8892b0] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#64ffda]/20 hover:shadow-[#64ffda]/40 hover:-translate-y-0.5 group"
            >
              Let's Build Something Great
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
      </div>
    </section>
  );
}
