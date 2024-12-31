"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Wishlist({ product }: any) {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const favItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(favItems);
  }, []);

  const renderDescription = (description: any) => {
    if (Array.isArray(description)) {
      return description
        .map((block: any) => {
          // Check if each block has 'children' and extract text from them
          if (block.children && Array.isArray(block.children)) {
            return block.children.map((child: any) => child.text).join(" ");
          }
          return "";
        })
        .join(" "); // Join the blocks if there are multiple
    }
    return "";
  };

  // Handle deleting an item from the wishlist
  const handleDelete = (itemId: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== itemId); // Remove item with the given _id
    setWishlist(updatedWishlist); // Update the wishlist state
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
  };

  return (
    <div>
      <section className="lg:px-20 px-5 flex flex-col items-start min-h-screen mt-10">
        <div className="flex mb-8 items-center">
          <p className="text-3xl text-red-600 font-bold">Wishlist</p>
          <IoHeartSharp className="ml-2 h-7 w-7 text-rose-600" />
        </div>

        {wishlist.length > 0 ? (
          <div className="bg-white shadow-md p-6 rounded flex flex-col gap-8 w-full mb-16">
            {wishlist.map((item: any) => (
              <div
                className="p-6 border-b border-b-gray-200 rounded-md bg-white"
                key={item._id}
              >
                <div className="flex gap-5 flex-col lg:flex-row">
                  <div className="p-2 ring-1 ring-gray-100 rounded-md mx-auto">
                    <Image
                      src={item.image}
                      height={200}
                      width={200}
                      alt="wishlist"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full">
                    <div className="lg:flex-row flex flex-col lg:items-start justify-between w-full">
                      <div className="flex flex-col">
                        <h3 className="font-bold text-2xl">{item.name}</h3>
                        <p className="text-lg line-clamp-2 lg:max-w-96 min-h-14">
                          {renderDescription(item.description)}
                        </p>
                        <p className="text-xl mt-4 lg:justify-start flex items-center justify-between">
                          Price:
                          <span className="text-red-500 font-semibold text-2xl lg:ml-5">
                            {item.price}
                          </span>
                        </p>
                      </div>
                      {/* Delete button */}
                      <button onClick={() => handleDelete(item._id)}>
                        <MdDelete
                          className="text-red-500 h-8 w-8 lg:mt-0 mt-10 hover:scale-105
                      cursor-pointer"
                        />
                      </button>
                    </div>
                    <div className="flex justify-end w-full lg:-mt-0 -mt-10">
                      <button
                        className="rounded bg-rose-500 text-base text-white font-medium min-h-14 w-40
                      hover:bg-rose-800"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-500">No items in the wishlist.</p>
        )}
      </section>
    </div>
  );
}
