'use client';

import { motion } from 'motion/react';
import { GraduationCap, Sparkles, Code2, Rocket, Calendar, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE } from '@/lib/portfolio-data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Growth & Learning
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            EXPERIENCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">JOURNEY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            {PERSONAL_INFO.experienceText}
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 p-2.5 rounded-full bg-black border-2 border-white/20 text-blue-400 shadow-xl">
                    {idx === 0 ? (
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                    ) : idx === 1 ? (
                      <Code2 className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Rocket className="w-4 h-4 text-pink-400" />
                    )}
                  </div>

                  {/* Card Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-white/20 transition-all group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-blue-400 border border-white/10 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mt-1 mb-3">
                        {item.organization}
                      </p>

                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
