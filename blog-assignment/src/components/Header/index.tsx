import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
      <Link href={"/"} className="text-2xl font-bold underline">
        Sanity Blog
      </Link>

      <nav className="flex">
        <ul className="flex gap-4">
          <li>
            <Link href="/about" className="hover:underline cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;