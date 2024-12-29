import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

export default function Cart() {
  return (
    <div className="">
      <section className="px-20 flex flex-col items-start min-h-screen mt-10">
        <div className="flex mb-8 items-center">
          <p className="text-3xl text-red-600 font-bold">Cart</p>
          <AiOutlineShoppingCart className="ml-2 h-7 w-7 text-rose-600" />
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
                  <p className="text-xl mt-4">Price: <span className="text-red-500 font-semibold text-2xl">$120</span></p>
                </div>
                <MdDelete className="text-red-500 h-8 w-8"/>
              </div>
              <div className="flex justify-end w-full">
                <div className="flex items-center">
                  <p className="text-xl">Quantity:</p>
                  <div className="ml-3 flex items-center">
                    <FaSquarePlus className="h-9 w-9 text-green-500" />
                    <p className="text-xl mx-4">3</p>
                    <FaSquareMinus className="h-9 w-9 text-red-500" />
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
          <div className="p-6 border-b border-b-gray-200 rounded-md bg-white">
            <div className="flex gap-16">
            <div className="mb-5 flex flex-col gap-5">
              <p className="text-lg">Subtotal: </p>
              <p className="text-lg">Delivery Charges:</p>
            </div>
            <div className="mb-5 flex flex-col gap-5">
              <p className="text-lg">$360</p>
              <p className="text-lg">$20</p>
            </div>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center">Total: <span className="text-green-600 ml-36">$380</span></h2>
            <button className="w-40 h-14 bg-rose-500 rounded-md text-white text-lg">
              Chekout
            </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}