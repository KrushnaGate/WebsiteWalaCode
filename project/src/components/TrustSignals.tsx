import { Award, Zap, ThumbsUp, IndianRupee, Server, PhoneCall } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '../hooks/useAnimations';

const signals = [
  { icon: Award, label: 'Projects Delivered', value: 50, suffix: '+' },
  { icon: ThumbsUp, label: 'Client Satisfaction', value: 100, suffix: '%' },
  { icon: Zap, label: 'Fast Delivery', value: 0, suffix: '', text: 'Guaranteed' },
  { icon: IndianRupee, label: 'Startup-Friendly', value: 0, suffix: '', text: 'Pricing' },
  { icon: Server, label: 'Hostinger-Optimized', value: 0, suffix: '', text: 'Hosting' },
  { icon: PhoneCall, label: 'Free Consultation', value: 0, suffix: '', text: 'On Call' },
];

function CounterSignal({ value, suffix, text }: { value: number; suffix: string; text?: string }) {
  const { count, ref } = useCountUp(value, 2000);

  if (text) {
    return <span ref={ref} className="text-2xl font-bold text-[#ccd6f6]">{text}</span>;
  }

  return (
    <span ref={ref} className="text-2xl font-bold text-[#ccd6f6]">
      {count}{suffix}
    </span>
  );
}

export default function TrustSignals() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-16 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}
        >
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.label}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#112240] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#64ffda]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#64ffda]/20 transition-colors">
                  <Icon size={22} className="text-[#64ffda]" />
                </div>
                <CounterSignal value={signal.value} suffix={signal.suffix} text={signal.text} />
                <span className="text-xs text-[#8892b0] mt-1 font-medium">{signal.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
