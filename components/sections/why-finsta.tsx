'use client';

import { Award, Users, UserCheck, Globe2 } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

const points = [
  {
    icon: Award,
    title: 'AWS Select Tier Partner',
    desc: 'Validated by AWS. Our team holds AWS certifications and our practices are reviewed against AWS standards.',
    iconClass: 'icon-blue',
  },
  {
    icon: Users,
    title: 'Built for lean teams',
    desc: 'We work with startups and SMBs, not enterprises. Engagement models sized for teams where the whole engineering org fits in one room.',
    iconClass: 'icon-cyan',
  },
  {
    icon: UserCheck,
    title: 'Senior delivery',
    desc: 'The people who scope your project are the people who deliver it. No handoff to a junior bench.',
    iconClass: 'icon-emerald',
  },
  {
    icon: Globe2,
    title: 'Global delivery, India-based',
    desc: 'Headquartered in Noida, delivering to clients across time zones.',
    iconClass: 'icon-amber',
  },
];

export function WhyFinsta() {
  return (
    <section className="relative overflow-hidden bg-section-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-400/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why Finsta"
            title={
              <>
                Why teams <span className="text-gradient">work with us.</span>
              </>
            }
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="group flex h-full gap-5 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-float">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${point.iconClass} transition-all duration-300 group-hover:scale-110`}>
                  <point.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
