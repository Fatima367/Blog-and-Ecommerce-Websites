import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

export default function Cart() {
  return (
    <div className="w-screen">
      <Navbar />
      <section className="p-[80px] flex flex-col items-start justify-between">
        <div className="space-x-[12px] flex">
          <p className="text-[14px] opacity-50 ">Home</p>
          <p className="text-[14px] opacity-50">/</p>
          <p className="text-[14px]">Cart</p>
        </div>

        <div className="space-y-[80px] mt-[80px] flex items-center justify-center">
          <div className="space-y-[24px]">
            <div className="space-y-[40px] flex flex-col">
              {/* Header Row */}
              <div className="rounded shadow p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-normal w-1/4 text-center">
                    Product
                  </p>
                  <p className="text-[16px] font-normal w-1/4 text-center">
                    Price
                  </p>
                  <p className="text-[16px] font-normal w-1/4 text-center">
                    Quantity
                  </p>
                  <p className="text-[16px] font-normal w-1/4 text-center">
                    Subtotal
                  </p>
                </div>
              </div>

              {/* Product 1 Row */}
              <div className="rounded shadow p-6 flex items-center justify-between">
                <div className="flex items-center w-1/4">
                  <Image
                    src="/images/prodimg.jpg"
                    height={54}
                    width={54}
                    alt="cartitem"
                    className="mr-4"
                  />
                  <p className="text-[16px] font-normal">LCD Monitor</p>
                </div>
                <p className="text-[16px] font-normal w-1/4 text-center">
                  $650
                </p>
                <div className="w-1/4 text-center">
                  <div className="ring-1 ring-black ring-opacity-40 rounded p-1 inline-block">
                    <div className="flex items-center space-x-2">
                      <p className="text-[16px]">01</p>
                      <div className="flex flex-col">
                        <ChevronUp className="h-[16px] w-[16px]" />
                        <ChevronDown className="h-[16px] w-[16px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] font-normal w-1/4 text-center">
                  $650
                </p>
              </div>

              {/* Product 2 Row */}
              <div className="rounded shadow p-6 flex items-center justify-between">
                <div className="flex items-center w-1/4">
                  <Image
                    src="/images/prodimg.jpg"
                    height={54}
                    width={54}
                    alt="cartitem2"
                    className="mr-4"
                  />
                  <p className="text-[16px] font-normal">H1 Gamepad</p>
                </div>
                <p className="text-[16px] font-normal w-1/4 text-center">
                  $550
                </p>
                <div className="w-1/4 text-center">
                  <div className="ring-1 ring-black ring-opacity-40 rounded p-1 inline-block">
                    <div className="flex items-center space-x-2">
                      <p className="text-[16px]">02</p>
                      <div className="flex flex-col">
                        <ChevronUp className="h-[16px] w-[16px]" />
                        <ChevronDown className="h-[16px] w-[16px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] font-normal w-1/4 text-center">
                  $1100
                </p>
              </div>
            </div>

            <div className="space-x-[757px]">
              <button className="space-x-[10px] px-[48px] py-[16px] rounded ring-1 ring-black ring-opacity-50">
                <p className="text-[16px] font-medium">View All Products</p>
              </button>
              <button className="space-x-[10px] px-[48px] py-[16px] rounded ring-1 ring-black ring-opacity-50">
                <p className="text-[16px] font-medium">Update Cart</p>
              </button>
            </div>
          </div>
        </div>

        <div className="space-x-[173px] mt-[80px] flex flex-row mb-[140px]">
          <div className="space-x-[16px] flex">
            <div className="ring-1 ring-black rounded flex items-center justify-between w-[300px] h-[56px]">
              <p className="text-[14px] opacity-50 ml-5">Coupon Code</p>
            </div>

            <button
              className="space-x-[10px] px-[48px] py-[16px] rounded ring-1 ring-black ring-opacity-50
                text-white bg-[#DB4444] h-[56px] w-[211px] flex items-center justify-center"
            >
              <p className="text-[16px] font-medium">Apply Coupon</p>
            </button>
          </div>

          <div className="ring-[1.5px] ring-black rounded py-10 px-5 flex flex-col w-[470px] h-[324px]">
            <p className="text-[20px] font-medium">Cart Total</p>

            <div className="flex items-center justify-center my-4">
              <p className="text-[16px]">Subtotal:</p>
              <p className="text-[16px] ml-72">$1750</p>
            </div>

            <hr />

            <div className="flex items-center justify-center my-4">
              <p className="text-[16px]">Shipping:</p>
              <p className="text-[16px] ml-[295px]">Free</p>
            </div>

            <hr />

            <div className="flex items-center justify-center my-4">
              <p className="text-[16px]">Total:</p>
              <p className="text-[16px] ml-[305px]">$1750</p>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="space-x-[10px] px-[48px] py-[16px] rounded ring-1 ring-black ring-opacity-50
                text-white bg-[#DB4444]"
              >
                <p className="text-[16px] font-medium">Proceed to checkout</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}