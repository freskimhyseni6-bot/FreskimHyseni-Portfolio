'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Sparkles, Download, Phone, MapPin, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';

// Typing animation roles
const ROLES = [
  "Frontend Developer",
  "15-Year-Old Student",
  "Digital School Lipjan Student",
  "React & Next.js Enthusiast",
  "UI/UX Craftsperson"
];

interface HeroProps {
  onOpenCvModal: () => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-block px-3.5 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest shadow-lg shadow-blue-500/10">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
                Digital School Lipjan Student
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] uppercase font-bold tracking-widest">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                15 Years Old
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] uppercase font-bold tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Lipjan, Kosovo
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                FRESKIM<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  HYSENI
                </span>
              </h1>

              {/* Dynamic Typing Subheadline */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-zinc-200">
                  {displayText}
                </span>
                <span className="animate-pulse text-purple-400 font-extrabold text-2xl sm:text-3xl ml-1">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              A 15-year-old <span className="text-white font-medium">Frontend Developer</span> from Kosovo. I build fast, responsive, and visually modern web experiences using React and Next.js.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer shadow-xl shadow-white/10"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="px-6 py-4 bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Tech Chips Row */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-400 font-medium">
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Tech Stack:</span>
              {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md glass-card rounded-3xl p-6 border border-slate-700/60 shadow-2xl bg-gradient-to-b from-[#0f172a]/90 to-[#0b0f19]/90">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">freskim-hyseni.dev</span>
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>

              {/* Code Snippet / Visual Avatar Card */}
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500">&#47;&#47; Personal Profile</div>
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</div>
                  <div className="pl-4"><span className="text-indigo-300">name</span>: <span className="text-emerald-300">&quot;Freskim Hyseni&quot;</span>,</div>
                  <div className="pl-4"><span className="text-indigo-300">age</span>: <span className="text-amber-300">15</span>,</div>
                  <div className="pl-4"><span className="text-indigo-300">location</span>: <span className="text-emerald-300">&quot;Lipjan, Kosovo&quot;</span>,</div>
                  <div className="pl-4"><span className="text-indigo-300">school</span>: <span className="text-emerald-300">&quot;Digital School Lipjan&quot;</span>,</div>
                  <div className="pl-4"><span className="text-indigo-300">skills</span>: [<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;JS&quot;</span>],</div>
                  <div className="pl-4"><span className="text-indigo-300">passion</span>: <span className="text-emerald-300">&quot;100%&quot;</span></div>
                  <div>&#125;;</div>
                </div>

                {/* Interactive Status Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Completed</span>
                    <span className="text-2xl font-black text-white">4+ Projects</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Location</span>
                    <span className="text-lg font-bold text-blue-400 truncate block">Lipjan, KS</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Badges */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl glass-card border border-blue-500/40 text-blue-400 shadow-xl animate-float">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl glass-card border border-purple-500/40 text-purple-400 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
