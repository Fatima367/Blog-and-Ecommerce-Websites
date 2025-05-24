"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { IoIosBasket } from "react-icons/io";
import { IoHeartSharp, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [favItems, setFavItems] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
      setCartItems(cart.length);

      const wishlist = JSON.parse(localStorage.getItem("wishlist") ?? "[]");
      setFavItems(wishlist.length);
    }
  }, []);

  return (
    <nav className="top-0 p-5 flex relative items-center justify-between text-white bg-black">
      <div className="flex justify-start lg:mx-5 items-center">
        <button
          className="absolute cursor-pointer top-6 right-4 w-[2rem] h-[1rem] lg:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <RxCross2 className="h-8 w-8 text-white" />
          ) : (
            <IoMenu className="h-8 w-8 text-white" />
          )}
        </button>
        <Link href="/">
          <h1 className="text-3xl font-bold hover:text-amber-300 hover:cursor-pointer flex items-center">
            BlissedWraps <GiBowTieRibbon className="h-7 w-7" />
          </h1>
        </Link>
      </div>
      <div className="lg:flex justify-end right-6 mr-5 gap-6 items-center hidden">
        <Link href="/products">
          <p className="text-xl hover:text-amber-300 flex items-center">
            Bundles
            <IoIosBasket className=" h-7 w-7 ml-2" />
          </p>
        </Link>
        <Link href="/wishlist">
          <p className="hover:text-amber-300 text-xl flex items-center">
            Wishlist
            <IoHeartSharp className=" h-7 w-7 ml-2" />
            {favItems > 0 && (
              <span
                className="absolute top-3 right-32 bg-red-500 text-white text-xs h-5 w-5 rounded-full 
                flex items-center justify-center mx-auto"
              >
                {favItems}
              </span>
            )}
          </p>
        </Link>
        <Link href="/cart">
          <p className="hover:text-amber-300 text-xl flex items-center">
            Cart
            <FaShoppingCart className="h-7 w-7 ml-2" />
            {cartItems > 0 && (
              <span
                className="absolute top-3 right-7 bg-red-500 text-white text-xs h-5 w-5 rounded-full 
                flex items-center justify-center mx-auto"
              >
                {cartItems}
              </span>
            )}
          </p>
        </Link>
      </div>
      {showNav && (
        <ul
          className="flex flex-col bg-gray-500 bg-opacity-65 rounded-md p-6 justify-start right-4 
      gap-6 items-start lg:hidden absolute z-30 top-14 shadow-md"
        >
          <Link href="/products">
            <li className="text-xl hover:text-amber-300 flex items-center">
              <IoIosBasket className=" h-7 w-7 mr-2 mb-2" />
              Bundles
            </li>
          </Link>
          <Link href="/wishlist">
            <li className="hover:text-amber-300 text-xl flex items-center">
              <IoHeartSharp className=" h-7 w-7 mr-2 mb-1" />
              Wishlist
              {favItems > 0 && (
                <span
                  className="absolute left-2 bottom-24 bg-red-500 text-white text-xs h-5 w-5 rounded-full 
            flex items-center justify-center mx-auto"
                >
                  {favItems}
                </span>
              )}
            </li>
          </Link>
          <Link href="/cart">
            <li className="hover:text-amber-300 text-xl flex items-center">
              <FaShoppingCart className="h-7 w-7 mr-2 mb-1" /> Cart
              {cartItems > 0 && (
                <span
                  className="absolute left-2 bottom-11 bg-red-500 text-white text-xs h-5 w-5 rounded-full 
            flex items-center justify-center mx-auto"
                >
                  {cartItems}
                </span>
              )}
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;