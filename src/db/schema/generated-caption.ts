import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  boolean,
  text,
  date,
} from "drizzle-orm/pg-core";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { post_req } from "./post-config";
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export const post_caption = pgTable("post_caption", {
  id: serial("id").primaryKey(),
  caption: text("caption").notNull(),
  user_id: integer("user_id"),
  post_req_id: integer("post_req_id").references(() => post_req.id),
});

type PostCaption = typeof post_caption.$inferInsert;

export async function addPostCaption(req: PostCaption) {
  try {
    const result = await db.insert(post_caption).values(req).returning();
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating post request: " + err);
    //
  }
}
