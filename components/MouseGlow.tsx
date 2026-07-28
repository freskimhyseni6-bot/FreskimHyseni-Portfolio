'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: fine)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.07), rgba(139, 92, 246, 0.05) 40%, transparent 80%)`,
      }}
    />
  );
}
