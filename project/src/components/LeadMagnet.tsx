import { useState, FormEvent } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ name, email });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#0a192f] to-[#112240] border-y border-[#64ffda]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
          <Download size={32} className="text-[#64ffda] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-3">
            Free Checklist: 10 Things to Ask Before Hiring a Web Developer
          </h2>
          <p className="text-[#8892b0] mb-8 max-w-lg mx-auto">
            Avoid costly mistakes. Download our free checklist and make the right choice for your business.
          </p>

          {submitted ? (
            <div className="bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-[#64ffda] font-semibold">Check your email for the download link!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl text-sm bg-[#0a192f] border border-[#64ffda]/10 text-[#ccd6f6] placeholder-[#8892b0]/50 focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all"
                placeholder="Your name"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl text-sm bg-[#0a192f] border border-[#64ffda]/10 text-[#ccd6f6] placeholder-[#8892b0]/50 focus:ring-2 focus:ring-[#64ffda]/30 focus:border-[#64ffda]/30 transition-all"
                placeholder="Your email"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#64ffda] hover:bg-[#4cc9b0] disabled:bg-[#64ffda]/50 text-[#0a192f] px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                Get It Free
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
