import Image from "next/image";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Post } from "../lib/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full border rounded-sm shadow-md px-8 pb-8 text-center hover:bg-gray-100">
      <h3 className="text-3xl p-4">{post.fields.heading}</h3>
      <div className="w-full">
        <Image
          src={`https:${post.fields.mainImage.fields.file.url}`}
          width={600}
          height={400}
          alt={post.fields.mainImage.fields.title}
        />
      </div>
    </div>
  );
};

export default PostCard;
