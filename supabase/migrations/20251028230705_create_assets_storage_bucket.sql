/*
  # Create Assets Storage Bucket

  1. New Storage Bucket
    - `assets` - Public bucket for storing cover images and fonts
  
  2. Security
    - Public bucket allowing read access to all users
    - Upload restricted to authenticated users
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'assets',
  'assets',
  true,
  10485760,
  ARRAY['image/png', 'image/jpeg', 'image/jpg', 'font/ttf', 'application/x-font-ttf', 'font/otf', 'application/octet-stream']
)
ON CONFLICT (id) DO NOTHING;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public Access'
  ) THEN
    CREATE POLICY "Public Access"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'assets');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can upload'
  ) THEN
    CREATE POLICY "Authenticated users can upload"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'assets');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can update'
  ) THEN
    CREATE POLICY "Authenticated users can update"
    ON storage.objects FOR UPDATE
    TO authenticated
    USING (bucket_id = 'assets');
  END IF;
END $$;
