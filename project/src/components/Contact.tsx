import { useState, FormEvent, useEffect } from 'react';
import { Send, Loader2, Phone, Mail, MapPin, MessageCircle, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useAnimations';

const serviceTypes = [
  'Website Development',
  'App Development',
  'Web App (MERN)',
  'Hosting',
  'Maintenance & SEO',
];

interface ContactProps {
  onGetQuote: () => void;
  quoteFormOpen: boolean;
  onCloseQuote: () => void;
}

export default function Contact({ onGetQuote, quoteFormOpen, onCloseQuote }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [botActive, setBotActive] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Activate bot after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setBotActive(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from('contact_messages').insert(formData);
      if (error) throw error;
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const handleCloseForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', service_type: '', message: '' });
    onCloseQuote();
  };

  return (
    <div className="page-enter">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
            <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
              Let's Build <span className="text-[#64ffda] glow-secondary">Something Great</span>
            </h1>
            <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
              Ready to start your project? Get in touch and we'll get back within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-[#112240] relative min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left - Contact info + map */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#0a192f] border border-[#64ffda]/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#ccd6f6] mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                      <Phone size={18} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8892b0]">Phone</p>
                      <p className="font-medium text-[#ccd6f6]">+91 98765 43210</p>
                    </div>
                  </a>
                  <a href="mailto:hello@krishnagateit.com" className="flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                      <Mail size={18} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8892b0]">Email</p>
                      <p className="font-medium text-[#ccd6f6]">hello@krishnagateit.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                      <MessageCircle size={18} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8892b0]">WhatsApp</p>
                      <p className="font-medium text-[#ccd6f6]">+91 98765 43210</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8892b0]">Location</p>
                      <p className="font-medium text-[#ccd6f6]">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#64ffda]/10 h-48">
                <iframe
                  title="Pune Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17005185298!2d73.6981558!3d18.5246165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2bd67d9c67%3A0x5c15a7e4086f0e4c!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right - Form area with bot */}
            <div className="lg:col-span-3 relative">
              <div className="bg-[#0a192f] border border-[#64ffda]/10 rounded-2xl p-6 md:p-8 min-h-[400px] relative overflow-hidden">
                {/* Default state: Bot character */}
                {!quoteFormOpen && (
                  <div className="flex flex-col items-center justify-center h-full min-h-[360px]">
                    {/* Bot SVG - stylish tech boy */}
                    <div className="bot-stand-up mb-6">
                      <svg width="160" height="200" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Headphones band */}
                        <path d="M45 30 Q80 10 115 30" stroke="#64ffda" strokeWidth="3" fill="none" />
                        <circle cx="42" cy="35" r="8" fill="#112240" stroke="#64ffda" strokeWidth="2" />
                        <circle cx="118" cy="35" r="8" fill="#112240" stroke="#64ffda" strokeWidth="2" />

                        {/* Head */}
                        <rect x="45" y="25" width="70" height="55" rx="18" fill="#112240" stroke="#64ffda" strokeWidth="1.5" />
                        {/* Eyes */}
                        <g className="bot-blink">
                          <circle cx="65" cy="48" r="7" fill="#64ffda" />
                          <circle cx="95" cy="48" r="7" fill="#64ffda" />
                          <circle cx="67" cy="46" r="2.5" fill="#0a192f" />
                          <circle cx="97" cy="46" r="2.5" fill="#0a192f" />
                        </g>
                        {/* Smile */}
                        <path d="M68 62 Q80 70 92 62" stroke="#64ffda" strokeWidth="2" fill="none" strokeLinecap="round" />

                        {/* Hoodie body */}
                        <path d="M35 85 L125 85 L125 140 Q125 155 110 155 L50 155 Q35 155 35 140 Z" fill="#112240" stroke="#64ffda" strokeWidth="1.5" />
                        {/* Hoodie string */}
                        <line x1="72" y1="90" x2="72" y2="105" stroke="#64ffda" strokeWidth="1" />
                        <line x1="88" y1="90" x2="88" y2="105" stroke="#64ffda" strokeWidth="1" />
                        {/* Screen on hoodie */}
                        <rect x="55" y="100" width="50" height="30" rx="4" fill="#0a192f" stroke="#64ffda" strokeWidth="1" />
                        <text x="80" y="120" textAnchor="middle" fill="#64ffda" fontSize="10" fontFamily="monospace">Hello!</text>

                        {/* Arms */}
                        <g className="bot-wave">
                          <path d="M35 90 L10 100 L5 95" stroke="#64ffda" strokeWidth="2" fill="none" strokeLinecap="round" />
                          <circle cx="5" cy="93" r="5" fill="#64ffda" />
                        </g>
                        <path d="M125 90 L150 100 L155 95" stroke="#64ffda" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <circle cx="155" cy="93" r="5" fill="#64ffda" />

                        {/* Legs */}
                        <rect x="55" y="155" width="14" height="25" rx="7" fill="#112240" stroke="#64ffda" strokeWidth="1.5" />
                        <rect x="91" y="155" width="14" height="25" rx="7" fill="#112240" stroke="#64ffda" strokeWidth="1.5" />
                        {/* Shoes */}
                        <rect x="50" y="177" width="24" height="10" rx="5" fill="#64ffda" />
                        <rect x="86" y="177" width="24" height="10" rx="5" fill="#64ffda" />

                        {/* Laptop floating near */}
                        <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                          <rect x="125" y="110" width="30" height="20" rx="3" fill="#112240" stroke="#64ffda" strokeWidth="1" />
                          <rect x="128" y="113" width="24" height="12" rx="2" fill="#0a192f" />
                          <text x="140" y="122" textAnchor="middle" fill="#64ffda" fontSize="6" fontFamily="monospace">MERN</text>
                        </g>
                      </svg>
                    </div>

                    {/* Speech bubble */}
                    <div className="bg-[#112240] border border-[#64ffda]/20 rounded-2xl rounded-bl-sm px-6 py-4 max-w-sm text-center relative box-glow-secondary">
                      <p className="text-[#ccd6f6] font-medium mb-1">Hi! I'm KG-Bot.</p>
                      <p className="text-[#8892b0] text-sm mb-3">Need help? Click below to send us a message and I'll make room for the form!</p>
                      <button
                        onClick={onGetQuote}
                        className="bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 pulse-glow"
                      >
                        Open Contact Form
                      </button>
                    </div>
                  </div>
                )}

                {/* Animated form - slides in from left */}
                {quoteFormOpen && (
                  <div className="form-slide-in">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-[#ccd6f6]">Send Us a Message</h3>
                      <button
                        onClick={handleCloseForm}
                        className="p-2 hover:bg-[#112240] rounded-lg transition-colors text-[#8892b0] hover:text-[#64ffda]"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <p className="text-[#8892b0] text-sm mb-6">Enter your details and we'll get back within 24 hours.</p>

                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send size={24} className="text-[#64ffda]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">Message Sent!</h3>
                        <p className="text-[#8892b0] mb-4">We'll get back within 24 hours.</p>
                        <button onClick={handleCloseForm} className="text-[#64ffda] font-medium text-sm hover:text-[#4cc9b0]">
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#8892b0] mb-1">Name *</label>
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3 py-2.5 bg-[#112240] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#8892b0] mb-1">Email *</label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3 py-2.5 bg-[#112240] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                              placeholder="you@business.com"
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#8892b0] mb-1">Phone</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3 py-2.5 bg-[#112240] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#8892b0] mb-1">Service Type</label>
                            <select
                              value={formData.service_type}
                              onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                              className="w-full px-3 py-2.5 bg-[#112240] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all"
                            >
                              <option value="">Select service</option>
                              {serviceTypes.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#8892b0] mb-1">Message</label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full px-3 py-2.5 bg-[#112240] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all resize-none placeholder-[#8892b0]/50"
                            placeholder="Tell us about your project..."
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-[#64ffda] hover:bg-[#4cc9b0] disabled:bg-[#64ffda]/50 text-[#0a192f] py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                        >
                          {submitting ? (
                            <Loader2 size={18} className="animate-spin" />
                          ) : (
                            <Send size={18} />
                          )}
                          Send Quote Request
                        </button>
                        <p className="text-xs text-[#8892b0]/60 text-center">We'll get back within 24 hours. No spam.</p>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Floating bot character - bottom right */}
        <div
          className={`fixed bottom-24 right-6 z-30 transition-all duration-500 ${
            botActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <button
            onClick={onGetQuote}
            className="group relative"
            aria-label="Open contact form"
          >
            <div className="w-16 h-16 bg-[#112240] border-2 border-[#64ffda]/30 rounded-full flex items-center justify-center shadow-lg shadow-[#64ffda]/10 group-hover:border-[#64ffda]/60 group-hover:shadow-[#64ffda]/20 transition-all group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="45" y="25" width="70" height="55" rx="18" fill="#112240" stroke="#64ffda" strokeWidth="3" />
                <circle cx="65" cy="48" r="7" fill="#64ffda" />
                <circle cx="95" cy="48" r="7" fill="#64ffda" />
                <path d="M68 62 Q80 70 92 62" stroke="#64ffda" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M35 85 L125 85 L125 130 Q125 145 110 145 L50 145 Q35 145 35 130 Z" fill="#112240" stroke="#64ffda" strokeWidth="2" />
              </svg>
            </div>
            {/* Speech bubble */}
            <div className="absolute bottom-full right-0 mb-2 bg-[#112240] border border-[#64ffda]/20 rounded-xl px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              <p className="text-[#64ffda] text-xs font-medium">Hi! Need help?</p>
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#64ffda]/20 animate-ping" />
          </button>
        </div>
      </section>
    </div>
  );
}
