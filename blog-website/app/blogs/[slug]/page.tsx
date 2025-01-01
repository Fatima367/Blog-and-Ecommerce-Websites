import CommentsUI from "@/app/comments/page";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_QUERY = defineQuery(`*[
  _type == "blog" && 
  slug.current == $slug
][0] {
   ...,
      description,
    _id,
    title,
      "imageUrl": image.asset->url
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function blogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: posts } = await sanityFetch({
    query: BLOG_QUERY,
    params: { slug },
  });
  if (!posts) {
    console.error("Post not found for slug:", slug);
    notFound();
  }

  const { title, description, image } = posts;

  const imageUrl = image ? urlFor(image)?.width(550).height(310).url() : null;

  return (
    <main className="container mx-auto grid gap-8 p-8 font-serif text-blue-950">
      <Link href="/content">
        <div
          className="mb-4 items-center flex space-x-2 shadow-md w-fit p-2 px-4 rounded-lg
       bg-slate-100 text-xl hover:bg-slate-200"
        >
          <p>←</p>
          Back
        </div>
      </Link>

      <div className="grid items-top gap-12 sm:grid-cols-2 mb-12">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title || "Blog"}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height={290}
            width={530}
          />
        )}
        <div className="flex flex-col justify-center space-y-4 lg:text-xl text-base">
          <h1 className="text-2xl lg:text-4xl font-bold">{title}</h1>
          <PortableText value={description} />
        </div>
      </div>
      <CommentsUI slug={slug} />
    </main>
  );
}
