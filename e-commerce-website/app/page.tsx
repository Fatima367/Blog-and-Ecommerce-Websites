import Link from "next/link";
import Footer from "./footer/page";
import Hero from "./hero/page";
import Navbar from "./navbar/Navbar";
import Products from "./products/page";
import { ChevronUp } from "lucide-react";
import SectionThree from "./hero/section3";

export default function Home() {
  return (
       <div className="relative">
        <Navbar />
        <Hero />
        <Products />
        <SectionThree />
        <Link href="/">
                <button className="bg-rose-500 p-4 rounded-md mr-6 right-6 absolute bottom-48">
                    <ChevronUp className="h-4 w-4 text-white" />
                </button>
                </Link>   
        <Footer />

       </div>
  );
}
