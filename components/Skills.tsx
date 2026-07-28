'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Sparkles, Terminal, Smartphone, Layout, Zap, GitBranch, Github, Cloud, Globe, Palette, FileCode, Atom, Gauge, Search } from 'lucide-react';
import { SKILLS, Skill } from '@/lib/portfolio-data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Tools' | 'Other'>('All');

  const categories = ['All', 'Frontend', 'Tools', 'Other'] as const;

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code2;
      case 'Palette': return Palette;
      case 'FileCode': return FileCode;
      case 'Atom': return Atom;
      case 'Zap': return Zap;
      case 'GitBranch': return GitBranch;
      case 'Github': return Github;
      case 'Cloud': return Cloud;
      case 'Globe': return Globe;
      case 'Terminal': return Terminal;
      case 'Smartphone': return Smartphone;
      case 'Layout': return Layout;
      case 'Gauge': return Gauge;
      case 'Search': return Search;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0a0d14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Technical Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">STACK & SKILLS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            A breakdown of my technical stack, tools, and modern web development methodologies.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black font-extrabold shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat === 'All' ? 'All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill: Skill) => {
            const Icon = getSkillIcon(skill.iconName);
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-white/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-5 line-clamp-2 font-light">
                  {skill.description}
                </p>

                {/* Animated Progress Bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
