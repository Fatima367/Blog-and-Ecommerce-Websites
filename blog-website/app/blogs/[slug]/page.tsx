import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_QUERY = defineQuery(`*[
    _type == "event" &&
    slug.current == $slug
  ][0]{
  ...,
  "date": coalesce(date, now()),
  title->,
  description->
}`);

const { projectId, dataset } = client.config();


export default async function EventPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { data: posts } = await sanityFetch({
      query: BLOG_QUERY,
      params: await params,
    });
    if (!posts) {
      notFound();
    }
    const {
      image,
      title,
      description,
    } = posts;
    const eventImageUrl = image
      ? urlFor(image)?.width(40).height(40).url()
      : null;

return(
    <main className="container mx-auto grid gap-12 p-12">
    <div className="mb-4">
      <Link href="/">← Back to home</Link>
    </div>
    <div className="grid items-top gap-12 sm:grid-cols-2">
      <Image
        src={image}
        alt={title || "Blog"}
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        height="310"
        width="550"
      />
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-4">
          {title?.name ? (
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold"></dd>
              <dt>{title?.name}</dt>
            </dl>
          ) : null}
          <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
            <dd className="font-semibold">Date</dd>
            <div>
              {description && <dt>{description}</dt>}
            </div>
          </dl>
        </div>
      </div>
    </div>
  </main>

)
}