"use client";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartItems);
    setCart(cartItems);
  }, []);

  // Handle deleting an item from the wishlist
  const handleDelete = (itemId: string) => {
    const updatedCart = cart.filter((item) => item._id !== itemId); // Remove item with the given _id
    setCart(updatedCart); // Update the wishlist state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="">
      <section className="lg:px-20 px-5 flex flex-col items-start min-h-screen mt-10">
        <div className="flex mb-8 items-center">
          <p className="text-3xl text-red-600 font-bold">Cart</p>
          <AiOutlineShoppingCart className="ml-2 h-7 w-7 text-rose-600" />
        </div>
        {cart.length > 0 ? (
          <div className="bg-white shadow-md lg:p-6 p-2 rounded flex flex-col gap-8 w-full mb-16">
            {cart.map((item: any, index: any) => (
              <div
                className="p-6 border-b border-b-gray-200 rounded-md bg-white"
                key={index}
              >
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="p-2 ring-1 ring-gray-100 rounded-md mx-auto">
                    <Image
                      src={item.imageUrl}
                      height={200}
                      width={200}
                      alt="cart"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full">
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full">
                      <div className="flex flex-col">
                        <h3 className="font-bold text-2xl">{item.name}</h3>
                        <p className="text-xl mt-4">
                          Price:{" "}
                          <span className="text-red-500 font-semibold text-2xl">
                            {item.price}
                          </span>
                        </p>
                      </div>
                      {/* Delete button */}
                      <button onClick={() => handleDelete(item._id)}>
                        <MdDelete
                          className="text-red-500 h-8 w-8 lg:mt-0 mt-8 hover:scale-105
                      cursor-pointer"
                        />
                      </button>
                    </div>
                    <div className="flex justify-end w-full lg:-mt-0 -mt-7">
                      <div className="flex items-center">
                        <p className="text-xl">Quantity:</p>
                        <div className="ml-3 flex items-center">
                          <FaSquarePlus className="lg:h-9 lg:w-9 h-8 w-8 text-green-500" />
                          <p className="text-xl lg:mx-4 mx-2">
                            {item.quantity}
                          </p>
                          <FaSquareMinus className="lg:h-9 lg:w-9 h-8 w-8 text-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
              <div
                className="flex flex-col lg:flex-row lg:gap-0 gap-4 lg:items-center lg:justify-between
              justify-start"
              >
                <h2 className="text-2xl font-bold flex items-center">
                  Total: <span className="text-green-600 ml-36">$380</span>
                </h2>
                <button
                  className="w-40 h-14 bg-rose-500 rounded-md text-white text-lg
                hover:bg-rose-800"
                >
                  Chekout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        )}
      </section>
    </div>
  );
}
