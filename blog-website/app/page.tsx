import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";

const BLOGS_QUERY = defineQuery(`*[ 
  _type == "blog" 
  && defined(slug.current)
]{_id, title, slug, description, "image": image.asset->url}|order(title desc)`);

export default async function Home() {
  
  const {data: posts} =  await sanityFetch({query: BLOGS_QUERY})
  console.log("Fetched posts:", posts);

  return (
<div className="bg-slate-50 px-8 font-serif">
   <h1 className="text-slate-900">Blogs</h1>
   <div className="flex flex-wrap gap-4">

    {posts?.length > 0 ? (
    posts.map((post: any) => (
      <div className="bg-slate-900 text-white rounded-lg shadow-md p-4 flex
      flex-col items-center justify-start gap-4" 
      key={post._id}>
         <Image 
         height={40}
         width={40}
         src={post.image || "/placeholder-image.png"}
         alt="image"
         className="object-cover"
         />
         <h2>{post.title}</h2>
         <PortableText value={post.description} />
      </div>
    )
     ))
     : (
      <p>No posts available.</p>
    )}
   </div>

</div>
  );
}
