"use client";
import { useState, useEffect } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toast } from "react-toastify";

export default function FavIcon2({ product }: any) {
  const [isFav, setIsFav] = useState(false);

  // Check if the current environment is client-side
  const isClient = typeof window !== "undefined";

  const savedToWl = () => toast("Item added to wishlist!");
  const removed = () => toast("Item removed from wishlist!");

  useEffect(() => {
    if (isClient) {
      const storedWishlist = localStorage.getItem("wishlist");
      const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

      // Check if the product is in the wishlist
      const isProductInWishlist = wishlist.some(
        (item: any) => item._id === product._id
      );

      setIsFav(isProductInWishlist);
    }
  }, [product._id, isClient]); // Run again if product._id or isClient change

  const handleClick = (product: any) => {
    if (product && product._id && isClient) {
      const storedWishlist = localStorage.getItem("wishlist");
      let wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

      if (!Array.isArray(wishlist)) {
        wishlist = []; // Reset to empty array if it's not valid
      }

      const productIndex = wishlist.findIndex(
        (item: any) => item._id === product._id
      );

      if (productIndex === -1) {
        // If the product is not in the wishlist, add it
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        savedToWl();
      } else {
        // If the product is in the wishlist, remove it
        wishlist.splice(productIndex, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        removed();
      }

      setIsFav(!isFav);
    } else {
      console.error("Product is undefined or invalid");
    }
  };

  return (
    <button onClick={() => handleClick(product)}>
      {isFav ? (
        <IoHeartSharp className="h-10 w-10 text-red-500 hover:scale-105" />
      ) : (
        <IoHeartOutline className="h-10 w-10 hover:scale-105" />
      )}
    </button>
  );
}
