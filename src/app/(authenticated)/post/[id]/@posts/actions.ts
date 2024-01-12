"use server";

import { addPost } from "@/db/schema/post";
import { getPostRequest } from "@/db/schema/post-config";
import { generateCaption, generateImage } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function generatePost(postConfigId: number) {
  const postConfig = await getPostRequest(postConfigId);

  if (!postConfig) {
    throw new Error("Post config not found");
  }

  const caption = await generateCaption(postConfig[0]);

  if (!caption) {
    throw new Error("Caption not found");
  }
  const image_url = await generateImage(postConfig[0], caption);

  if (!image_url) {
    throw new Error("Image not found");
  }

  const savePost = await addPost({
    caption,
    image_url,
    post_config_id: postConfigId,
  });
  if (!savePost) {
    throw new Error("Error saving post");
  }

  revalidatePath(`/post/${postConfigId}`);

  return {
    caption,
    image_url,
  };
}
