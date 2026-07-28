'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Sun, Moon, Menu, X, Download, Phone, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenCvModal: () => void;
  isLightMode: boolean;
  setIsLightMode: (val: boolean) => void;
}

export default function Navbar({ onOpenCvModal, isLightMode, setIsLightMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      setScrolled(window.scrollY > 20);

      // Progress bar calculation
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = (winScroll / height) * 100;
      setScrollProgress(scrolledPct);

      // Active section highlighting
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-slate-800/40">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 group-hover:scale-105 transition-transform">
              FH<span className="text-zinc-500">.</span>
            </div>
            <div className="hidden sm:flex flex-col border-l border-zinc-800/80 pl-3">
              <span className="font-bold text-sm tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                Freskim Hyseni
                <Sparkles className="w-3.5 h-3.5 text-purple-400 opacity-80" />
              </span>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                Lipjan, Kosovo • 15 y/o
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-5 py-2 rounded-full border border-white/10 backdrop-blur-xl">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/20 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, CV, Contact */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle theme"
            >
              {isLightMode ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Download CV */}
            <button
              onClick={onOpenCvModal}
              className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs uppercase font-bold tracking-widest text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>CV</span>
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 border border-white/20 rounded-full text-xs uppercase tracking-[0.15em] font-bold text-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Right Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="p-2 rounded-lg glass-card border border-slate-800 text-slate-300"
              aria-label="Toggle theme"
            >
              {isLightMode ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-card border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-30 p-4 md:hidden"
          >
            <div className="glass-card rounded-2xl border border-slate-800/90 bg-[#0d121f]/95 p-5 shadow-2xl flex flex-col gap-3">
              <div className="flex flex-col gap-1 pb-3 border-b border-slate-800">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-slate-300 hover:bg-slate-800/50'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="flex-1 py-2.5 rounded-xl glass-card border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download CV</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
