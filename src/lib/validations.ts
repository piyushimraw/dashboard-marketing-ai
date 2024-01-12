import { IMAGE_STYLE, CAPTION_TONE, AGE_GROUP } from "@/app/(authenticated)/create-post/constants";
import { z } from "zod";



export const postConfigValidation = z.object({
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
  
    include_hash_tags: z.nullable(z.string().toLowerCase().transform((val) => (val === "on" ? true : false))),
    number_of_posts: z.number().int().min(1).max(3, "Maximum 3 post variations are supported").default(1),
  });
  
  export type PostConfigRequest = z.infer<typeof postConfigValidation>;