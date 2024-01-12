CREATE TABLE IF NOT EXISTS "post" (
	"id" serial PRIMARY KEY NOT NULL,
	"caption" text NOT NULL,
	"user_id" integer,
	"post_config_id" integer,
	"image_url" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "post_caption";--> statement-breakpoint
ALTER TABLE "post_request" ADD COLUMN "number_of_posts" integer DEFAULT 1;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_post_config_id_post_request_id_fk" FOREIGN KEY ("post_config_id") REFERENCES "public"."post_request"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
