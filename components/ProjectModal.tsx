'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Code, CheckCircle, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { Project } from '@/lib/portfolio-data';
import { useState } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'details'>('preview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${project.imageBgGradient}`} />
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                  {project.title}
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono">{project.liveUrl}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white/5 border border-white/10 p-1 rounded-full flex gap-1">
                <button
                  onClick={() => setViewMode('preview')}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    viewMode === 'preview'
                      ? 'bg-white text-black font-extrabold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Live Preview
                </button>
                <button
                  onClick={() => setViewMode('details')}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    viewMode === 'details'
                      ? 'bg-white text-black font-extrabold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Features
                </button>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:scale-105 transition-all"
              >
                <span>Open</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black text-zinc-400 transition-colors ml-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto py-6">
            {viewMode === 'preview' ? (
              <div className="space-y-4">
                {/* Simulated Mock Browser Frame */}
                <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
                  <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex-1 max-w-md mx-4 bg-slate-950 px-3 py-1 rounded-md border border-slate-800 text-xs font-mono text-slate-400 truncate text-center">
                      🔒 {project.liveUrl}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <Monitor className="w-4 h-4 text-slate-400" />
                      <Smartphone className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>

                  {/* Iframe Live View */}
                  <div className="relative w-full h-[420px] bg-slate-900">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-slate-300 font-medium">
                      Built by Freskim Hyseni (Digital School Lipjan)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-2">Project Overview</h4>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Key Architectural Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-2.5"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span className="text-xs text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    Tech Stack & Ecosystem
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold"
                      >
                        ⚡ {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
