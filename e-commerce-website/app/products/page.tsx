import Image from "next/image";

interface Product {
    id: number,
    image : string,
    name: string,
    priceNow: string,
    priceWas: string,
}

export default function Products(){

    const products:Product[] = [{
        id:1,
        image : "/images/prodimg2.png",
        name: "Birthday Special",
        priceNow: "$200",
        priceWas: "$220"
    },
    {
        id:2,
        image : "/images/prodimg2.png",
        name: "Birthday Special",
        priceNow: "$200",
        priceWas: "$220"
    },
    {
        id:3,
        image : "/images/prodimg2.png",
        name: "Birthday Special",
        priceNow: "$200",
        priceWas: "$220"
    },
    {
        id:4,
        image : "/images/prodimg2.png",
        name: "Birthday Special",
        priceNow: "$200",
        priceWas: "$220"
    },
    ]

    return(
        <div className="flex items-center justify-center mx-auto mt-8">
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto">
          <div className="space-x-[611px] flex items-center justify-stretch">
            <div className="space-y-[20px] flex flex-col">

              <h2 className="text-[36px] font-semibold">
                Best Selling Products
              </h2>
            </div>
            <button className="px-[48px] py-[16px] space-x-[10px] rounded bg-[#DB4444] text-white mt-14">
              <p className="text-[16px] font-medium">View All</p>
            </button>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:items-center lg:justify-center lg:gap-[30px] grid grid-cols-1 space-y-6">

        {products.map((product:any)=> (
            <div className="space-y-[16px] relative shadow-md p-6" key={product.id}>
              <Image
              src="/images/Wishlist.png"
              height={30}
              width={30}
              alt="fav"
              className="absolute top-4 right-4 cursor-pointer"
               />
              <Image
                src={product.image}
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">{product.name}</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">{product.priceNow}</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
                    $160
                  </p>
                </div>
                <div className="flex space-x-[8px]">
                  <Image
                    src="/images/Five star.png"
                    height={20}
                    width={100}
                    alt="ratings"
                  />
                  <p className="text-[14px] font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>
        ))}

        </div>
        </div>
        </div>

    )
}