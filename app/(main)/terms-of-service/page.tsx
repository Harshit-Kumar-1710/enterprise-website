import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Finsta Softech Pvt. Ltd.',
};

// ⚠ COMPANY INPUT REQUIRED
// Replace the placeholder content below with legally approved Terms of Service
// content provided by your legal counsel or legal team.
// Do NOT publish this page to production until the final content has been reviewed
// and approved. The effective date must be updated on approval.

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        <strong>Effective date:</strong> [COMPANY INPUT REQUIRED — insert effective date]
        &nbsp;·&nbsp;
        <strong>Version:</strong> 1.0
      </p>

      <div className="prose prose-slate mt-10 max-w-none text-foreground/90">
        {/* ⚠ LEGAL/COMPANY APPROVAL REQUIRED — replace all placeholder sections below */}

        <p className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium text-amber-800">
          ⚠ This page is a placeholder. Final Terms of Service content must be provided and
          legally approved by Finsta Softech Pvt. Ltd. before publishing.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">1. Acceptance of Terms</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">2. Services</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">3. User Accounts</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">4. Acceptable Use</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">5. Intellectual Property</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">6. Limitation of Liability</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">7. Governing Law</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">8. Contact</h2>
        <p>
          For questions about these Terms, contact us at{' '}
          <a
            href="mailto:sales@finstasofttech.com"
            className="text-primary hover:underline"
          >
            sales@finstasofttech.com
          </a>
          .
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          See also our{' '}
          <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
