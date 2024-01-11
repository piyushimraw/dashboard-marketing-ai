/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Textarea } from "./ui/textarea";
import { SubmitButton } from "./ui/loading-button";
import { createImageForPost } from "@/app/(authenticated)/create-post/actions";
import { useFormState } from "react-dom";

type Props = {
  caption: string | null;
};
function PostCard({ caption }: Props) {
  const [state, formAction] = useFormState(createImageForPost, {
    errors: {},
  });

  if (!caption) return null;
  const errors = state?.errors;
  const image_url = state.image_url;
  const linesInCaption = caption?.split("\n").length ?? 0;
  return (
    <form
      className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-900"
      key={caption}
      action={formAction}
    >
      <h3 className="font-bold text-lg">Preview 1:</h3>
      <img
        alt="Generated Post Image 1"
        className="object-cover w-full rounded-md"
        height={1024}
        src={image_url ?? "/placeholder.svg"}
        style={{
          aspectRatio: "1024/1024",
          objectFit: "cover",
        }}
        width={1024}
      />
      <Textarea
        rows={1.5 * linesInCaption || 3}
        className="mt-2 border-gray-300 rounded-md mb-4"
        placeholder="Edit caption here..."
        defaultValue={caption ?? ""}
        name="caption"
      ></Textarea>
      <SubmitButton className="mt- text-white rounded-md">
        Confirm Caption
      </SubmitButton>
    </form>
  );
}

export default PostCard;
