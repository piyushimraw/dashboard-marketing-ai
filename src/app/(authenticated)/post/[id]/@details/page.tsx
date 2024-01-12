/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getPostRequest } from "@/db/schema/post-config";
import React from "react";

const fetchPostConfig = async (id: number) => {
  return await getPostRequest(id);
};

type Props  = {
  params: {
    id: string;
  };
}

async function Page({ params }: Props) {
  const postConfigs = await fetchPostConfig(Number.parseInt(params.id));
  const postConfig = postConfigs[0];
  return (
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
  );
}

export default Page;
