import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { getAllPostRequestsWithPost } from "@/db/schema/post-config";
import Link from "next/link";

async function Dashboard() {
  const postConfigs = await getAllPostRequestsWithPost();

  const allPostKeys: number[] = Object.keys(postConfigs).map((key: string) => key as unknown as number);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post Configs</h1>
        <Button className=" rounded-md" asChild>
          <Link href="/create-post">Create New Config</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {allPostKeys.map((key) => (
          <Link key={key} href={`/post/${key}`}>
          <Card className="shadow-xl hover:drop-shadow-2xl" >
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Config ID: {key}
              </CardTitle>
              <p className="text-sm text-gray-500">Posts: {postConfigs[key].posts.length}</p>
            </CardHeader>
            <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <table className="table-auto w-full text-sm text-gray-500">
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Theme:</td>
                    <td className="py-2">{postConfigs[key].config.theme}</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Post Outline:</td>
                    <td className="py-2">
                      {postConfigs[key].config.outline}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Post Outcome:</td>
                    <td className="py-2">
                      {postConfigs[key].config.outcome}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Targeted Age Group:</td>
                    <td className="py-2">{postConfigs[key].config.age_group}</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Include Hashtags:</td>
                    <td className="py-2">{
                      postConfigs[key].config.include_hash_tags ? "Yes" : "No"
                    }</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Caption Tone:</td>
                    <td className="py-2">{
                      postConfigs[key].config.caption_tone
                    }</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Image Style:</td>
                    <td className="py-2">{
                      postConfigs[key].config.image_style
                    }</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Brand Color:</td>
                    <td className="py-2">
                      <div className="w-6 h-6  rounded-full" style={{
                        backgroundColor: postConfigs[key].config.image_brand_color,
                      }} />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="font-bold py-2">Generated At:</td>
                    <td className="py-2" >
                      {postConfigs[key].config.post_date}
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
