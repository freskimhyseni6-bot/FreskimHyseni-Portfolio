'use client';

import { motion } from 'motion/react';
import { User, GraduationCap, MapPin, Phone, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';

export default function About() {
  const highlights = [
    { title: "Age & Growth", value: "15 Years Old", icon: User, color: "text-blue-400" },
    { title: "Education", value: "Digital School Lipjan", icon: GraduationCap, color: "text-purple-400" },
    { title: "Location", value: "Lipjan, Kosovo", icon: MapPin, color: "text-emerald-400" },
    { title: "Direct Phone", value: "+383 45 109 733", icon: Phone, color: "text-cyan-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Discover My Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">FRESKIM HYSENI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            A passionate 15-year-old student developer dedicated to crafting world-class frontend experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-white">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Frontend Developer & Student</h3>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-0.5">Digital School Lipjan • Kosovo</p>
              </div>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              {PERSONAL_INFO.aboutText}
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              I am a young frontend developer who enjoys solving problems, learning new technologies, and turning creative ideas into fast, responsive, and modern websites. I am constantly improving my skills through hands-on experience and real-world projects.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Passionate about clean UI & UX",
                "Strong foundation in React & Next.js",
                "Responsive Mobile-First layout mindset",
                "Dedicated to continuous self-learning"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-white/20 transition-all group flex items-center gap-4"
                >
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                      {item.title}
                    </span>
                    <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
