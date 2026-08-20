'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cloud, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustStrip = [
  'AWS Select Tier Partner',
  'Serving startups and SMBs globally',
  'Cloud, DevOps, and FinOps delivery',
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Gradient glow layers - reduced opacity for less washout */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-8%] top-[6%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-blue-300/30 via-cyan-200/20 to-sky-100/15 blur-[80px]" />
        <div className="absolute left-[-4%] top-[28%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-200/25 to-blue-100/15 blur-[70px]" />
        <div className="absolute bottom-0 left-1/2 h-[280px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-t from-cyan-100/40 to-transparent blur-[60px]" />
      </div>

      {/* Dot grid - reduced opacity */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.25] mask-fade-b" />

      {/* Concentric circles */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%]">
        <div className="h-[680px] w-[680px] rounded-full border border-blue-200/70" />
        <div className="absolute inset-10 rounded-full border border-cyan-200/60" />
        <div className="absolute inset-24 rounded-full border border-blue-200/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center pt-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-gradient-to-r from-primary/10 to-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-500" />
            AWS Select Tier Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-center font-display text-5xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          AWS, <span className="text-gradient">done properly.</span>
        </motion.h1>

        {/* Sub - Darkened text for better WCAG contrast */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-700 sm:text-xl font-medium"
        >
          Finsta Softech is an AWS Select Tier Partner. We help startups and SMBs
          build on AWS, run it reliably, and keep the bill under control.
        </motion.p>

        {/* CTA - More prominent styling */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            size="lg"
            className="group h-12 gap-2 rounded-full bg-gradient-to-r from-primary to-cyan-500 px-8 text-base font-bold text-white shadow-primary transition-all hover:scale-105 hover:shadow-lg hover:opacity-95"
          >
            <Link href="/contact">
              Book a free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Center visualization */}
        <div className="relative mt-14 flex items-center justify-center">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.88 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[340px] w-[340px] shrink-0 items-center justify-center sm:h-[400px] sm:w-[400px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 shadow-[0_0_100px_hsl(199_89%_70%/0.35),inset_0_0_50px_hsl(221_83%_80%/0.25)]" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-sm" />
            <div className="absolute inset-6 animate-spin-slow">
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-primary" />
            </div>
            <div className="absolute inset-16 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }}>
              <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-500 shadow-cyan" />
            </div>

            <motion.div
              animate={reduce ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex flex-col items-center gap-3"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-cyan-500 shadow-primary">
                <Cloud className="h-10 w-10 text-white" strokeWidth={1.8} />
              </div>
              <div className="rounded-2xl border border-border bg-white/95 px-4 py-2 text-center shadow-card backdrop-blur-sm">
                <p className="font-display text-sm font-bold text-foreground">
                  AWS Architecture
                </p>
                <p className="text-[11px] text-muted-foreground">Built right, run right</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trustStrip.map((item, i) => (
            <div key={item} className="flex items-center gap-6">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-border" />}
              <span className="text-sm font-semibold text-muted-foreground">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wavy divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" height="60">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(210 60% 96%)" />
        </svg>
      </div>
    </section>
  );
}
