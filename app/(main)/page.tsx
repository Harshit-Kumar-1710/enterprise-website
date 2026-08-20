import { Hero } from '@/components/sections/hero';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { WhyFinsta } from '@/components/sections/why-finsta';
import { ClosingCTA } from '@/components/sections/closing-cta';

export const metadata = {
  title: 'AWS Select Tier Partner for Startups & SMBs | Finsta Softech',
  description:
    'Finsta Softech is an AWS Select Tier Partner delivering cloud migration, DevOps, and AWS cost optimisation for startups and SMBs. Book a free consultation.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhyFinsta />
      <ClosingCTA
        heading="Not sure where your AWS spend is going?"
        body="We'll review your environment and show you what's running, what's idle, and what it's costing. No obligation."
      />
    </>
  );
}
