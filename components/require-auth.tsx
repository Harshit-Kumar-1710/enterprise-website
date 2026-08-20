'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';
import { Cloud } from 'lucide-react';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/login');
    }
  }, [loading, session, router]);

  if (loading || !session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-500 shadow-primary">
          <Cloud className="h-7 w-7 animate-pulse text-white" strokeWidth={2.2} />
        </div>
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
