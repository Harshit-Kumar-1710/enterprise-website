'use client';

import { Award, MapPin, Globe2, UserCheck, FileCheck, Ruler, MessageSquare } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

const howWeWork = [
  {
    icon: UserCheck,
    title: 'Senior people, start to finish',
    desc: 'The engineer who scopes your project is the engineer who delivers it. No bait-and-switch to a junior bench after the contract is signed.',
    iconClass: 'icon-blue',
  },
  {
    icon: Ruler,
    title: 'Scoped to your size',
    desc: 'Engagements sized for lean teams. Fixed-scope projects, ongoing support, or something in between — we\'ll tell you which one you actually need.',
    iconClass: 'icon-cyan',
  },
  {
    icon: MessageSquare,
    title: 'Plain answers',
    desc: "We'll tell you when a project isn't worth doing. Being useful matters more than being billable.",
    iconClass: 'icon-emerald',
  },
  {
    icon: FileCheck,
    title: 'Built on AWS standards',
    desc: 'Our practices follow the AWS Well-Architected Framework and our partner status is reviewed by AWS.',
    iconClass: 'icon-amber',
  },
];

const credentials = [
  {
    icon: Award,
    label: 'AWS Select Tier Partner',
    value: 'Validated AWS partner status, with certified engineers and reviewed delivery practices.',
    iconClass: 'icon-blue',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Noida, Uttar Pradesh, India',
    iconClass: 'icon-cyan',
  },
  {
    icon: Globe2,
    label: 'Coverage',
    value: 'Delivery to clients across India, APAC, Middle East, and beyond.',
    iconClass: 'icon-emerald',
  },
];

export function AboutContent() {
  return (
    <section className="relative bg-white pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Page heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              An AWS partner built for the teams{' '}
              <span className="text-gradient">AWS partners usually skip.</span>
            </h1>
          </div>
        </Reveal>

        {/* Opening copy */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Finsta Softech is an AWS Select Tier Partner headquartered in Noida,
              India, working with startups and SMBs globally.
            </p>
            <p>
              Most cloud consultancies are structured for enterprise budgets and
              enterprise timelines. That leaves a gap: growing companies who need
              real AWS expertise but can&apos;t absorb a six-month engagement or a
              six-figure retainer.
            </p>
            <p>
              That gap is where we work. We take on the cloud work — architecture,
              migration, DevOps, cost control, day-to-day operations — so small
              engineering teams can stay focused on the product their customers
              actually pay for.
            </p>
          </div>
        </Reveal>

        {/* How we work */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              How we work
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {howWeWork.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group flex h-full gap-5 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-float">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconClass} transition-all duration-300 group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Credentials */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Credentials
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {credentials.map((cred) => (
              <StaggerItem key={cred.label}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-card">
                  {cred.label === 'AWS Select Tier Partner' ? (
                    <img
                      src="/images/image copy 3.png"
                      alt="AWS Select Tier Partner badge for Finsta Softech"
                      className="mb-5 w-full rounded-xl"
                    />
                  ) : (
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cred.iconClass}`}>
                      <cred.icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                  )}
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    {cred.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {cred.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
