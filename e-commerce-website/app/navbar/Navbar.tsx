import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { IoIosBasket } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav
      className="top-0 p-5 flex relative items-center justify-between
     text-white bg-black"
    >
      <div className="flex justify-start lg:mx-5">
        <Link href="/">
          <h1 className="text-3xl font-bold hover:text-amber-300 hover:cursor-pointer flex items-center">
            BlissedWraps <GiBowTieRibbon className="h-7 w-7" />
          </h1>
        </Link>
      </div>
      <div className="flex justify-end right-6 mr-5 gap-6 items-center">
      <Link href="/products">
          <p className="text-xl hover:text-amber-300 flex items-center">Bundles
            <IoIosBasket className=" h-6 w-6 ml-2"/>
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
    </nav>
  );
};

export default Navbar;
