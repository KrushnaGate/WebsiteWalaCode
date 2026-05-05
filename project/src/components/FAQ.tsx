import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useAnimations';

const faqs = [
  {
    q: 'What is the MERN stack and why should I choose it?',
    a: 'MERN stands for MongoDB, Express.js, React.js, and Node.js. It is a modern, JavaScript-based full-stack framework that enables fast development, scalable architecture, and a seamless user experience. Choosing MERN means your entire application uses one language (JavaScript) across the stack, reducing complexity and development time.',
  },
  {
    q: 'Do you provide hosting on Hostinger?',
    a: 'Yes! We set up and optimize your hosting on Hostinger shared or VPS plans. This includes SSL certificate installation, backup configuration, performance tuning, and basic monitoring to ensure your site stays fast and secure.',
  },
  {
    q: 'How long does a simple website take to build?',
    a: 'A simple template-based website typically takes 1-2 weeks. Custom business websites take 2-3 weeks. E-commerce stores and complex web applications take 4-8 weeks depending on features and complexity. We always provide a clear timeline before starting.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We typically work with a 50% upfront payment and 50% on completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, UPI, and other standard payment methods. All pricing is transparent with no hidden fees.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Absolutely. All plans include 1 month of basic support after launch. We also offer ongoing monthly maintenance packages starting from 5,000/month, which include updates, bug fixes, security patches, and performance monitoring.',
  },
  {
    q: 'Can I get a custom quote for my unique project?',
    a: 'Of course! Every business is different. Just fill out our "Get Free Quote" form or contact us directly, and we will provide a detailed, tailored quote within 24 hours. No obligation, no pressure.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div className="page-enter">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
            <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
              Frequently Asked <span className="text-[#64ffda] glow-secondary">Questions</span>
            </h1>
            <p className="text-[#8892b0] text-lg">
              Got questions? We've got answers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ items */}
      <section className="py-20 bg-[#112240]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 stagger-children">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-[#0a192f] rounded-xl border transition-all duration-300 ${
                  openIndex === i ? 'border-[#64ffda]/30 shadow-md shadow-[#64ffda]/5' : 'border-[#64ffda]/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[#ccd6f6] pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#8892b0] transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-[#64ffda]' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-[#8892b0] leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
