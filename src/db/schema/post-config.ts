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
    outline: varchar("outline", { length: 256 }),
    outcome: varchar("outcome", { length: 256 }),
    image_style: image_style("image_style"),
    caption_tone: caption_tone("caption_tone"),
    image_brand_color: varchar("image_brand_color", { length: 30 }),
    age_group: age_group("age_group"),
    include_hash_tags: boolean("include_hash_tags"),
    theme: varchar("theme", { length: 256 }),
    user_id: integer("user_id"),
    is_completed: boolean("is_completed"),
    process_id: integer("process_id"),
    post_data: date("post_data"),
  },
  (post_req) => {
    return {
      user_idIndex: uniqueIndex("user_id_idx").on(post_req.user_id),
    };
  }
);
