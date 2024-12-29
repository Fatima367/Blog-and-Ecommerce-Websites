import Link from "next/link";
import Hero from "./hero/page";
import Products from "./products/page";
import { ChevronUp } from "lucide-react";
import SectionThree from "./hero/section3";
import SectionFour from "./hero/section4";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="space-y-14 flex flex-col items-start lg:px-8">
        <div className="bg-rose-600 text-white p-2 w-full flex bg-opacity-60 rounded-3xl">
          <h2 className="text-[36px] font-semibold ml-5">
            Best Selling Products
          </h2>
        </div>
        <Products />
      </div>
      <div className="flex items-center justify-center mx-auto mt-8 mb-8">
        <button
          className="gap-2 rounded-full bg-rose-500 text-white min-h-14 w-36
           font-medium text-base"
        >
          View All
        </button>
      </div>
      <SectionThree />
      <SectionFour />
      <Link href="/">
        <button className="bg-rose-500 p-4 rounded-md mr-6 right-6 absolute bottom-14">
          <ChevronUp className="h-4 w-4 text-white" />
        </button>
      </Link>
    </div>
  );
}
