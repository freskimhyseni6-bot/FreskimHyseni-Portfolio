'use client';

import { Code2, Github, Linkedin, Mail, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-black text-white text-base tracking-tighter">
                FH
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight text-white uppercase">
                  Freskim Hyseni
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                  Frontend Developer • Digital School Lipjan
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Creating clean, fast, modern, and visually appealing web experiences from Lipjan, Kosovo. Specializing in HTML, CSS, JavaScript, React, and Next.js.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium uppercase tracking-wider">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tech</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Me</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Direct Reach</h4>
            <div className="space-y-2 text-xs text-zinc-400 font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-white">{PERSONAL_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
                Lipjan, Kosovo • Digital School Lipjan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>© 2026 Freskim Hyseni. Built with Next.js, React, TypeScript, and Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
