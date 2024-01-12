import {
  boolean,
  date,
  integer,
  pgEnum,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { Post, post } from "./post";
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

export const post_req = pgTable("post_request", {
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
});

export type NewPostRequest = typeof post_req.$inferInsert;
export type PostConfig = typeof post_req.$inferSelect;

export async function createPostRequest(req: NewPostRequest) {
  try {
    const result = await db.insert(post_req).values(req).returning();
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating post request: " + err);
    //
  }
}

export async function getPostRequest(id: number) {
  try {
    const result = await db
      .select()
      .from(post_req)
      .where(eq(post_req.id, id))
      .limit(1)
      .execute();
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Error getting post request: " + err);
    //
  }
}

export async function getAllPostRequestsWithPost() {
  try {
    const rows = await db
      .select({
        config: post_req,
        post: post,
      })
      .from(post_req)
      .leftJoin(post, eq(post_req.id, post.post_config_id))
      .execute();

    const result = rows.reduce<
      Record<number, { config: PostConfig; posts: Post[] }>
    >(
      (
        acc,
        row
      ) => {
        const config = row.config;
        const post = row.post;
        if (!acc[config.id]) {
          acc[config.id] = { config, posts: [] };
        }
        if (post) {
          acc[config.id].posts.push(post);
        }
        return acc;
      },
      {}
    );
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Error getting post request: " + err);
    //
  }
}
