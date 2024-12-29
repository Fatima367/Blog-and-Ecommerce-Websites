import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function Wishlist() {
  return (
    <div className="">
      <section className="px-20 flex flex-col items-start min-h-screen mt-10">
        <div className="flex mb-8 items-center">
          <p className="text-3xl text-red-600 font-bold">Wishlist</p>
          <IoHeartSharp className="ml-2 h-7 w-7 text-rose-600" />
        </div>

        <div className="bg-white shadow-md p-6 rounded flex flex-col gap-8 w-full mb-16">
          <div className="p-6 border-b border-b-gray-200 rounded-md bg-white">
            <div className="flex gap-5">
            <div className="p-2 ring-1 ring-gray-100 rounded-md">
                <Image
                src="/images/prodimg5.png"
                height={200}
                width={200}
                alt="cart"
                 />
                </div>
              <div className="flex flex-col items-start justify-between w-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="font-bold text-2xl">Birthday Special</h3>
                  <p className="text-lg line-clamp-2 max-w-96 min-h-14">
                  PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
                  </p>
                  <p className="text-xl mt-4">Price: <span className="text-red-500 font-semibold text-2xl">$120</span></p>
                </div>
                <MdDelete className="text-red-500 h-8 w-8"/>
              </div>
              <div className="flex justify-end w-full">
              <button className="rounded bg-rose-500 text-base text-white font-medium min-h-14 w-40">
                Add to Cart
              </button>
              </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </div>
  );
}