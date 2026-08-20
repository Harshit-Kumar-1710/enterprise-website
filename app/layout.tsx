import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/auth-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://finstasoftech.com'),
  title: {
    default: 'AWS Select Tier Partner for Startups & SMBs | Finsta Softech',
    template: '%s | Finsta Softech',
  },
  description:
    'Finsta Softech is an AWS Select Tier Partner delivering cloud migration, DevOps, and AWS cost optimisation for startups and SMBs. Book a free consultation.',
  keywords: [
    'AWS Select Tier Partner',
    'AWS migration',
    'cloud architecture',
    'DevOps automation',
    'AWS cost optimisation',
    'FinOps',
    'managed cloud operations',
    'Finsta Softech',
  ],
  authors: [{ name: 'Finsta Softech' }],
  creator: 'Finsta Softech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://finstasoftech.com',
    siteName: 'Finsta Softech',
    title: 'AWS Select Tier Partner for Startups & SMBs | Finsta Softech',
    description:
      'Finsta Softech is an AWS Select Tier Partner delivering cloud migration, DevOps, and AWS cost optimisation for startups and SMBs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Select Tier Partner for Startups & SMBs | Finsta Softech',
    description:
      'Finsta Softech is an AWS Select Tier Partner delivering cloud migration, DevOps, and AWS cost optimisation for startups and SMBs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
          <Toaster position="bottom-right" richColors />
        </AuthProvider>
      </body>
    </html>
  );
}
