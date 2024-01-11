"use server";

import { z } from "zod";
import { AGE_GROUP, CAPTION_TONE, IMAGE_STYLE } from "./constants";
import { createPostRequest } from "@/db/schema/post-config";
import OpenAI from "openai";
import { wait } from "@/lib/utils";


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

  include_hash_tags: z.nullable(z.string().toLowerCase().transform((val) => (val === "on" ? true : false))),
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

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const response = await createPostRequest(result.data);


  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert social media manager. You are creating a post for social media account. 
        You have been given the following information to create the post.
        Outline: ${result.data.outline} 
        Outcome: ${result.data.outcome}
        theme: ${result.data.theme}
        caption tone: ${result.data.caption_tone}
        age group: ${result.data.age_group}
        include hash tags: ${result.data.include_hash_tags ? "Yes" : "No"}

        You need to write caption for the post that will be posted on social media and also ensure it is in line with the brand image and tone.
        You can use the following information to create the caption.
        1. Outline: ${result.data.outline}
        2. Outcome: ${result.data.outcome}
        3. Theme: ${result.data.theme}
        4. Caption Tone: ${result.data.caption_tone}
        5. Age Group: ${result.data.age_group}
        6. Include Hash Tags: ${result.data.include_hash_tags ? "Yes" : "No"}

        Ensure that caption includes trending hash tags if it's included in the post request.
        `,
      },
    ],
    model: "gpt-3.5-turbo",
  });


  return {
    errors: null,
    response,
    captions: completion.choices.map((choice) => choice.message.content),
  };
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
  const openai = new OpenAI();
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `
      You are an expert social media image creator. You are creating an image for a social media post.
      You have been given the following information to create the image.
      Caption: ${result.data.caption}
    `,
    n: 1,
    size: "1024x1024",
  });
 const  image_url = response.data[0].url;
  return {
    errors: null,
    image_url,
  };
}