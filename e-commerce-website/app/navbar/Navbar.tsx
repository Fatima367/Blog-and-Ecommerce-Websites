"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { IoIosBasket } from "react-icons/io";
import { IoHeartSharp, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className="top-0 p-5 flex relative items-center justify-between
     text-white bg-black"
    >
      <div className="flex justify-start lg:mx-5 items-center">
        <button
          className="absolute cursor-pointer top-6 
                    right-4 w-[2rem] h-[1rem] lg:hidden"
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
            <IoIosBasket className=" h-6 w-6 ml-2" />
          </p>
        </Link>
        <Link href="/wishlist">
          <p className="hover:text-amber-300 text-xl flex items-center">
            Wishlist
            <IoHeartSharp className=" h-6 w-6 ml-2" />
          </p>
        </Link>
        <Link href="/cart">
          <p className="hover:text-amber-300 text-xl flex items-center">
            Cart
            <FaShoppingCart className="h-6 w-6 ml-2" />
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
              <IoIosBasket className=" h-6 w-6 mr-2 mb-1" />
              Bundles
            </li>
          </Link>
          <Link href="/wishlist">
            <li className="hover:text-amber-300 text-xl flex items-center">
              <IoHeartSharp className=" h-6 w-6 mr-2 mb-1" />
              Wishlist
            </li>
          </Link>
          <Link href="/cart">
            <li className="hover:text-amber-300 text-xl flex items-center">
              <FaShoppingCart className="h-6 w-6 mr-2 mb-1" /> Cart
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
