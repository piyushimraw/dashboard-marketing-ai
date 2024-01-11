"use client";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Image from "next/image";
import { createPostConfig } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { AGE_GROUP, CAPTION_TONE, IMAGE_STYLE } from "./constants";
import { ButtonLoading } from "@/components/ui/loading-button";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function PostDetails() {
  const [state, formAction] = useFormState(createPostConfig, {
    errors: {},
  });

  const { pending } = useFormStatus();

  const errors = state?.errors;

  const captions = state.captions;
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <Card className="shadow-xl [height:76%]">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">
            Generate Post Content
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <form className="space-y-4" action={formAction}>
            <div className="space-y-2">
              <p className="font-bold">Theme:</p>
              <p className="text-sm text-gray-500">
                Enter the theme for your campaign.
              </p>
              <Input
                className={clsx("w-full", errors?.theme && "border-red-500")}
                placeholder="Enter theme..."
                type="text"
                name="theme"
              />
              {errors?.theme && (
                <span className="text-red-500 mt-2">{errors?.theme}</span>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-bold">Post Outline:</p>
              <p className="text-sm text-gray-500">
                Provide a brief outline for your post.
              </p>
              <Input
                className={clsx("w-full", errors?.outline && "border-red-500")}
                placeholder="Enter post outline..."
                type="text"
                name="outline"
              />
              {errors?.outline && (
                <span className="text-red-500 mt-2">{errors?.outline}</span>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-bold">Post Outcome:</p>
              <p className="text-sm text-gray-500">
                What is the desired outcome of your post?
              </p>
              <Input
                className={clsx("w-full", errors?.outcome && "border-red-500")}
                placeholder="Enter post outcome..."
                type="text"
                name="outcome"
              />
              {errors?.outcome && (
                <span className="text-red-500 mt-2">{errors?.outcome}</span>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-bold">Targeted Age Group:</p>
              <p className="text-sm text-gray-500">
                Select the age group you are targeting.
              </p>
              <Select name="age_group">
                <SelectTrigger
                  className={clsx(errors?.age_group && "border-red-500")}
                >
                  <SelectValue placeholder="Select Age Group" />
                </SelectTrigger>
                <SelectContent>
                  {AGE_GROUP.map((age_group) => (
                    <SelectItem key={age_group} value={age_group}>
                      {age_group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors?.age_group && (
                <span className="text-red-500 mt-2">{errors?.age_group}</span>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-bold">Include Hashtags:</p>
              <p className="text-sm text-gray-500">
                Would you like to include hashtags in your post?
              </p>
              <Switch
                className="ml-auto"
                id="hashtags"
                name="include_hash_tags"
              />
            </div>
            <div className="space-y-2">
              <p className="font-bold">Caption Tone:</p>
              <p className="text-sm text-gray-500">
                Choose the tone for your posts caption.
              </p>
              <Select name="caption_tone">
                <SelectTrigger
                  className={clsx(errors?.caption_tone && "border-red-500")}
                >
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  {CAPTION_TONE.map((tone) => (
                    <SelectItem key={tone} value={tone}>
                      {tone}
                    </SelectItem>
                  ))}
                </SelectContent>
                {errors?.caption_tone && (
                  <span className="text-red-500 mt-2">
                    {errors?.caption_tone}
                  </span>
                )}
              </Select>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Image Style:</p>
              <p className="text-sm text-gray-500">
                Choose the style for your posts image.
              </p>
              <Select name="image_style">
                <SelectTrigger
                  className={clsx(errors?.image_style && "border-red-500")}
                >
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {IMAGE_STYLE.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
                {errors?.image_style && (
                  <span className="text-red-500 mt-2">
                    {errors?.image_style}
                  </span>
                )}
              </Select>
            </div>

            <div className="space-y-2">
              <p className="font-bold">Image Brand Color</p>
              <p className="text-sm text-gray-500">
                Choose the color for your posts image.
              </p>
              <Input
                className={clsx(
                  " w-12",
                  errors?.image_brand_color && "border-red-500"
                )}
                placeholder="Enter post outcome..."
                type="color"
                name="image_brand_color"
              />
              {errors?.image_brand_color && (
                <span className="text-red-500 mt-2">
                  {errors?.image_brand_color}
                </span>
              )}
            </div>

            <div>
              <ButtonLoading className="mt-4" isLoading={pending}>
                Generate Content
              </ButtonLoading>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">
            Generated Post Previews
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
          <>
            {captions?.map((caption, index) => {
              const linesInCaption = caption?.split("\n").length ?? 0;
              const height = linesInCaption * 20 + 300;
              return(
              <div
                className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900"
                key={caption}
              >
                <h3 className="font-bold text-lg">Preview 1:</h3>
                <Image
                  alt="Generated Post Image 1"
                  className="object-cover w-full h-60 rounded-md"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <Textarea
                  rows={1.5*linesInCaption}
                  className="mt-2 border-gray-300 rounded-md mb-4"
                  placeholder="Edit caption here..."
                  defaultValue={caption ?? ""}
                >
                </Textarea>
                <Button className="mt- text-white rounded-md">
                  Confirm Caption
                </Button>
              </div>
            )})}
          </>

          {/* <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
            <h3 className="font-bold text-lg">Preview 2:</h3>
            <Image
              alt="Generated Post Image 2"
              className="object-cover w-full h-60 rounded-md"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <Textarea
              className="mt-2 border-gray-300 rounded-md"
              placeholder="Edit caption here..."
            >
              Discover how AI is making a difference in our daily lives. Join us
              as we explore AI in healthcare, transportation, education, and
              more. #AI #FutureTech
            </Textarea>
            <Button className="mt- text-white rounded-md">
              Confirm Caption
            </Button>
          </div>
          <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
            <h3 className="font-bold text-lg">Preview 3:</h3>
            <div className="flex items-center justify-center h-60 bg-gray-200 rounded-md">
              <div className="w-10 h-10 text-gray-500" />
            </div>
            <p className="mt-2">
              AI is not just a buzzword. Its a reality thats changing the world.
              Stay tuned as we delve into the impact of AI on various sectors.
              #AI #TechImpact
            </p>
            <ButtonLoading  className="mt-4" isLoading={true}>
              Generating...
            </ButtonLoading>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
