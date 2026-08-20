'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RequireAuth } from '@/components/require-auth';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <Navbar />
      {children}
      <Footer />
    </RequireAuth>
  );
}
