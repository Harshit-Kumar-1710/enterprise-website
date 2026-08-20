import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ContactContent } from '@/components/sections/contact-content';

export const metadata: Metadata = {
  title: 'Contact Finsta Softech | AWS Cloud Consultation',
  description:
    'Talk to an AWS Select Tier Partner about migration, architecture, DevOps, or cloud cost. We respond within one business day.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full" />}>
      <ContactContent />
    </Suspense>
  );
}
