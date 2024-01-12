/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getPostRequest } from "@/db/schema/post-config";
import React from "react";

const fetchPostConfig = async (id: number) => {
  return await getPostRequest(id);
};

interface Props {
  params: {
    id: string;
  };
}

async function Page({ params }: Props) {
  const postConfigs = await fetchPostConfig(Number.parseInt(params.id));
  const postConfig = postConfigs[0];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <Card className="shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">
            Post Content Details
          </CardTitle>
          <Button size="sm" variant="outline">
            Edit Config
          </Button>
        </CardHeader>
        <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-bold">Config ID:</p>
              <p className="text-sm text-gray-500">{postConfig.id}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Theme:</p>
              <p className="text-sm text-gray-500">{postConfig.theme}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Post Outline:</p>
              <p className="text-sm text-gray-500">{postConfig.outline}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Post Outcome:</p>
              <p className="text-sm text-gray-500">{postConfig.outcome}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Targeted Age Group:</p>
              <p className="text-sm text-gray-500">{postConfig.age_group}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Include Hashtags:</p>
              <p className="text-sm text-gray-500">
                {postConfig.include_hash_tags ? "Yes" : "No"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Caption Tone:</p>
              <p className="text-sm text-gray-500">{postConfig.caption_tone}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Image Style:</p>
              <p className="text-sm text-gray-500">{postConfig.image_style}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Brand Color:</p>
              <div className="w-6 h-6ll" />
            </div>
            <div className="space-y-2">
              <p className="font-bold">Generated At:</p>
              <p className="text-sm text-gray-500">{postConfig.post_date}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <Card className="shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Generated Post Previews</CardTitle>
            </CardHeader>
            <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
                <h3 className="font-bold text-lg">Preview 1:</h3>
                <img
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
                <Textarea className="mt-2 border-gray-300 rounded-md" placeholder="Edit caption here...">
                  AI is transforming everyday life. From healthcare to transportation to education, the possibilities
                  are endless. #AI #Innovation
                </Textarea>
                <Button className="mt-2 rounded-md">Re-generate Caption</Button>
              </div>
              <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
                <h3 className="font-bold text-lg">Preview 2:</h3>
                <img
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
                <Textarea className="mt-2 border-gray-300 rounded-md" placeholder="Edit caption here...">
                  Discover how AI is making a difference in our daily lives. Join us as we explore AI in healthcare,
                  transportation, education, and more. #AI #FutureTech
                </Textarea>
                <Button className="mt-2 rounded-md">Re-generate Caption</Button>
              </div>
              <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900">
                <h3 className="font-bold text-lg">Preview 3:</h3>
                <div className="flex items-center justify-center h-60 bg-gray-200 rounded-md">
                  <div className="w-10 h-10 text-gray-500" />
                </div>
                <p className="mt-2">
                  AI is not just a buzzword. Its a reality thats changing the world. Stay tuned as we delve into the
                  impact of AI on various sectors. #AI #TechImpact
                </p>
                <Button className="mt-2 rounded-md">Re-generate Caption</Button>
              </div>
            </CardContent>
          </Card> */}
    </div>
  );
}

export default Page;
