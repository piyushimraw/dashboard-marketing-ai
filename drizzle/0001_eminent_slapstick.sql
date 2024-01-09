ALTER TABLE "post_request" RENAME COLUMN "post_data" TO "post_date";--> statement-breakpoint
DROP INDEX IF EXISTS "user_id_idx";--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "outline" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "outcome" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "image_style" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "caption_tone" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "image_brand_color" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "age_group" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "include_hash_tags" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "theme" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "is_completed" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "post_request" ALTER COLUMN "post_date" SET DEFAULT now();