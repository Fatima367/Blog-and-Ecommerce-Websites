import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";

interface Product {
  id: number;
  image: string;
  name: string;
  priceNow: string;
  priceWas: string;
}

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      image: "/images/prodimg2.png",
      name: "Birthday Special",
      priceNow: "$200",
      priceWas: "$220",
    },
    {
      id: 2,
      image: "/images/prodimg3.png",
      name: "Birthday Special",
      priceNow: "$200",
      priceWas: "$220",
    },
    {
      id: 3,
      image: "/images/prodimg4.png",
      name: "Birthday Special",
      priceNow: "$200",
      priceWas: "$220",
    },
    {
      id: 4,
      image: "/images/prodimg5.png",
      name: "Birthday Special",
      priceNow: "$200",
      priceWas: "$220",
    },
  ];

  return (
    <div className="flex items-center justify-center mx-auto mt-8 w-full">
      <div
        className="relative flex sm:grid-cols-2 lg:grid-cols-4 md:grid md:grid-cols-2 gap-8
           overflow-x-auto lg:overflow-visible mb-8 lg:w-full w-80 md:w-full mx-auto px-5"
      >
        {products.map((product: any) => (
          <div
            className="space-y-4 relative shadow-md p-6 w-80 md:w-full lg:w-auto rounded-md hover:scale-105 transition duration-100"
            key={product.id}
          >
            <IoHeartOutline className="h-8 w-8 right-5 absolute" />
            <Image
              src={product.image}
              width={300}
              height={280}
              alt="related-item"
              className="self-center mx-auto"
            />

            <div className="space-y-2">
              <p className="text-2xl font-bold">{product.name}</p>
              <div className="flex space-x-3 items-center">
                <p className="text-2xl text-red-500 font-semibold">
                  {product.priceNow}
                </p>
                <p className="text-xl font-medium line-through opacity-50">
                  $160
                </p>
              </div>
              <div className="flex space-x-3 items-center">
                <Image
                  src="/images/Five star.png"
                  height={20}
                  width={100}
                  alt="ratings"
                />
                <p className="text-lg font-semibold opacity-50">(88)</p>
              </div>
              <div className="flex justify-center mx-auto">
                <Link href="/product-detail">
                  <button
                    className="mt-4 mb-5 gap-2 rounded-full bg-rose-500 text-white min-h-12 w-36
                  font-medium text-base"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
