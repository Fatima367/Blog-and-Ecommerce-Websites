import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const BLOGS_QUERY = defineQuery(`*[ 
  _type == "blog" 
  && defined(slug.current)
]{_id, title, slug, description, "image": image.asset->url}|order(title desc)`);

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: BLOGS_QUERY });

  return (
    <div className="bg-slate-50 p-8 font-serif">
      <div className="flex items-center justify-center">
        <h1 className="text-slate-900 font-bold text-5xl">Blogs</h1>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center mx-auto">
        {posts?.length > 0 ? (
          posts.map((post: any) => (
            <div
              className="bg-slate-900 text-white rounded-lg shadow-md p-4 flex mt-8
      flex-col items-start justify-start gap-4 lg:w-[18rem]"
              key={post._id}
            >
              <Image
                height={300}
                width={400}
                src={post.image || "/placeholder-image.png"}
                alt="image"
                className="object-cover"
              />
              <h2 className="font-bold text-2xl">{post.title}</h2>
              <p className="text-sm line-clamp-3">
                <PortableText value={post.description.slice(0, 1)} />
              </p>
              <Link
                href={`/blogs/${post.slug.current}`}
                className="text-cyan-500 underline text-md"
              >
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}
