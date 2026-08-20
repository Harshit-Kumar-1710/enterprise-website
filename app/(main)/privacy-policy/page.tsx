import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Finsta Softech Pvt. Ltd.',
};

// ⚠ COMPANY INPUT REQUIRED
// Replace the placeholder content below with legally approved Privacy Policy
// content provided by your legal counsel or legal team.
// Do NOT publish this page to production until the final content has been reviewed
// and approved. The effective date must be updated on approval.

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        <strong>Effective date:</strong> [COMPANY INPUT REQUIRED — insert effective date]
        &nbsp;·&nbsp;
        <strong>Version:</strong> 1.0
      </p>

      <div className="prose prose-slate mt-10 max-w-none text-foreground/90">
        {/* ⚠ LEGAL/COMPANY APPROVAL REQUIRED — replace all placeholder sections below */}

        <p className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium text-amber-800">
          ⚠ This page is a placeholder. Final Privacy Policy content must be provided and
          legally approved by Finsta Softech Pvt. Ltd. before publishing.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">1. Who We Are</h2>
        <p>
          Finsta Softech Pvt. Ltd., headquartered in Noida, Uttar Pradesh, India. Contact:{' '}
          <a href="mailto:sales@finstasofttech.com" className="text-primary hover:underline">
            sales@finstasofttech.com
          </a>
          .
        </p>

        <h2 className="mt-6 font-display text-xl font-bold">2. Information We Collect</h2>
        <p>
          We collect information you provide when you fill in our contact and enquiry forms,
          including your name, work email address, company name, phone number, and project
          details. We may also collect basic usage data when you visit our website.
        </p>
        <p>[ADDITIONAL DETAIL — COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">3. How We Use Your Information</h2>
        <p>
          We use the information you submit to respond to your enquiry, provide our cloud
          services, and (where you have consented) send you relevant updates.
        </p>
        <p>[ADDITIONAL DETAIL — COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">4. Data Sharing</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">5. Data Retention</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">6. Your Rights</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">7. Cookies</h2>
        <p>[COMPANY / LEGAL INPUT REQUIRED]</p>

        <h2 className="mt-6 font-display text-xl font-bold">8. Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect the personal
          information you share with us. Our database is hosted on Supabase with row-level
          security enabled.
        </p>

        <h2 className="mt-6 font-display text-xl font-bold">9. Contact</h2>
        <p>
          For privacy questions or data requests, contact us at{' '}
          <a href="mailto:sales@finstasofttech.com" className="text-primary hover:underline">
            sales@finstasofttech.com
          </a>
          .
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          See also our{' '}
          <Link href="/terms-of-service" className="font-semibold text-primary hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
