'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code2, Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 12;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0d14] text-white overflow-hidden"
        >
          {/* Background subtle ambient glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo badge */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full bg-[#0d111d] rounded-[14px] flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FH
                </span>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 text-purple-400"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </div>

            <div className="text-center space-y-1">
              <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
                Freskim Hyseni
                <Code2 className="w-4 h-4 text-blue-400" />
              </h1>
              <p className="text-xs text-slate-400 tracking-wide uppercase font-medium">
                Frontend Developer & Student • Lipjan, Kosovo
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50 mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <span className="text-xs font-mono text-slate-400">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
