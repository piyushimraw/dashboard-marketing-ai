import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { TextIcon } from "@/components/ui/icons/text";
import { ImageIcon } from "@/components/ui/icons/image";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                AI-Powered Caption Generation
              </CardTitle>
              <TextIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                Generate engaging captions for your marketing campaigns.
                Customize the word count, tone, and number of hashtags to match
                your brands voice.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Image Generation
              </CardTitle>
              <ImageIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                Generate visually stunning images for your campaign posts.
                Customize the style and color theme to align with your brands
                aesthetics.
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild className="mr-4" variant="default">
            <Link href="/create-post">Start a new post</Link>
          </Button>
          <Button variant="outline">View Campaign Analytics</Button>
        </div>
      </>
    </div>
  );
}

export default Dashboard;
