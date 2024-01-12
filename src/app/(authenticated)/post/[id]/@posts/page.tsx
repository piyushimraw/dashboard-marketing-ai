import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostByConfigId } from "@/db/schema/post";

type Props = {
  params: {
    id: string;
  };
};
async function Page({ params }: Props) {
  const postConfigs = await getPostByConfigId(Number.parseInt(params.id));
  console.log(postConfigs);

  return (
    <Card className="shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">Posts Preview</CardTitle>
      </CardHeader>
      <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-center w-full">
          <Button size="lg">Create Post Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Page;
