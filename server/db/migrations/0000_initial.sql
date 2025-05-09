-- Create providers table
CREATE TABLE "providers" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "phone_number" VARCHAR(20) NOT NULL,
  "email" VARCHAR(255),
  "location" VARCHAR(100) NOT NULL,
  "serve_type" VARCHAR(100) NOT NULL,
  "experienicce" VARCHAR(50) NOT NULL,
  "description" TEXT NOT NULL,
  "facebook_link" VARCHAR(255),
  "instagram_link" VARCHAR(255),
  "twitter_link" VARCHAR(255),
  "whatsapp_number" VARCHAR(20),
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create provider_images table
CREATE TABLE "provider_images" (
  "id" SERIAL PRIMARY KEY,
  "provider_id" INTEGER NOT NULL REFERENCES "providers"("id") ON DELETE CASCADE,
  "image_path" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add index for faster queries
CREATE INDEX "idx_provider_id" ON "provider_images"("provider_id"); 