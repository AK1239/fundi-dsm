-- Add new columns to providers table
ALTER TABLE providers ADD COLUMN rating DECIMAL(3, 1) DEFAULT 0.0;
ALTER TABLE providers ADD COLUMN review_count INTEGER DEFAULT 0;

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  provider_id INTEGER NOT NULL REFERENCES providers(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL,
  comment TEXT NOT NULL,
  date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create index for provider_id in reviews table
CREATE INDEX idx_review_provider_id ON reviews(provider_id); 