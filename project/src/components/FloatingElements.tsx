import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}

export function StickyGetQuote({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#64ffda]/20 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
    >
      Get Free Quote
    </button>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-6 z-40 bg-[#112240] hover:bg-[#1d3461] text-[#64ffda] w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-[#64ffda]/20 transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
