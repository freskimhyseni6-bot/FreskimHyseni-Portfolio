'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, CheckCircle, GraduationCap, MapPin, Phone, Mail, Globe, Code2 } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '@/lib/portfolio-data';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    // Trigger printing or formatted text download
    const cvText = `
==================================================
FRESKIM HYSENI - CURRICULUM VITAE
Frontend Developer & Student
==================================================
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
School: ${PERSONAL_INFO.school}
Age: ${PERSONAL_INFO.age}

ABOUT ME:
${PERSONAL_INFO.aboutText}

CORE SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React, Next.js
- Tools: Git, GitHub, Vercel, Netlify, VS Code
- Concepts: Responsive Web Design, UI/UX Basics, Performance Optimization, SEO Basics

FEATURED PROJECTS:
${PROJECTS.map(p => `- ${p.title} (${p.techStack.join(', ')}): ${p.liveUrl}`).join('\n')}

SERVICES OFFERED:
- Responsive Business Websites
- Landing Pages & Portfolios
- React & Next.js Applications
- Frontend Development & Redesigns
==================================================
`;

    const blob = new Blob([cvText.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Freskim_Hyseni_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl glass-card rounded-2xl border border-slate-700/60 bg-[#0d121f]/95 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
                  <p className="text-xs text-slate-400">Freskim Hyseni • Frontend Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                  title="Print CV"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-lg shadow-blue-600/20 transition-all"
                >
                  {downloaded ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download CV</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CV Content Preview Body */}
            <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-2 text-slate-300 text-sm">
              {/* Profile Card Header */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-blue-500/20 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    Student & Developer
                  </span>
                  <h2 className="text-2xl font-black text-white mt-1">{PERSONAL_INFO.name}</h2>
                  <p className="text-sm text-slate-300 font-medium">{PERSONAL_INFO.title}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                    <span>{PERSONAL_INFO.school}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 border-b border-slate-800 pb-1">
                  Executive Summary
                </h4>
                <p className="leading-relaxed text-slate-300 text-sm">
                  {PERSONAL_INFO.aboutText}
                </p>
              </div>

              {/* Skills Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 border-b border-slate-800 pb-1">
                  Technical Proficiency
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-xs font-semibold text-blue-400 block mb-1">Frontend Development</span>
                    <p className="text-xs text-slate-300">HTML5, CSS3, JavaScript (ES6+), React, Next.js</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-xs font-semibold text-purple-400 block mb-1">Tools & Ecosystem</span>
                    <p className="text-xs text-slate-300">Git, GitHub, Vercel, Netlify, VS Code</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-xs font-semibold text-cyan-400 block mb-1">Core Competencies</span>
                    <p className="text-xs text-slate-300">Responsive Web Design, UI/UX Basics, Optimization, SEO</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-slate-800 pb-1">
                  Featured Live Projects
                </h4>
                <div className="space-y-3">
                  {PROJECTS.map((project) => (
                    <div key={project.id} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{project.title}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                            {project.techStack.join(', ')}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{project.description}</p>
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-medium whitespace-nowrap"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 border-b border-slate-800 pb-1">
                  Education & Training
                </h4>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">Digital School Lipjan</span>
                    <span className="text-xs text-slate-400">Lipjan, Kosovo • Web Development & Next.js Specialization</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                    2024 - Present
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
              <span>Freskim Hyseni Portfolio • 2026</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
