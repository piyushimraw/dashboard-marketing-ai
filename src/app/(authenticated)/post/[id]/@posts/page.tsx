import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubmitButton } from "@/components/ui/loading-button";
import { getPostByConfigId } from "@/db/schema/post";
import { generatePost } from "./actions";
import PostCard from "@/components/post-card";

type Props = {
  params: {
    id: string;
  };
};
async function Page({ params }: Props) {
  const posts = await getPostByConfigId(Number.parseInt(params.id));
  const generatePostWithConfig = generatePost.bind(
    null,
    Number.parseInt(params.id)
  );
  return (
    <Card className="shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">Posts Preview</CardTitle>
      </CardHeader>
      <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        {posts.map((post) => {
          return <PostCard key={post.image_url} {...post} />;
        })}
        <form
          className="flex justify-center w-full mt-4"
          action={generatePostWithConfig}
        >
          <SubmitButton size="lg">Create Post Now</SubmitButton>
        </form>
      </CardContent>
    </Card>
  );
}

export default Page;
