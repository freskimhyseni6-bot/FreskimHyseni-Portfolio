'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareQuote, Plus, Sparkles, X, Send, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/lib/portfolio-data';
import confetti from 'canvas-confetti';

export default function Testimonials() {
  const [list, setList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    companyOrOrg: '',
    content: '',
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) return;

    const reviewObj: Testimonial = {
      id: Date.now().toString(),
      name: newReview.name,
      role: newReview.role || 'Client / Reviewer',
      companyOrOrg: newReview.companyOrOrg || 'Personal Feedback',
      content: newReview.content,
      rating: newReview.rating,
    };

    setList([reviewObj, ...list]);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setNewReview({ name: '', role: '', companyOrOrg: '', content: '', rating: 5 });
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#0a0d14]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Client & Mentor Feedback
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            TESTIMONIALS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">FEEDBACK</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            Feedback from instructors at Digital School Lipjan and project collaborators.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {list.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-blue-400">
                    <MessageSquareQuote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-light italic mb-6">
                  &quot;{item.content}&quot;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light">
                    {item.role} • <span className="text-purple-400 font-medium">{item.companyOrOrg}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Review Trigger */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-blue-400" />
            <span>Leave a Testimonial</span>
          </button>
        </div>
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-lg glass-card rounded-2xl border border-slate-700 bg-[#0d121f] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">Leave a Review</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-slate-400">Your testimonial has been added successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Mentor / Project Owner"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Role / Title</label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="e.g. Lead Developer"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Org</label>
                      <input
                        type="text"
                        value={newReview.companyOrOrg}
                        onChange={(e) => setNewReview({ ...newReview, companyOrOrg: e.target.value })}
                        placeholder="e.g. Digital School"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Review Message *</label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.content}
                      onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                      placeholder="Share your experience working with Freskim..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-blue-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
