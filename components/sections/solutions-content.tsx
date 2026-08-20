'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudCog,
  Server,
  GitBranch,
  PiggyBank,
  MonitorCog,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: CloudCog,
    iconClass: 'icon-blue',
    title: 'AWS Migration & Modernisation',
    headline: 'Move to AWS with a plan, not a hope.',
    body: "Most migrations fail on the parts nobody scoped — data transfer windows, dependency chains, the one legacy service nobody documented. We start with an assessment of what you're running today, map dependencies, and build a migration plan with sequencing and rollback built in.",
    included: [
      'Current-state infrastructure assessment',
      'Migration strategy and workload sequencing',
      'Execution with defined downtime windows',
      'Post-migration validation and optimisation',
    ],
    bestFor: 'Teams on legacy hosting, on-prem infrastructure, or another cloud provider.',
    cta: { label: 'Get an AWS Migration Assessment', href: '/contact?service=AWS+migration' },
  },
  {
    icon: Server,
    iconClass: 'icon-cyan',
    title: 'Cloud Architecture & Well-Architected Design',
    headline: 'Build it right the first time.',
    body: 'Architecture decisions made in month one determine what you can do in year two. We design AWS environments against the AWS Well-Architected Framework — covering reliability, security, performance, cost, and operational excellence — so growth doesn\'t require a rebuild.',
    included: [
      'Well-Architected review of existing environments',
      'Reference architecture design',
      'Multi-account and networking strategy',
      'Security and compliance foundations',
    ],
    bestFor: 'Teams scaling past their first production setup.',
    cta: { label: 'Request a Cloud Security Assessment', href: '/contact?service=Cloud+architecture+%2F+Well-Architected+review' },
  },
  {
    icon: GitBranch,
    iconClass: 'icon-sky',
    title: 'DevOps & Automation',
    headline: 'Deployments should be boring.',
    body: "If shipping requires a checklist and someone's undivided attention, it's costing you more than you think. We build CI/CD pipelines, define infrastructure as code, and automate the deployment path so releasing is routine.",
    included: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Container and Kubernetes workloads',
      'Monitoring, logging, and alerting setup',
    ],
    bestFor: 'Teams deploying manually or fighting their own pipeline.',
    cta: { label: 'Book a free consultation', href: '/contact?service=DevOps+%26+automation' },
  },
  {
    icon: PiggyBank,
    iconClass: 'icon-emerald',
    title: 'Cloud Cost Optimisation & FinOps',
    headline: 'The cheapest AWS resource is the one you delete.',
    body: "Cloud bills grow quietly — an oversized instance here, a forgotten snapshot there, a default retention policy nobody reviewed. We audit what you're actually running, find the waste, and put practices in place so the bill stays honest.",
    included: [
      'Full cost and usage audit',
      'Rightsizing and resource cleanup',
      'Reserved Instance and Savings Plan strategy',
      'Ongoing FinOps practice and cost reporting',
    ],
    bestFor: "Teams whose AWS bill is growing faster than their usage.",
    cta: { label: 'Review My AWS Bill', href: '/contact?service=Cloud+cost+optimisation' },
  },
  {
    icon: MonitorCog,
    iconClass: 'icon-amber',
    title: 'Managed Cloud Operations',
    headline: "Someone watching, so you don't have to.",
    body: "Running infrastructure is a full-time job that isn't your product. We handle monitoring, patching, backups, and incident response — so your engineers stay on the roadmap.",
    included: [
      '24/7 monitoring and alerting',
      'Patch management and updates',
      'Backup and disaster recovery',
      'Incident response and escalation',
    ],
    bestFor: 'Teams without dedicated infrastructure headcount.',
    cta: { label: 'Plan 24×7 AWS Managed Support', href: '/contact?service=Managed+cloud+operations' },
  },
];

export function SolutionsContent() {
  return (
    <section className="relative bg-white pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Page heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              What we build, run, and{' '}
              <span className="text-gradient">optimise.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Five AWS services, delivered end to end for startups and SMBs.
            </p>
          </div>
        </Reveal>

        {/* Solutions */}
        <div className="mt-16 space-y-8">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-300 hover:shadow-float">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left: icon + title */}
                  <div className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:col-span-4">
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${s.iconClass}`}>
                      <s.icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                      {s.title}
                    </h2>
                  </div>

                  {/* Right: content */}
                  <div className="p-8 lg:col-span-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                      {s.headline}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>

                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        What&apos;s included
                      </p>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {s.included.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            <span className="text-sm font-medium text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 rounded-xl bg-secondary/60 px-4 py-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-foreground">Best for: </span>
                        {s.bestFor}
                      </p>
                    </div>

                    {/* Service-specific CTA */}
                    <div className="mt-6">
                      <Button
                        asChild
                        size="sm"
                        className="group gap-1.5 rounded-full bg-gradient-to-r from-primary to-cyan-500 px-5 text-sm font-semibold shadow-primary hover:opacity-90"
                      >
                        <Link href={s.cta.href}>
                          {s.cta.label}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
