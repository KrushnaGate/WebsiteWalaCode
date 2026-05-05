import { useState, useEffect, FormEvent } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onGetQuote: () => void;
}

export default function ExitIntentPopup({ isOpen, onClose, onGetQuote }: ExitIntentPopupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from('quote_submissions').insert({
        name,
        email,
        phone: '',
        business_name: '',
        website_type: '',
        budget_range: '',
        message: '',
        source: 'exit-intent',
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overlay-backdrop bg-[#0a192f]/80" onClick={onClose}>
      <div
        className="glass bg-[#112240] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-on-scroll-scale animate-visible form-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#4cc9b0]" />

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-[#64ffda]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={22} className="text-[#64ffda]" />
            </div>
            <h3 className="text-lg font-bold text-[#ccd6f6] mb-2">We'll Be In Touch!</h3>
            <p className="text-[#8892b0] text-sm mb-6">Our team will reach out within 24 hours.</p>
            <button onClick={onClose} className="bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-6 py-2.5 rounded-lg font-bold transition-colors text-sm">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 pb-2">
              <h3 className="text-lg font-bold text-[#ccd6f6]">Wait! Get a FREE consultation before you leave.</h3>
              <button onClick={onClose} className="p-1.5 hover:bg-[#0a192f] rounded-lg transition-colors">
                <X size={18} className="text-[#8892b0]" />
              </button>
            </div>
            <div className="px-6 pb-2">
              <p className="text-sm text-[#8892b0]">Get a free project quote tailored to your business needs.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-3">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                placeholder="Your name"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                placeholder="Your email"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#64ffda] hover:bg-[#4cc9b0] disabled:bg-[#64ffda]/50 text-[#0a192f] py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
              >
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
                Send Quote Request
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onGetQuote();
                  }}
                  className="text-sm text-[#64ffda] hover:text-[#4cc9b0] font-medium"
                >
                  Or fill the full quote form
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
