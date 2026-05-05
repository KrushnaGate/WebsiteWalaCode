import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Zap, Clock } from 'lucide-react';

const typingTexts = [
  'MERN Stack Experts',
  'Custom Web Apps',
  'Mobile Applications',
  'E-commerce Solutions',
  'Startup-Friendly Pricing',
];

interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fullText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
          if (currentText.length === fullText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.slice(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#64ffda]/5"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(100,255,218,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-full px-4 py-1.5 mb-6">
              <Shield size={14} className="text-[#64ffda]" />
              <span className="text-[#64ffda] text-xs font-medium">Trusted by 50+ Businesses in Pune</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ccd6f6] leading-[1.1] mb-4">
              Build Your Dream
              <br />
              <span className="text-[#64ffda] glow-secondary">
                Digital Presence
              </span>
              <br />
              with{' '}
              <span className="typing-cursor text-[#64ffda]">
                {currentText}
              </span>
            </h1>

            <p className="text-lg text-[#8892b0] mb-8 max-w-lg leading-relaxed">
              Custom websites, apps & hosting from Pune. Fast, scalable, and affordable for your business.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                to="/packages"
                className="group inline-flex items-center gap-2 bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#64ffda]/20 active:scale-95"
              >
                View Packages
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={onGetQuote}
                className="group inline-flex items-center gap-2 bg-transparent hover:bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
              >
                <Play size={16} />
                Free Consultation
              </button>
            </div>

            <p className="text-sm text-[#8892b0]/60">
              No obligation. Free consultation. Limited slots this month.
            </p>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Zap, text: 'Fast Delivery' },
                { icon: Shield, text: 'Secure & Reliable' },
                { icon: Clock, text: '24hr Response' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-[#8892b0] text-sm">
                  <Icon size={14} className="text-[#64ffda]" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Animated code/tech visual */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Floating code card */}
              <div className="bg-[#112240] border border-[#64ffda]/10 rounded-2xl p-6 animate-float box-glow-secondary">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#64ffda]" />
                </div>
                <pre className="text-sm font-mono text-[#8892b0] leading-relaxed">
                  <code>
{`const yourProject = {
  stack: "MERN",
  frontend: "React.js",
  backend: "Node.js + Express",
  database: "MongoDB",
  hosting: "Hostinger",
  delivery: "Fast & Affordable"
};

// Let's build something amazing
await krishnaGate.build(yourProject);`}
                  </code>
                </pre>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#112240] border border-[#64ffda]/20 rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-[#64ffda] text-sm font-semibold">100% Satisfaction</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#112240] border border-[#64ffda]/20 rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-[#64ffda] text-sm font-semibold">Hostinger Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0a192f"/>
        </svg>
      </div>
    </section>
  );
}
