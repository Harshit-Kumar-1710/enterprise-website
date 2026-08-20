'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle2, Loader2, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Reveal } from '@/components/motion/reveal';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email'),
  company: z.string().min(1, 'Company name is required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select what you need help with'),
  message: z.string().min(10, 'Please tell us a bit more (min 10 characters)'),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  'AWS migration',
  'Cloud architecture / Well-Architected review',
  'DevOps & automation',
  'Cloud cost optimisation',
  'Managed cloud operations',
  'Something else',
];

export function ContactContent() {
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', phone: '', service: '', message: '' },
  });

  const serviceValue = watch('service');

  // Pre-select service from URL query param (e.g. /contact?service=AWS+migration)
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceOptions.includes(serviceParam)) {
      setValue('service', serviceParam, { shouldValidate: false });
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone || null,
        service: data.service,
        message: data.message,
      });
      if (error) throw error;
      toast.success('Thanks! Our team will reach out within one business day.');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again or email us directly at sales@finstasofttech.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-400/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Page heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Let&apos;s talk about your{' '}
              <span className="text-gradient">AWS environment.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re planning a migration, worried about your bill, or
              just want a second opinion on your setup — we&apos;ll give you a
              straight answer.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: contact details */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-float">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-cyan">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Email
                    </p>
                    <a href="mailto:sales@finstasofttech.com" className="font-display text-base font-bold text-foreground hover:text-primary">
                      sales@finstasofttech.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-float">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-blue">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Phone
                    </p>
                    <a href="tel:+917338237776" className="font-display text-base font-bold text-foreground hover:text-primary">
                      +91 7338237776
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-float">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-emerald">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Office
                    </p>
                    <p className="font-display text-base font-bold text-foreground">
                      Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-float">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-amber">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Hours
                    </p>
                    <p className="font-display text-base font-bold text-foreground">
                      Monday–Friday, 9:00 AM – 6:00 PM IST
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We work with clients across time zones — reach out anytime and
                      we&apos;ll find a slot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border bg-white p-6 shadow-float sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor="contact-name" error={errors.name?.message} required>
                  <Input
                    id="contact-name"
                    {...register('name')}
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                    aria-required="true"
                    className="rounded-xl"
                  />
                </Field>
                <Field label="Work email" htmlFor="contact-email" error={errors.email?.message} required>
                  <Input
                    id="contact-email"
                    {...register('email')}
                    type="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                    aria-required="true"
                    className="rounded-xl"
                  />
                </Field>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Company name" htmlFor="contact-company" error={errors.company?.message} required>
                  <Input
                    id="contact-company"
                    {...register('company')}
                    placeholder="Acme Inc."
                    autoComplete="organization"
                    required
                    aria-required="true"
                    className="rounded-xl"
                  />
                </Field>
                <Field label="Phone number (optional)" htmlFor="contact-phone" error={errors.phone?.message}>
                  <Input
                    id="contact-phone"
                    {...register('phone')}
                    type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    className="rounded-xl"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="What can we help with?" htmlFor="contact-service" error={errors.service?.message} required>
                  <Select
                    value={serviceValue}
                    onValueChange={(v) => setValue('service', v, { shouldValidate: true })}
                  >
                    <SelectTrigger id="contact-service" className="rounded-xl" aria-required="true">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Tell us more" htmlFor="contact-message" error={errors.message?.message} required>
                  <Textarea
                    id="contact-message"
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals..."
                    required
                    aria-required="true"
                    className="resize-none rounded-xl"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="group mt-6 w-full gap-2 rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-base font-semibold shadow-primary hover:opacity-90"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                We respond within one business day.
              </p>

              {/* Privacy notice */}
              <p className="mt-4 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                The information you provide will be used to respond to your enquiry and,
                where relevant, to contact you about our services. See our{' '}
                <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">
                  Privacy Policy
                </Link>{' '}
                for details.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-foreground/90">
        {label} {required && <span className="text-destructive" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <span role="alert" className="mt-1 block text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}
