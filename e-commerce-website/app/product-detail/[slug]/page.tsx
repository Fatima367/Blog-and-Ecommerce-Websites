import Image from "next/image";
import Products from "@/app/products/page";
import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { defineQuery, PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";


const PRODUCTS_QUERY = defineQuery(`*[ 
  _type == "products" && 
  slug.current == $slug
][0]{
...,
  _id,
  name,
  slug,
  description,
  price,
  oldPrice,
  reviews,
  "imageUrl": image.asset->url,
  "ratingsImageUrl": ratingsImage.asset->url
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const { data: products } = await sanityFetch({
    query: PRODUCTS_QUERY,
    params: { slug },
  });
  if (!products) {
    console.error("Product not found for slug:", slug);
    notFound();
  }

  const { name, description, image, price, oldPrice, reviews, ratingsImage } = products;

  const imageUrl = image ? urlFor(image)?.width(450).height(450).url() : null;
  const ratingsImageUrl = ratingsImage ? urlFor(ratingsImage)?.width(100).height(20).url() : null;



  return (
    <div className="">
      <div className="flex flex-col items-start justify-between mx-auto lg:px-10">
        <div className="mt-10 mx-auto w-full">
          <div className="flex ml-0 bg-white text-rose-600 p-4 w-full bg-opacity-80 rounded-full shadow-sm">
            <h2 className="text-3xl font-semibold">{name}</h2>
          </div>
        </div>

        <div className="flex flex-row items-start justify-start mt-14 ">
          {/*Left*/}
          <div
            className="bg-gray-50 rounded
                flex items-center justify-center"
          >
            {imageUrl && (
            <Image
              src={imageUrl}
              width={450}
              height={450}
              alt={name || "related-image"}
              className="lg:w-full lg:h-auto"
            />
          )}
          </div>

          {/*Center*/}
          <div className="flex flex-col ml-16 justify-center items-start">
            <h1 className="text-3xl font-bold">{name}</h1>
            <div className="space-x-4 flex flex-row items-center justify-center">
              <div className="space-x-2 flex items-center justify-center mt-3">
                {ratingsImageUrl && (
                <Image
                  src={ratingsImageUrl || "ratings"}
                  height={20}
                  width={100}
                  alt="ratings"
                />
              )}
                <p className="text-base opacity-50">({reviews}) Reviews</p>
              </div>
              <div className="space-x-4 flex flex-row items-center justify-center mt-3">
                <p>|</p>
                <p className="text-green-500 text-lg opacity-60">In Stock</p>
              </div>
            </div>
            <h2 className="text-3xl mt-4 font-bold text-red-500">{price}.00</h2>
            <p className="text-md mt-6 max-w-96">
            <PortableText value={description} />
            </p>

            <hr className="mt-6" />

            <div className="flex space-x-8 mt-6 items-center">
              <p className="text-lg">Quantity</p>
              <input
                placeholder="1"
                type="number"
                className="ring ring-gray-50 rounded-md p-2 w-fit"
              />
            </div>

            <div className="flex mt-6 space-x-5 items-center">
              <button className="rounded bg-rose-500 text-base text-white font-medium min-h-14 w-40">
                Add to Cart
              </button>
              <IoHeartOutline className="h-10 w-10" />
            </div>
          </div>

          {/*Right*/}
          <div className="rounded ring-1 ring-black ring-opacity-50 flex flex-col p-5 ml-10">
            <div className="flex items-center justify-start">
              <div className="mr-4">
                <TbTruckDelivery className="h-10 w-10" />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-medium">Home Delivery</p>
                <p className="text-base font-medium underline">3-7 days</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-start">
              <div className="mr-5 ml-1">
                <FaArrowRightArrowLeft className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium">7 Days Return Policy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full mb-16">
          <div className="flex bg-white text-rose-600 p-4 w-full bg-opacity-5 rounded-full shadow-sm mb-8">
            <h2 className="text-3xl font-semibold">Related Items</h2>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}
