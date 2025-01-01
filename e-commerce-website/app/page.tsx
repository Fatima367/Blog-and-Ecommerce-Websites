import Link from "next/link";
import Hero from "./hero/page";
import { ChevronUp } from "lucide-react";
import BestSellingProducts from "./components/best-selling-products";
import SectionThree from "./hero/section3";
import SectionFour from "./hero/section4";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="flex flex-col">
        <div
          className="bg-rose-600 text-white p-2 w-full flex bg-opacity-60 lg:rounded-3xl
        lg:mt-auto mt-10 rounded-2xl mb-5"
        >
          <h2 className="lg:text-4xl text-3xl font-semibold lg:ml-5">
            Best Selling Products
          </h2>
        </div>
        <BestSellingProducts />
        <div className="flex items-center justify-center mx-auto lg:mt-2 mt-4 mb-8 lg:mb-12">
          <Link href="/products">
            <button
              className="gap-2 rounded-full bg-rose-500 text-white min-h-14 w-44
           font-medium text-lg hover:bg-rose-800"
            >
              View All Bundles
            </button>
          </Link>
        </div>
      </div>
      <SectionThree />
      <SectionFour />
      <Link href="/">
        <button
          className="bg-rose-500 p-4 rounded-md lg:mr-6 right-6 absolute lg:bottom-14
        bottom-6 hover:bg-rose-800"
        >
          <ChevronUp className="h-4 w-4 text-white" />
        </button>
      </Link>
    </div>
  );
}