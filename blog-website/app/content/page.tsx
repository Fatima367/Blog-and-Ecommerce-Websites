import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const BLOGS_QUERY = defineQuery(`*[ 
  _type == "blog" 
  && defined(slug.current)
]{_id, title, slug, description, "image": image.asset->url}|order(title desc)`);

export default async function Content() {
  const { data: posts } = await sanityFetch({ query: BLOGS_QUERY });

  return (
    <div className="mb-8 bg-gradient-to-l from-slate-50 via-white to-slate-50 font-serif">
      <div className="flex flex-wrap gap-5 items-center justify-center mx-auto px-5">
        {posts?.length > 0 ? (
          posts.map(
            (post:any) => (
              <div
                className="bg-slate-200 text-slate-900 rounded-lg shadow-md p-4 flex mt-8
        flex-col items-start justify-start gap-4 lg:w-[18rem] hover:scale-105 transition"
                key={post._id}
              >
                <Image
                  height={300}
                  width={400}
                  src={post.image || "/placeholder-image.png"}
                  alt="image"
                  className="object-cover h-60 w-full"
                />
                <h2 className="font-bold text-2xl line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-base line-clamp-3">
                  <PortableText value={post.description.slice(0, 1)} />
                </p>
                <Link
                  href={`/blogs/${post.slug.current}`}
                  className="text-blue-700 font-bold underline text-lg hover:text-blue-900"
                >
                  Read More
                </Link>
              </div>
            )
          )
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}
