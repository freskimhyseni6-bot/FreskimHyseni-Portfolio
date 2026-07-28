'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Sparkles, CheckCircle2, User, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Web Development Project Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    // Listen for custom 'select-service' event from Services component
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          subject: `Inquiry for ${customEvent.detail}`,
          message: `Hi Freskim,\n\nI am interested in your "${customEvent.detail}" service. Please let me know how we can get started!`,
        }));
      }
    };

    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSentSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });

      // Reset after delay
      setTimeout(() => {
        setSentSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Web Development Project Inquiry',
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest"
          >
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tighter"
          >
            LET&apos;S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">SOMETHING AMAZING</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            I&apos;m available to build modern frontend websites for individuals, schools, and small businesses. Feel free to contact me.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Contact Info & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2 pb-4 border-b border-white/10">
                <User className="w-4 h-4 text-blue-400" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Phone & Direct WhatsApp */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-white/20 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">Phone / Mobile</span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct Chat */}
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">WhatsApp Direct</span>
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                      Chat on WhatsApp
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">Direct Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location & School */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">Location & School</span>
                    <span className="text-sm font-bold text-white block">{PERSONAL_INFO.location}</span>
                    <span className="text-xs text-zinc-400 font-light">{PERSONAL_INFO.school}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 relative"
          >
            <h3 className="text-2xl font-black text-white tracking-tight mb-1">Send a Direct Message</h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Fill out the form below to discuss project ideas, freelance inquiries, or questions.
            </p>

            {sentSuccess ? (
              <div className="py-12 text-center space-y-3 bg-black/60 rounded-2xl border border-emerald-500/30 p-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-2xl font-black text-white">Message Delivered!</h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto font-light">
                  Thank you for reaching out, <span className="text-blue-400 font-bold">{formData.name}</span>! Freskim will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+383 ..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your website project or goals..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-white/30 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="animate-spin text-black">⏳ Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
