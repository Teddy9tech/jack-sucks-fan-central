
-- Create a table to store live subscriber counts
CREATE TABLE public.channel_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  channel_name TEXT NOT NULL UNIQUE,
  subscriber_count BIGINT NOT NULL,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial data for Jack's channels
INSERT INTO public.channel_subscribers (channel_name, subscriber_count) VALUES
  ('JackSucksAtLife', 2100000),
  ('JackSucksAtStuff', 790000),
  ('JackSucksAtGeography', 650000),
  ('JackSucksAtClips', 420000),
  ('JackMasseyWelsh', 380000),
  ('turd boi420', 320000);

-- Enable RLS (Row Level Security)
ALTER TABLE public.channel_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to subscriber counts" 
  ON public.channel_subscribers 
  FOR SELECT 
  TO public 
  USING (true);
