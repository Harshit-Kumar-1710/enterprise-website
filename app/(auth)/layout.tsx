import { AuthProvider } from '@/components/auth-provider';
import { Toaster } from '@/components/ui/sonner';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="relative min-h-screen overflow-hidden bg-white">
        {children}
        <Toaster position="bottom-right" richColors />
      </div>
    </AuthProvider>
  );
}
