import {
    integer,
    pgTable,
    serial,
    text
} from "drizzle-orm/pg-core";
  
  import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { post_req } from "./post-config";
import { eq } from "drizzle-orm";
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
  export type Post = typeof post.$inferSelect;
  
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

  export async function getPostById(id: number) {
    try {
      const result = await db.select().from(post).where(eq(post.id, id)).limit(1);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error creating post request: " + err);
      //
    }
  }

  export async function getPostByConfigId(id: number) {
    try {
      const result = await db.select().from(post).where(eq(post.post_config_id, id));
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error creating post request: " + err);
      //
    }
  }

  export async function updatePostById(id: number, req: Partial<NewPost>) {
    try {
      const result = await db.update(post).set(req).where(eq(post.id, id)).returning();
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error creating post request: " + err);
      //
    }
  }
  