"use server";

import { z } from "zod";
import { AGE_GROUP, CAPTION_TONE, IMAGE_STYLE } from "./constants";
import { createPostRequest } from "@/db/schema/post-config";
const postConfig = z.object({
  outline: z
    .string({ required_error: "Outline is Required" })
    .trim()
    .min(1, "Outline is Required")
    .max(256, "Cannot be more than 256 characters"),
  outcome: z
    .string({
      required_error: "Outcome is Required",
    })
    .min(1, "Outcome is Required")
    .max(256, "Cannot be more than 256 characters"),
  image_style: z.enum(IMAGE_STYLE, {
    errorMap: (issue) => ({
      message: "Image Style is Required",
    }),
  }),
  caption_tone: z.enum(CAPTION_TONE, {
    errorMap: (issue) => ({
      message: "Caption Tone is Required",
    }),
  }),

  image_brand_color: z
    .string({
      errorMap: (issue) => ({
        message: "Image Brand Color is Required",
      }),
    })
    .trim()
    .min(1, "Image Brand Color is Required")
    .max(30, "Cannot be more than 30 characters"),
  age_group: z.enum(AGE_GROUP, {
    errorMap: (issue) => ({
      message: "Age Group is Required",
    }),
  }),
  theme: z
    .string({
      required_error: "Theme is Required",
    })
    .min(1, "Theme is Required")
    .max(256, "Cannot be more than 256 characters"),
});

export async function createPostConfig(prevState: any, formData: FormData) {
  const result = postConfig.safeParse({
    outline: formData.get("outline"),
    outcome: formData.get("outcome"),
    image_style: formData.get("image_style"),
    caption_tone: formData.get("caption_tone"),
    image_brand_color: formData.get("image_brand_color"),
    age_group: formData.get("age_group"),
    include_hash_tags: formData.get("include_hash_tags"),
    theme: formData.get("theme"),
  });

  console.log(result);
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const response = await createPostRequest(result.data);
  return {
    errors: null,
    response,
  };
}
