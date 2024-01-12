CREATE TABLE IF NOT EXISTS "post_caption" (
	"id" serial PRIMARY KEY NOT NULL,
	"caption" text NOT NULL,
	"user_id" integer,
	"post_req_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_caption" ADD CONSTRAINT "post_caption_post_req_id_post_request_id_fk" FOREIGN KEY ("post_req_id") REFERENCES "public"."post_request"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
