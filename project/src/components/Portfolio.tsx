import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useAnimations';

const projects = [
  {
    name: 'ShopEase E-commerce',
    category: 'E-commerce',
    result: 'Sales up 200% in 3 months',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
    problem: 'Client had no online presence and was losing sales to competitors.',
    solution: 'Built a full MERN e-commerce store with Razorpay integration, inventory management, and user accounts.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'HealthTrack Dashboard',
    category: 'Dashboard',
    result: 'Increased efficiency by 150%',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Chart.js'],
    problem: 'Healthcare provider needed a centralized system for patient data and analytics.',
    solution: 'Custom MERN dashboard with role-based access, real-time analytics, and automated reporting.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'FoodieApp Mobile',
    category: 'App',
    result: '10K+ downloads in first month',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    problem: 'Restaurant chain needed a mobile app for food ordering and delivery tracking.',
    solution: 'Cross-platform React Native app with real-time order tracking, push notifications, and payment integration.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-iphone-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'EduConnect Platform',
    category: 'Web App',
    result: '5,000+ active students',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'],
    problem: 'EdTech startup needed a scalable learning management system.',
    solution: 'Full-stack MERN platform with video streaming, quiz engine, progress tracking, and admin panel.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'PropRealty Website',
    category: 'Website',
    result: 'Leads increased by 180%',
    tech: ['React.js', 'Tailwind CSS', 'Node.js'],
    problem: "Real estate agency had an outdated website that wasn't generating leads.",
    solution: 'Modern, SEO-optimized website with property listings, search filters, and lead capture forms.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'LogiFlow Admin Panel',
    category: 'Dashboard',
    result: 'Reduced manual work by 70%',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Socket.io'],
    problem: 'Logistics company needed real-time fleet tracking and order management.',
    solution: 'MERN admin panel with live GPS tracking, automated dispatch, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/163729/belgium-antwerp-shipping-container-163729.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'StyleBoutique Store',
    category: 'E-commerce',
    result: 'Revenue up 300% in 6 months',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    problem: 'Fashion retailer needed a modern online store with personalized recommendations.',
    solution: 'AI-powered e-commerce platform with smart product suggestions, wishlist, and seamless checkout.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'MediCare Portal',
    category: 'Web App',
    result: 'Patient wait time reduced 40%',
    tech: ['React.js', 'Express.js', 'PostgreSQL', 'WebRTC'],
    problem: 'Hospital needed a telemedicine platform for remote consultations.',
    solution: 'HIPAA-compliant web app with video calls, appointment scheduling, and electronic prescriptions.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-health-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'FinTrack Dashboard',
    category: 'Dashboard',
    result: 'Reporting time cut by 80%',
    tech: ['React.js', 'Node.js', 'MongoDB', 'D3.js'],
    problem: 'Financial firm needed real-time portfolio tracking and risk analytics.',
    solution: 'Interactive dashboard with live market data, portfolio visualization, and automated risk reports.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const categories = ['All', 'Website', 'App', 'Dashboard', 'E-commerce', 'Web App'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { ref: ref2 } = useScrollAnimation(0.05);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="page-enter">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
            <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#64ffda]/20">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
              Projects That <span className="text-[#64ffda] glow-secondary">Deliver Results</span>
            </h1>
            <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
              Real solutions for real businesses. See how we've helped our clients grow.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#64ffda] text-[#0a192f] shadow-md shadow-[#64ffda]/20'
                    : 'bg-[#0a192f] text-[#8892b0] hover:text-[#64ffda] border border-[#64ffda]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div ref={ref2} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {filtered.map((project) => (
              <div
                key={project.name}
                className="group relative bg-[#0a192f] border border-[#64ffda]/10 rounded-2xl overflow-hidden hover:border-[#64ffda]/30 hover:shadow-xl hover:shadow-[#64ffda]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1 text-[#64ffda] text-sm font-medium bg-[#0a192f]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#64ffda]/20">
                      <ExternalLink size={14} />
                      View Case Study
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-[#ccd6f6] mb-1">{project.name}</h3>
                  <p className="text-sm text-[#64ffda] font-medium">{project.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overlay-backdrop bg-[#0a192f]/80" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-[#112240] border border-[#64ffda]/20 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-on-scroll-scale animate-visible"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0a192f]/40" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-[#0a192f]/60 hover:bg-[#0a192f]/80 text-[#64ffda] p-1.5 rounded-lg transition-colors border border-[#64ffda]/20"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block bg-[#64ffda]/10 text-[#64ffda] text-xs font-semibold px-2.5 py-1 rounded-md mb-3">
                {selectedProject.category}
              </span>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{selectedProject.name}</h3>
              <p className="text-[#64ffda] font-semibold text-sm mb-4">{selectedProject.result}</p>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-[#ccd6f6] mb-1">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="bg-[#0a192f] text-[#8892b0] text-xs px-2.5 py-1 rounded-md font-medium border border-[#64ffda]/10">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-[#ccd6f6] mb-1">The Problem</h4>
                <p className="text-sm text-[#8892b0]">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#ccd6f6] mb-1">Our Solution</h4>
                <p className="text-sm text-[#8892b0]">{selectedProject.solution}</p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#64ffda] hover:bg-[#4cc9b0] text-[#0a192f] py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Start a Similar Project
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
