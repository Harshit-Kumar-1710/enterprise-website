'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

type ClosingCTAProps = {
  heading: string;
  body: string;
  buttonText?: string;
  buttonHref?: string;
};

export function ClosingCTA({
  heading,
  body,
  buttonText = 'Book a free consultation',
  buttonHref = '/contact',
}: ClosingCTAProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-10 text-center shadow-card sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/15 to-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/10 to-primary/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {body}
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="group gap-2 rounded-full bg-gradient-to-r from-primary to-cyan-500 px-7 text-base font-semibold shadow-primary hover:opacity-90"
                >
                  <Link href={buttonHref}>
                    {buttonText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
