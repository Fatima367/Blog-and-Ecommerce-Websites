import { getPosts } from "@/src/sanity/sanity-utils";
import BlogItem from "@/src/components/Blog/index";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any, i) => <BlogItem key={i} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
 