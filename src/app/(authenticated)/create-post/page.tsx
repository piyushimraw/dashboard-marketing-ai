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

export default function PostDetails() {
  const [state, formAction] = useFormState(createPostConfig, {
    errors: {},
  });

  const { pending } = useFormStatus();

  const errors = state?.errors;

  console.log(errors);

  console.log(state.response)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">
            Generate Post Content
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <p className="font-bold">Theme:</p>
            <Input
              className={clsx("w-full", errors?.theme && "border-red-500")}
              placeholder="Enter theme..."
              type="text"
              name="theme"
            />
            {errors?.theme && (
              <span className="text-red-500 mt-2">{errors?.theme}</span>
            )}
            <p className="font-bold">Post Outline:</p>
            <Input
              className={clsx("w-full", errors?.outline && "border-red-500")}
              placeholder="Enter post outline..."
              type="text"
              name="outline"
            />
            {errors?.outline && (
              <span className="text-red-500 mt-2">{errors?.outline}</span>
            )}
            <p className="font-bold">Post Outcome:</p>
            <Input
              className={clsx("w-full", errors?.outcome && "border-red-500")}
              placeholder="Enter post outcome..."
              type="text"
              name="outcome"
            />
            {errors?.outcome && (
              <span className="text-red-500 mt-2">{errors?.outcome}</span>
            )}
            <p className="font-bold">Targeted Age Group:</p>
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
            <p className="font-bold">Include Hashtags:</p>
            <Switch
              className="ml-auto"
              id="hashtags"
              name="include_hash_tags"
            />
            <p className="font-bold">Caption Tone:</p>
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
            <p className="font-bold">Image Style:</p>
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
                <span className="text-red-500 mt-2">{errors?.image_style}</span>
              )}
            </Select>

            <p className="font-bold">Image Brand Color</p>
            <Input
              className={clsx(" w-12", errors?.image_brand_color && "border-red-500")}
              placeholder="Enter post outcome..."
              type="color"
              name="image_brand_color"
            />
            {errors?.image_brand_color && (
              <span className="text-red-500 mt-2">{errors?.image_brand_color}</span>
            )}

            <div>
              <ButtonLoading
                className="mt-4 bg-gray-900 text-white"
                variant="default"
                loading={pending}
              >
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
        <CardContent>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-bold">Preview 1:</h3>
              <Image
                alt="Generated Post Image 1"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <p className="font-normal mt-2">
                AI is transforming everyday life. From healthcare to
                transportation to education, the possibilities are endless. #AI
                #Innovation
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-bold">Preview 2:</h3>
              <Image
                alt="Generated Post Image 2"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <p className="font-normal mt-2">
                Discover how AI is making a difference in our daily lives. Join
                us as we explore AI in healthcare, transportation, education,
                and more. #AI #FutureTech
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-bold">Preview 3:</h3>
              <Image
                alt="Generated Post Image 3"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <p className="font-normal mt-2">
                AI is not just a buzzword. Its a reality thats changing the
                world. Stay tuned as we delve into the impact of AI on various
                sectors. #AI #TechImpact
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
