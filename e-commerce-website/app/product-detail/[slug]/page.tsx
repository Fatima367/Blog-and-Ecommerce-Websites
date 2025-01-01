import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { defineQuery, PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import ClientSideButton from "@/app/components/add-to-cart-button";
import BestSellingProducts from "@/app/components/best-selling-products";
import { ToastContainer } from "react-toastify";

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

  const { name, description, image, price, oldPrice, reviews, ratingsImage } =
    products;

  const imageUrl = image ? urlFor(image)?.width(450).height(450).url() : null;
  const ratingsImageUrl = ratingsImage
    ? urlFor(ratingsImage)?.width(100).height(20).url()
    : null;

  return (
    <div className="">
      <div className="flex flex-col items-start justify-between mx-auto lg:px-10">
        <div className="mt-10 mx-auto w-full lg:px-0 px-2">
          <div className="flex ml-0 bg-white text-rose-600 p-4 w-full bg-opacity-80 rounded-full shadow-sm">
            <h2 className="text-3xl font-semibold">{name}</h2>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row items-start justify-start lg:mt-14 mt-8
        lg:px-0 px-2 md:px-10"
        >
          <ToastContainer
            className={`lg:w-full md:w-full w-60 lg:ml-0 ml-24 md:ml-0 md:mt-0 lg:mt-0 mt-3 lg:text-lg lg:p-2`}
            hideProgressBar
          />
          {/*Left*/}
          <div
            className="bg-gray-50 rounded-md
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
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-10">
            <div
              className="flex flex-col lg:ml-16 lg:justify-center justify-start items-start
          lg:mt-0 mt-5"
            >
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
              <h2 className="text-3xl mt-4 font-bold text-red-500 flex items-center">
                ${price.toFixed(2)}
                <span className="ml-4 text-2xl text-black font-medium opacity-50 line-through">
                  {oldPrice}
                </span>
              </h2>
              <div className="text-md mt-6 max-w-96">
                <PortableText value={description} />
              </div>

              <hr className="mt-6" />

              <div className="flex space-x-8 mt-6 items-center">
                <p className="text-lg">Quantity</p>
                <div className="ring ring-gray-50 rounded-md px-4 py-1 flex items-center justify-center">
                  <p>1</p>
                </div>
              </div>

              <div className="flex mt-6 space-x-5 items-center">
                <ClientSideButton product={products} />
                <IoHeartOutline className="h-10 w-10" />
              </div>
            </div>

            {/*Right*/}
            <div
              className="rounded ring-1 ring-black ring-opacity-50 flex flex-col p-5 lg:ml-10
          lg:mt-0 mt-6 h-fit"
            >
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
        </div>

        <div className="mt-20 w-full mb-16 lg:px-0 px-2">
          <div
            className="flex bg-white text-rose-600 p-4 w-full bg-opacity-5 
          rounded-full shadow-sm mb-8"
          >
            <h2 className="text-3xl font-semibold">More Items</h2>
          </div>
          <BestSellingProducts />
        </div>
      </div>
    </div>
  );
}
