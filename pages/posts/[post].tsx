import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { NextPage } from "next";
import PostCard from "../../components/PostCard";
import { client } from "../../lib/cms";
import { Post } from "../../lib/types";

interface PostProps {
  post: Post;
}
const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      {post?.fields && (
        <div>
          <PostCard post={post} />
          {post?.fields && documentToReactComponents(post.fields.content)}
        </div>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client
    .getEntries({
      content_type: "blogPost",
    })
    .then((response: any) => response.items)
    .catch(console.error);

  const paths = data.map((post: any) => ({
    params: {
      post: post.sys.id,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await client
    .getEntry(params.post)
    .then((response: any) => response)
    .catch(console.error);

  return {
    props: {
      post,
    },
  };
};

export default Post;
