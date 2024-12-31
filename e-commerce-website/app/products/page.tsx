import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { IoIosBasket } from "react-icons/io";
import FavIcon from "../components/fav-button";

const PRODUCTS_QUERY = defineQuery(`*[ 
  _type == "products"
  && defined(slug.current)
]{
  _id,
  name,
  slug,
  description,
  price,
  oldPrice,
  reviews,
  "image": image.asset->url,
  "ratingsImage": ratingsImage.asset->url
} | order(name desc)`);

export default async function Products() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  return (
    <div
      className="flex flex-col items-start justify-center mx-auto mt-8
     w-full min-h-screen "
    >
      <div className="flex mb-8 items-center lg:px-20 px-5">
        <p className="text-4xl text-red-600 font-bold">Bundles</p>
        <IoIosBasket className="ml-2 h-7 w-7 text-rose-600" />
      </div>
      <div
        className="relative flex flex-col sm:grid-cols-2 lg:grid-cols-4 md:grid md:grid-cols-2 gap-8
           mb-8 lg:w-full w-80 md:w-full mx-auto items-center justify-center lg:px-10 px-5"
      >
        {products?.length > 0 ? (
          products.map((product: any) => (
            <div
              className="bg-white rounded-lg flex flex-col p-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto lg:hover:scale-105 transition duration-100 shadow-md
           lg:space-y-4"
              key={product._id}
            >
              <FavIcon product={product} />
              <Image
                src={product.image || "/placeholder-image.png"}
                width={300}
                height={280}
                alt="related-item"
                className="self-center w-full h-auto object-cover mx-auto"
              />

              <div className="space-y-2">
                <p className="text-2xl font-bold">{product.name}</p>
                <div className="flex space-x-3 items-center">
                  <p className="text-2xl text-red-500 font-semibold">
                    ${product.price}
                  </p>
                  <p className="text-xl font-medium line-through opacity-50">
                    {product.oldPrice}
                  </p>
                </div>
                <div className="flex space-x-3 items-center">
                  <Image
                    src={
                      product.ratingsImage || "/placeholder-ratingsImage.png"
                    }
                    height={20}
                    width={100}
                    alt="ratings"
                  />
                  <p className="text-lg font-semibold opacity-50">
                    ({product.reviews})
                  </p>
                </div>
                <div className="flex justify-center mx-auto">
                  <Link href={`/product-detail/${product.slug.current}`}>
                    <button
                      className="lg:mt-4 mt-3 mb-5 gap-2 rounded-full bg-rose-500 text-white min-h-12 w-36
                  font-medium text-base hover:bg-rose-800"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Products available.</p>
        )}
      </div>
    </div>
  );
}
