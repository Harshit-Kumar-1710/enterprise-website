/*
# Add phone column to contact_submissions

1. Modified Tables
- `contact_submissions`
  - Add `phone` (text, nullable) — optional phone number from the expanded enquiry form

2. Security
- No policy changes. Existing RLS policies remain unchanged:
  - anon + authenticated can INSERT
  - authenticated can SELECT/UPDATE/DELETE

3. Notes
- The phone field is optional in the contact form, so the column is nullable.
- No data loss — this is an additive migration only.
*/

ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS phone text;
