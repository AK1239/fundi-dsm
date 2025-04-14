-- First check if the rating column exists and add it if it doesn't
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'providers' AND column_name = 'rating'
    ) THEN
        ALTER TABLE "providers" ADD COLUMN "rating" DECIMAL(3, 1) DEFAULT 0.0;
    ELSE
        ALTER TABLE "providers" ALTER COLUMN "rating" SET DATA TYPE numeric(3, 1);
        ALTER TABLE "providers" ALTER COLUMN "rating" SET DEFAULT '0.0';
    END IF;
END $$;
--> statement-breakpoint

-- Check if review_count column exists and add it if it doesn't
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'providers' AND column_name = 'review_count'
    ) THEN
        ALTER TABLE "providers" ADD COLUMN "review_count" INTEGER DEFAULT 0;
    ELSE
        ALTER TABLE "providers" ALTER COLUMN "review_count" SET DEFAULT 0;
    END IF;
END $$;