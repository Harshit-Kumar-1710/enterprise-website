import type { Metadata } from 'next';
import { SolutionsContent } from '@/components/sections/solutions-content';
import { ClosingCTA } from '@/components/sections/closing-cta';

export const metadata: Metadata = {
  title: 'AWS Cloud Services — Migration, DevOps & FinOps | Finsta Softech',
  description:
    'AWS migration, cloud architecture, DevOps automation, cost optimisation, and managed operations — delivered end to end by an AWS Select Tier Partner.',
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsContent />
      <ClosingCTA
        heading="Not sure which of these you need?"
        body="Start with a conversation. We'll tell you what's worth doing and what isn't."
      />
    </>
  );
}
