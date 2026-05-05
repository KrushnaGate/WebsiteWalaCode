import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useAnimations";

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "CEO, ShopEase",
    text: "WebsiteWalaCode IT built our e-commerce site in 3 weeks. Sales are up 200%. Highly recommended!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    name: "Ananya Joshi",
    role: "Founder, EduConnect",
    text: "Fast delivery, clear communication, and affordable pricing. Great for startups.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    name: "Rajesh Kulkarni",
    role: "COO, LogiFlow",
    text: "Our custom MERN dashboard helps us manage orders and inventory smoothly. Excellent work!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    name: "Meera Shah",
    role: "Director, PropRealty",
    text: "Our leads increased by 180% after the new website. The SEO setup was spot on.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    name: "Suresh Patil",
    role: "Manager, HealthTrack",
    text: "The dashboard they built transformed our operations. Real-time analytics at its best.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 animate-on-scroll ${isVisible ? "animate-visible" : ""}`}
        >
          <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            What Our{" "}
            <span className="text-[#64ffda] glow-secondary">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#112240] border border-[#64ffda]/10 rounded-2xl p-8 md:p-12">
            <Quote size={40} className="text-[#64ffda]/20 mb-4" />

            <div className="min-h-[120px]">
              <p className="text-lg md:text-xl text-[#8892b0] leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#64ffda] fill-[#64ffda]"
                    />
                  ),
                )}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#64ffda]/20"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-[#ccd6f6]">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-[#8892b0]">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={prev}
                className="p-2 bg-[#0a192f] rounded-lg border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} className="text-[#8892b0]" />
              </button>
              <div className="flex gap-1.5 mx-auto">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-[#64ffda] w-6" : "bg-[#8892b0]/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 bg-[#0a192f] rounded-lg border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} className="text-[#8892b0]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
