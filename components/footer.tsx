'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Cloud, Mail, Phone, Linkedin, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'AWS Migration', href: '/solutions' },
      { label: 'Cloud Architecture', href: '/solutions' },
      { label: 'DevOps & Automation', href: '/solutions' },
      { label: 'Cost Optimisation', href: '/solutions' },
      { label: 'Managed Operations', href: '/solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];

type NewsletterState = 'idle' | 'loading' | 'success' | 'duplicate' | 'error';

export function Footer() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [newsletterState, setNewsletterState] = useState<NewsletterState>('idle');

  const validateEmail = (val: string) => {
    if (!val.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
    return '';
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) {
      setEmailError(err);
      return;
    }
    setEmailError('');
    setNewsletterState('loading');
    try {
      const { error } = await supabase.from('newsletter_subscriptions').insert({ email: email.trim().toLowerCase() });
      if (error) {
        // Supabase unique constraint violation code
        if (error.code === '23505') {
          setNewsletterState('duplicate');
        } else {
          throw error;
        }
      } else {
        setNewsletterState('success');
        setEmail('');
      }
    } catch {
      setNewsletterState('error');
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-section-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/8 to-cyan-400/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 shadow-primary">
                <Cloud className="h-5 w-5 text-white" strokeWidth={2.2} />
              </div>
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                Finsta<span className="text-primary">Softech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Finsta Softech — AWS Select Tier Partner. Cloud services for startups
              and SMBs.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                AWS notes, monthly.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Cost-saving tactics, architecture patterns, and AWS updates that
                actually matter. No fluff, no spam.
              </p>

              {newsletterState === 'success' ? (
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                  You&apos;re subscribed. Thanks!
                </div>
              ) : newsletterState === 'duplicate' ? (
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  You&apos;re already subscribed.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="mt-3" noValidate>
                  <div className="flex items-center gap-2">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                      placeholder="you@company.com"
                      autoComplete="email"
                      aria-label="Email address for newsletter"
                      className="rounded-xl bg-white"
                      disabled={newsletterState === 'loading'}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={newsletterState === 'loading'}
                      className="shrink-0 rounded-xl bg-gradient-to-r from-primary to-cyan-500 shadow-primary"
                      aria-label="Subscribe to newsletter"
                    >
                      {newsletterState === 'loading' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {emailError && (
                    <p className="mt-1.5 text-xs text-destructive">{emailError}</p>
                  )}
                  {newsletterState === 'error' && (
                    <p className="mt-1.5 text-xs text-destructive">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    We respect your privacy.{' '}
                    <Link href="/privacy-policy" className="underline hover:text-primary">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-bold text-foreground">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + Connect */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+917338237776"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +91 7338237776
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@finstasofttech.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  sales@finstasofttech.com
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h4 className="font-display text-sm font-bold text-foreground">Connect</h4>
              <div className="mt-3 flex gap-2">
                <a
                  href="https://www.linkedin.com/company/finsta-softech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs font-semibold text-muted-foreground">
            &copy; 2026 Finsta Softech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
