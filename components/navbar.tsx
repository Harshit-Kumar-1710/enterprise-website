'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Menu, X, ArrowRight, LogOut, User as UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth-provider';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const { user, loading, signOut } = useAuth();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5 transition-all duration-300',
          scrolled
            ? 'bg-white/90 shadow-[0_2px_20px_hsl(222_47%_11%/0.08)] backdrop-blur-xl border border-border'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 shadow-primary">
            <Cloud className="h-5 w-5 text-white" strokeWidth={2.2} />
          </div>
          <span className="font-display text-base font-bold tracking-tight text-foreground">
            Finsta<span className="text-primary">Softech</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground',
                isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {link.label}
              <span
                className={cn(
                  'absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full bg-primary transition-transform duration-250',
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                )}
              />
            </Link>
          ))}
        </div>

        {/* CTA / Auth */}
        <div className="hidden items-center gap-2 lg:flex">
          {!loading && user ? (
            <>
              <Link href="/login" className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40">
                <UserIcon className="h-3.5 w-3.5 text-primary" />
                <span className="max-w-[120px] truncate">
                  {(user.user_metadata?.full_name as string | undefined)?.split(' ')[0] ||
                    user.email?.split('@')[0]?.replace(/^(test|demo|admin|user)$/i, '') ||
                    'Account'}
                </span>
              </Link>
              <Button
                onClick={signOut}
                size="sm"
                variant="outline"
                className="gap-1.5 rounded-full border-border text-sm font-medium"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                Log in
              </Link>
              <Button
                asChild
                size="sm"
                className="group gap-1.5 rounded-full bg-gradient-to-r from-primary to-cyan-500 px-5 text-sm font-semibold shadow-primary hover:opacity-90"
              >
                <Link href="/signup">
                  Sign Up
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[60px] z-40 lg:hidden"
          >
            <div className="rounded-2xl border border-border bg-white p-4 shadow-float">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground',
                      isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex gap-2 border-t border-border pt-3">
                {!loading && user ? (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-xl border border-border px-4 py-2.5 text-center text-sm font-semibold text-foreground"
                    >
                      Account
                    </Link>
                    <Button
                      onClick={() => {
                        signOut();
                        setOpen(false);
                      }}
                      className="flex-1 gap-1.5 rounded-xl"
                    >
                      <LogOut className="h-4 w-4" /> Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-xl border border-border px-4 py-2.5 text-center text-sm font-semibold text-foreground"
                    >
                      Log in
                    </Link>
                    <Button asChild className="flex-1 rounded-xl">
                      <Link href="/signup" onClick={() => setOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
