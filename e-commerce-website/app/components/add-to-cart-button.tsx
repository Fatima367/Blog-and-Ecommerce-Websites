"use client";

import React, { useState } from "react";

const ClientSideButton = ({ product }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const handleClick = () => {
    // Check if the product is valid before saving
    if (product && product._id) {
      // Get the current wishlist from localStorage
      const storedCart = localStorage.getItem("cart");
      let cart = storedCart ? JSON.parse(storedCart) : [];

      // Ensure wishlist is an array before using findIndex
      if (!Array.isArray(cart)) {
        console.log("Cart is not an array.");
        cart = []; // Reset to empty array if it's not valid
      }

      console.log("Cart:", cart); // Log the wishlist

      // Check if the product is already in the wishlist
      const productIndex = cart.findIndex(
        (item: any) => item._id === product._id
      );

      if (productIndex === -1) {
        // If the product is not in the wishlist, add it
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Product saved to cart:", product);
      } else {
        // If the product is in the wishlist, remove it
        cart.splice(productIndex, 1);
        localStorage.setItem("wishlist", JSON.stringify(cart));
        console.log("Product removed from wishlist:", product);
      }
    } else {
      console.error("Product is not found");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded bg-rose-500 text-base text-white font-medium min-h-14 w-40
      hover:bg-rose-800"
    >
      Add to Cart
    </button>
  );
};

export default ClientSideButton;
