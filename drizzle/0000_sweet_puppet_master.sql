DO $$ BEGIN
 CREATE TYPE "age_group" AS ENUM('child', 'teen', 'adult', 'senior');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "caption_tone" AS ENUM('professional', 'friendly', 'informational', 'suggestive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "image_style" AS ENUM('realistic', 'cartoon', 'anime', 'illustration', 'vector', 'pixel', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('pending', 'completed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_request" (
	"id" serial PRIMARY KEY NOT NULL,
	"outline" varchar(256),
	"outcome" varchar(256),
	"image_style" "image_style",
	"caption_tone" "caption_tone",
	"image_brand_color" varchar(30),
	"age_group" "age_group",
	"include_hash_tags" boolean,
	"theme" varchar(256),
	"user_id" integer,
	"is_completed" boolean,
	"process_id" integer,
	"post_data" date
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "user_id_idx" ON "post_request" ("user_id");