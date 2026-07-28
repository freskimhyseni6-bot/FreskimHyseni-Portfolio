'use client';

import { motion } from 'motion/react';
import { Building2, Sparkles, Briefcase, Atom, Zap, Code2, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES, Service } from '@/lib/portfolio-data';

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Sparkles': return Sparkles;
      case 'Briefcase': return Briefcase;
      case 'Atom': return Atom;
      case 'Zap': return Zap;
      case 'Code2': return Code2;
      case 'RefreshCw': return RefreshCw;
      default: return Code2;
    }
  };

  const handleRequestService = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Dispatch event to pre-fill message in contact form
      setTimeout(() => {
        const event = new CustomEvent('select-service', { detail: serviceTitle });
        window.dispatchEvent(event);
      }, 400);
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Freelance & Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            SERVICES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">SOLUTIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            Professional frontend services for individuals, schools, startups, and small businesses.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: Service, idx: number) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 w-fit mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature bullet points */}
                  <div className="space-y-2.5 mb-6 border-t border-white/10 pt-5">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service CTA */}
                <button
                  onClick={() => handleRequestService(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
