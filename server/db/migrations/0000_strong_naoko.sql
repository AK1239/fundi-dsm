CREATE TABLE IF NOT EXISTS "provider_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"image_path" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "providers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"email" varchar(255),
	"location" varchar(100) NOT NULL,
	"service_type" varchar(100) NOT NULL,
	"experience" varchar(50) NOT NULL,
	"description" text NOT NULL,
	"facebook_link" varchar(255),
	"instagram_link" varchar(255),
	"twitter_link" varchar(255),
	"whatsapp_number" varchar(20),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_provider_id" ON "provider_images" ("provider_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "provider_images" ADD CONSTRAINT "provider_images_provider_id_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
