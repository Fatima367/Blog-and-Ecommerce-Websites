"use client";
import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function FavIcon({ product }: any) {
  const [isFav, setIsFav] = useState(false);
  const handleClick = () => {
    // Check if the product is valid before saving
    if (product && product._id) {
      // Get the current wishlist from localStorage
      const storedWishlist = localStorage.getItem("wishlist");
      let wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

      // Ensure wishlist is an array before using findIndex
      if (!Array.isArray(wishlist)) {
        console.log("Wishlist is not an array.");
        wishlist = []; // Reset to empty array if it's not valid
      }

      console.log("Wishlist:", wishlist); // Log the wishlist

      // Check if the product is already in the wishlist
      const productIndex = wishlist.findIndex(
        (item: any) => item._id === product._id
      );

      if (productIndex === -1) {
        // If the product is not in the wishlist, add it
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        console.log("Product saved to wishlist:", product);
      } else {
        // If the product is in the wishlist, remove it
        wishlist.splice(productIndex, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        console.log("Product removed from wishlist:", product);
      }

      // Toggle the favorite state
      setIsFav(!isFav);
    } else {
      console.error("Product is undefined or invalid");
    }
  };

  return (
    <button onClick={handleClick} className="absolute right-6">
      {isFav ? (
        <IoHeartSharp className="h-8 w-8 text-red-500" />
      ) : (
        <IoHeartOutline className="h-8 w-8 text-gray-500" />
      )}
    </button>
  );
}
