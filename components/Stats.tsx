'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2, Heart, Award, Cpu } from 'lucide-react';
import { STATS } from '@/lib/portfolio-data';

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const getStatIcon = (index: number) => {
    switch (index) {
      case 0: return Award;
      case 1: return Code2;
      case 2: return Cpu;
      case 3: return Heart;
      default: return Code2;
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          onViewportEnter={() => setHasAnimated(true)}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, idx) => {
            const Icon = getStatIcon(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center hover:border-white/20 transition-all group"
              >
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-blue-400 w-fit mx-auto mb-4 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-1">
                  {hasAnimated ? (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>

                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                  {stat.label}
                </h3>

                <p className="text-[11px] text-zinc-400 font-light leading-tight">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = Math.max(1, Math.floor(target / (duration / 30)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}
