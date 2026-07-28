'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Eye, Sparkles, Monitor, Smartphone, Globe, Code } from 'lucide-react';
import { PROJECTS, Project } from '@/lib/portfolio-data';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'React & Next.js' | 'Frontend'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0d14]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Real-World Creations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">PROJECTS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            Live production applications built for restaurants, tourism, recreation, and school projects.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'React & Next.js', 'Frontend'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-extrabold shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              {/* Visual Banner Preview */}
              <div className="relative w-full h-56 overflow-hidden bg-black p-5 flex flex-col justify-between">
                {/* Background Gradient Mesh */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageBgGradient} opacity-30 group-hover:opacity-40 transition-opacity`} />

                {/* Simulated Mock Frame Header */}
                <div className="relative z-10 flex items-center justify-between bg-zinc-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[180px]">
                    {project.liveUrl.replace('https://', '')}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Monitor className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Center Badge Title */}
                <div className="relative z-10 text-center py-4">
                  <span className="text-3xl font-black text-white tracking-tighter uppercase drop-shadow-md">
                    {project.title}
                  </span>
                </div>

                {/* Bottom Tech Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/80 text-blue-400 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-white hover:text-black transition-colors"
                    title="Live Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Card Info Content */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between bg-zinc-950/40">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="py-3 px-5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5 text-purple-400" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
