import { useState, useEffect, FormEvent } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const websiteTypes = [
  'Single-Page Website',
  'Template Website',
  'Business Website',
  'E-commerce Website',
  'Custom Web App',
];

const budgetRanges = [
  'Under 50,000',
  '50,000 - 1,00,000',
  '1,00,000 - 2,00,000',
  '2,00,000+',
];

interface ScrollPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScrollPopup({ isOpen, onClose }: ScrollPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_name: '',
    website_type: '',
    budget_range: '',
    message: '',
  });
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
        ...formData,
        source: 'popup',
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
        className="glass bg-[#112240] rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-on-scroll-scale animate-visible form-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={24} className="text-[#64ffda]" />
            </div>
            <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">Quote Request Sent!</h3>
            <p className="text-[#8892b0] mb-6">We'll get back to you within 24 hours with a tailored quote.</p>
            <button onClick={onClose} className="bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] px-6 py-2.5 rounded-lg font-bold transition-colors">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-[#64ffda]/10">
              <div>
                <h3 className="text-xl font-bold text-[#ccd6f6]">Start Your Website Today</h3>
                <p className="text-sm text-[#8892b0] mt-1">Get a free project quote tailored to your business in 24 hours.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-[#0a192f] rounded-lg transition-colors">
                <X size={20} className="text-[#8892b0]" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8892b0] mb-1">Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8892b0] mb-1">Phone *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892b0] mb-1">Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                  placeholder="you@business.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892b0] mb-1">Business Name</label>
                <input
                  type="text"
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all placeholder-[#8892b0]/50"
                  placeholder="Your business name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8892b0] mb-1">Website Type</label>
                  <select
                    value={formData.website_type}
                    onChange={(e) => setFormData({ ...formData, website_type: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all"
                  >
                    <option value="">Select type</option>
                    {websiteTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8892b0] mb-1">Budget Range</label>
                  <select
                    value={formData.budget_range}
                    onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all"
                  >
                    <option value="">Select budget</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892b0] mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2.5 bg-[#0a192f] border border-[#64ffda]/10 rounded-lg text-sm text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all resize-none placeholder-[#8892b0]/50"
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
                Get My Website Quote
              </button>
              <p className="text-xs text-[#8892b0]/60 text-center">No spam. We'll get back within 24 hours.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
