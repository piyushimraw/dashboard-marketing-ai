"use server";

import { z } from "zod";
import { createPostRequest } from "@/db/schema/post-config";
import { generateImage, wait } from "@/lib/utils";
import { redirect } from "next/navigation";
import { postConfigValidation } from "@/lib/validations";



export async function createPostConfig(prevState: any, formData: FormData) {
  const result = postConfigValidation.safeParse({
    outline: formData.get("outline"),
    outcome: formData.get("outcome"),
    image_style: formData.get("image_style"),
    caption_tone: formData.get("caption_tone"),
    image_brand_color: formData.get("image_brand_color"),
    age_group: formData.get("age_group"),
    include_hash_tags: formData.get("include_hash_tags"),
    theme: formData.get("theme"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const response = await createPostRequest(result.data);
  redirect(`/post/${response[0].id}`)
}


const imageConfig = z.object({
  caption: z.string().min(1, "Caption is Required"),
});
export async function createImageForPost(
  prevState: any,
  formData: FormData
){
  const result = imageConfig.safeParse({
    caption: formData.get("caption"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const image_url = await generateImage(prevState, result.data.caption);
  return {
    errors: null,
    image_url,
  };
}