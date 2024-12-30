import Image from "next/image";
import Products from "../products/page";
import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function ProductDetailsPage() {
  return (
    <div className="">
      <div className="flex flex-col items-start justify-between mx-auto lg:px-10">
        <div className="mt-10 mx-auto w-full">
          <div className="flex ml-0 bg-white text-rose-600 p-4 w-full bg-opacity-80 rounded-full shadow-sm">
            <h2 className="text-3xl font-semibold">Birthday Special</h2>
          </div>
        </div>

        <div className="flex flex-row items-start justify-start mt-14 ">
          {/*Left*/}
          <div
            className="bg-gray-50 rounded
                flex items-center justify-center"
          >
            <Image
              src="/images/prodimg4.png"
              width={450}
              height={450}
              alt="gamepad"
              className="lg:w-full lg:h-auto"
            />
          </div>

          {/*Center*/}
          <div className="flex flex-col ml-16 justify-center items-start">
            <h1 className="text-3xl font-bold">Birthday Special</h1>
            <div className="space-x-4 flex flex-row items-center justify-center">
              <div className="space-x-2 flex items-center justify-center mt-3">
                <Image
                  src="/images/Four Star.png"
                  height={20}
                  width={100}
                  alt="ratings"
                />
                <p className="text-base opacity-50">(150 Reviews)</p>
              </div>
              <div className="space-x-4 flex flex-row items-center justify-center mt-3">
                <p>|</p>
                <p className="text-green-500 text-lg opacity-60">In Stock</p>
              </div>
            </div>
            <h2 className="text-3xl mt-4 font-bold text-red-500">$192.00</h2>
            <p className="text-md mt-6 max-w-96">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
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
