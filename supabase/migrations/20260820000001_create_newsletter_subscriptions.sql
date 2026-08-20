/*
# Create newsletter_subscriptions table

1. New Tables
  - `newsletter_subscriptions`
    - `id` (uuid, primary key)
    - `email` (text, unique, not null) — subscriber email
    - `created_at` (timestamptz, default now())

2. Security
  - Enable RLS on `newsletter_subscriptions`.
  - Allow anon + authenticated INSERT so the public newsletter form can submit.
  - Unique constraint on email to detect duplicate subscriptions (code 23505).
  - No SELECT/UPDATE/DELETE for anon — reads restricted to authenticated users.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT newsletter_subscriptions_email_unique UNIQUE (email)
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_insert_newsletter"
ON newsletter_subscriptions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_newsletter" ON newsletter_subscriptions;
CREATE POLICY "auth_read_newsletter"
ON newsletter_subscriptions FOR SELECT
TO authenticated USING (true);
