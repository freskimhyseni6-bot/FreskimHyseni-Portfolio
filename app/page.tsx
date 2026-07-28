'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import MouseGlow from '@/components/MouseGlow';
import BackToTop from '@/components/BackToTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className={`min-h-screen relative selection:bg-blue-500 selection:text-white ${isLightMode ? 'light' : ''}`}>
      {/* Loading Splash */}
      <LoadingScreen />

      {/* Mouse Ambient Glow */}
      <MouseGlow />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* CV Modal */}
      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />

      {/* Header Bar */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />

      {/* Main Page Layout Sections */}
      <main className="relative z-10">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Stats />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
