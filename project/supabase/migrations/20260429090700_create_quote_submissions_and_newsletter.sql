/*
  # Create quote submissions and newsletter tables

  1. New Tables
    - `quote_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `phone` (text, not null)
      - `email` (text, not null)
      - `business_name` (text)
      - `website_type` (text) - Single-Page, Template, Business, E-commerce, Custom Web App
      - `budget_range` (text) - ₹0-₹50k, ₹50k-₹1L, ₹1L-₹2L, ₹2L+
      - `message` (text)
      - `source` (text) - popup, contact, exit-intent
      - `created_at` (timestamptz)
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, unique, not null)
      - `created_at` (timestamptz)
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `service_type` (text) - Website, App, Web App, Hosting, Maintenance & SEO
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Allow anonymous inserts (for public form submissions)
    - Restrict reads to authenticated users only
*/

CREATE TABLE IF NOT EXISTS quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  business_name text DEFAULT '',
  website_type text DEFAULT '',
  budget_range text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'popup',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous quote submissions"
  ON quote_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read quotes"
  ON quote_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous newsletter signups"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_type text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact messages"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);
