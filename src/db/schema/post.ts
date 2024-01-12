import {
    integer,
    pgTable,
    serial,
    text
} from "drizzle-orm/pg-core";
  
  import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { post_req } from "./post-config";
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql);
  
  export const post = pgTable("post", {
    id: serial("id").primaryKey(),
    caption: text("caption").notNull(),
    user_id: integer("user_id"),
    post_config_id: integer("post_config_id").references(() => post_req.id),
    image_url: text("image_url").notNull(),
  });
  
  type NewPost = typeof post.$inferInsert;
  type Post = typeof post.$inferSelect;
  
  export async function addPost(req: NewPost) {
    try {
      const result = await db.insert(post).values(req).returning();
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error creating post request: " + err);
      //
    }
  }
  