"use client";

import React from "react";

const ClientSideButton = ({ product }: any) => {
  const handleClick = () => {
    // Check if the product is valid before saving
    if (product && product._id) {
      localStorage.setItem("cart", JSON.stringify(product));
      console.log("Product saved to cart:", product); // Add this to check
    } else {
      console.error("Product is undefined or invalid");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded bg-rose-500 text-base text-white font-medium min-h-14 w-40"
    >
      Add to Cart
    </button>
  );
};

export default ClientSideButton;
