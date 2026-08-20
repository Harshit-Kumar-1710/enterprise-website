'use client';

import { motion } from 'framer-motion';

/** Subtle light-mode radial glow blobs used in hero */
export function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large teal-blue sphere right side */}
      <div className="absolute right-[-5%] top-[8%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-200/40 to-sky-100/30 blur-[80px]" />
      {/* Smaller blue sphere left */}
      <div className="absolute left-[5%] top-[30%] h-[340px] w-[340px] rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-100/30 blur-[70px]" />
      {/* Bottom pink accent */}
      <div className="absolute bottom-0 left-1/2 h-[260px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-t from-sky-100/50 to-transparent blur-[60px]" />
    </div>
  );
}

/** Dot-grid pattern layer */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-dots opacity-60 ${className ?? ''}`}
    />
  );
}

/** Animated floating card orb */
export function FloatingOrb({
  className,
  delay = 0,
  size = 10,
}: {
  className?: string;
  delay?: number;
  size?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-lg ${className ?? ''}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}
