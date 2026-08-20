import type { Metadata } from 'next';
import { AboutContent } from '@/components/sections/about-content';
import { ClosingCTA } from '@/components/sections/closing-cta';

export const metadata: Metadata = {
  title: 'About Finsta Softech | AWS Select Tier Partner, Noida',
  description:
    'An AWS Select Tier Partner based in Noida, working with startups and SMBs globally. Senior delivery, scoped for lean engineering teams.',
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <ClosingCTA
        heading="Want to know if we're a fit?"
        body="One call, no pitch deck. We'll tell you honestly whether we can help."
      />
    </>
  );
}
