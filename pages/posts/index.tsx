import Link from "next/link";
import { NextPage } from "next";
import { client } from "../../lib/cms";
import PostCard from "../../components/PostCard";
import { Post } from "../../lib/types";

interface PostsProps {
  data: Post[];
}
const Posts: NextPage<PostsProps> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="flex flex-col h-screen justify-center gap-8">
          <h1 className="text-center text-7xl">
            Welcome to advanced JavaScript blog
          </h1>
          <div className="w-full grid grid-cols-3 gap-6">
            {data.map((post) => (
              <Link key={post.sys.id} href={`/posts/${post.sys.id}`}>
                <a>
                  <PostCard post={post} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export const getStaticProps = async () => {
  const data = await client
    .getEntries({
      content_type: "blogPost",
    })
    .then((response) => response.items)
    .catch(console.error);

  return {
    props: { data },
  };
};

export default Posts;
