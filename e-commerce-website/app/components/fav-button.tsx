"use client";
import { useState, useEffect } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toast } from "react-toastify";

export default function FavIcon({ product }: any) {
  const [isFav, setIsFav] = useState(false);
  const savedToWl = () => toast("Item added to wishlist!");
  const removed = () => toast("Item removed from wishlist!");


  useEffect(() => {
    
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

    // Check if the product is in the wishlist
    const isProductInWishlist = wishlist.some(
      (item: any) => item._id === product._id
    );

    
    setIsFav(isProductInWishlist);
  }, [product._id]); // Re-run if the product changes (useEffect dependency array)

  const handleClick = () => {
    if (product?._id) {
      
      const storedWishlist = localStorage.getItem("wishlist");
      let wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

      // Ensure wishlist is an array before using findIndex
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

      //to Toggle fav state
      setIsFav(!isFav);
    } else {
      console.error("Product is undefined or invalid");
    }
  };

  return (
      <button onClick={handleClick} className="absolute right-6">
        {isFav ? (
          <IoHeartSharp className="h-8 w-8 text-red-500 hover:scale-105" />
        ) : (
          <IoHeartOutline className="h-8 w-8 hover:scale-105" />
        )}
      </button>
  );
}
