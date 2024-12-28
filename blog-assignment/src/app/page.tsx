import { getPosts } from "@/src/sanity/sanity-utils";
import BlogItem from "@/src/components/Blog";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
      ) : (
        <p className="px-5">No posts found</p>
      )}
    </div>
  );
}
