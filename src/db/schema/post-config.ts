import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  boolean,
  date,
} from "drizzle-orm/pg-core";

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);


// declaring enum in database
export const caption_tone = pgEnum("caption_tone", [
  "professional",
  "friendly",
  "informational",
  "suggestive",
]);
export const age_group = pgEnum("age_group", [
  "child",
  "teen",
  "adult",
  "senior",
]);
export const image_style = pgEnum("image_style", [
  "realistic",
  "cartoon",
  "anime",
  "illustration",
  "vector",
  "pixel",
  "other",
]);
export const status = pgEnum("status", ["pending", "completed"]);

export const post_req = pgTable(
  "post_request",
  {
    id: serial("id").primaryKey(),
    outline: varchar("outline", { length: 256 }).notNull(),
    outcome: varchar("outcome", { length: 256 }).notNull(),
    image_style: image_style("image_style").notNull(),
    caption_tone: caption_tone("caption_tone").notNull(),
    image_brand_color: varchar("image_brand_color", { length: 30 }).notNull(),
    age_group: age_group("age_group").notNull(),
    include_hash_tags: boolean("include_hash_tags").default(false),
    theme: varchar("theme", { length: 256 }).notNull(),
    user_id: integer("user_id"),
    is_completed: boolean("is_completed").default(false),
    process_id: integer("process_id"),
    post_date: date("post_date").defaultNow(),
  }
);

type NewPostRequest = typeof post_req.$inferInsert

export async function createPostRequest(
  req: NewPostRequest
) {
  try {
    const result = await db.insert(post_req).values(req).returning()
    return result
  }
  catch (err) {
    console.error(err)
    throw new Error("Error creating post request: " + err)
    // 
  }
}

