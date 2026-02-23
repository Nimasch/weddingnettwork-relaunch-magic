
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('couple', 'vendor')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public signup form, no auth required)
CREATE POLICY "Anyone can insert into waitlist"
  ON public.waitlist FOR INSERT
  WITH CHECK (true);

-- No public read access to protect emails (PII)
CREATE POLICY "No public read access"
  ON public.waitlist FOR SELECT
  USING (false);
