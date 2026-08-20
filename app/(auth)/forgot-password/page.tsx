'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Cloud, Mail, ArrowRight, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      // Always show success to prevent email enumeration
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      {/* Gradient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-100/30 blur-[80px]" />
        <div className="absolute right-[-5%] bottom-[5%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-violet-200/40 to-blue-100/20 blur-[70px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-border bg-white/95 p-8 shadow-float backdrop-blur-xl sm:p-10">
          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center justify-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 shadow-primary">
              <Cloud className="h-6 w-6 text-white" strokeWidth={2.2} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Finsta<span className="text-primary">Softech</span>
            </span>
          </Link>

          {submitted ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </div>
              <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
                Check your email
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If an account exists for that email address, we&apos;ve sent a password reset
                link. The link expires in 1 hour.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Didn&apos;t receive it? Check your spam folder or{' '}
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-semibold text-primary hover:underline"
                >
                  try again
                </button>
                .
              </p>
              <Link
                href="/login"
                className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-center font-display text-2xl font-bold tracking-tight text-foreground">
                Reset your password
              </h1>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Enter your account email address and we&apos;ll send you a reset link.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
                <div>
                  <label
                    htmlFor="forgot-email"
                    className="mb-1.5 block text-sm font-semibold text-foreground/90"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="forgot-email"
                      {...register('email')}
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="rounded-xl pl-10"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="group w-full gap-2 rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-base font-semibold shadow-primary hover:opacity-90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending link...
                    </>
                  ) : (
                    <>
                      Send reset link
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
