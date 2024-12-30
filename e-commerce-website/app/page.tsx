import Link from "next/link";
import Hero from "./hero/page";
import { ChevronUp } from "lucide-react";
import BestSellingProducts from "./components/best-selling-products"
import SectionThree from "./hero/section3";
import SectionFour from "./hero/section4";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <BestSellingProducts />
      <SectionThree />
      <SectionFour />
      <Link href="/">
        <button
          className="bg-rose-500 p-4 rounded-md lg:mr-6 right-6 absolute lg:bottom-14
        bottom-6"
        >
          <ChevronUp className="h-4 w-4 text-white" />
        </button>
      </Link>
    </div>
  );
}
