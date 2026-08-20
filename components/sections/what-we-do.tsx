'use client';

import Link from 'next/link';
import {
  CloudCog,
  Server,
  GitBranch,
  PiggyBank,
  MonitorCog,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

const services = [
  {
    icon: CloudCog,
    title: 'AWS Migration',
    subtitle: 'Move to AWS without the drama',
    desc: 'Assessment, migration plan, and execution — lifting existing workloads onto AWS with minimal downtime and a clear rollback path.',
    iconClass: 'icon-blue',
  },
  {
    icon: Server,
    title: 'Cloud Architecture',
    subtitle: 'Infrastructure that scales with you',
    desc: 'Well-architected AWS environments designed for where your product is going, not just where it is today.',
    iconClass: 'icon-cyan',
  },
  {
    icon: GitBranch,
    title: 'DevOps & Automation',
    subtitle: 'Ship faster, break less',
    desc: 'CI/CD pipelines, infrastructure as code, and automated deployments so releases stop being events.',
    iconClass: 'icon-sky',
  },
  {
    icon: PiggyBank,
    title: 'Cloud Cost Optimisation',
    subtitle: "Stop paying for what you don't use",
    desc: 'FinOps practices, rightsizing, and continuous cost review. Most startups overspend on cloud — we find where.',
    iconClass: 'icon-emerald',
  },
  {
    icon: MonitorCog,
    title: 'Managed Cloud Operations',
    subtitle: 'Your AWS environment, watched',
    desc: 'Monitoring, patching, backups, and incident response. An extension of your team, not a ticket queue.',
    iconClass: 'icon-amber',
  },
];

export function WhatWeDo() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Cloud services built for teams{' '}
                <span className="text-gradient">without a cloud team.</span>
              </>
            }
            description="Five things we do, end to end."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature card — first one spans 2 columns */}
          <StaggerItem className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/15 to-cyan-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-500 shadow-primary">
                  <CloudCog className="h-7 w-7 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {services[0].title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {services[0].subtitle}
                </p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {services[0].desc}
                </p>
              </div>
              <Link href="/solutions" className="relative mt-6 flex items-center gap-2 text-sm font-bold text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </StaggerItem>

          {services.slice(1).map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-float">
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.iconClass} transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {service.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
