import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PostConfig } from "../db/schema/post-config";
import { OpenAI } from "openai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateCaption = async (result: PostConfig) => {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert social media manager. You are creating a post for social media account. 
        You have been given the following information to create the post.
        Outline: ${result.outline} 
        Outcome: ${result.outcome}
        theme: ${result.theme}
        caption tone: ${result.caption_tone}
        age group: ${result.age_group}
        include hash tags: ${result.include_hash_tags ? "Yes" : "No"}

        You need to write caption for the post that will be posted on social media and also ensure it is in line with the brand image and tone.
        You can use the following information to create the caption.
        1. Outline: ${result.outline}
        2. Outcome: ${result.outcome}
        3. Theme: ${result.theme}
        4. Caption Tone: ${result.caption_tone}
        5. Age Group: ${result.age_group}
        6. Include Hash Tags: ${result.include_hash_tags ? "Yes" : "No"}

        Ensure that caption includes trending hash tags if it's included in the post request.
        `,
      },
    ],
    n: 1,
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
};

export const generateImage = async (result: PostConfig, caption: String) => {
  const openai = new OpenAI();
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `
      You are an expert social media image creator. You are creating an image for a social media post.
      You have been given the following information to create the image.
      Caption: ${caption}
      Image Style: ${result.image_style}
      Image Brand Color: ${result.image_brand_color}
      Age Group: ${result.age_group}
      theme: ${result.theme}
    `,
    n: 1,
    size: "1024x1024",
  });
 const  image_url = response.data[0].url;
 return image_url;
}

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

