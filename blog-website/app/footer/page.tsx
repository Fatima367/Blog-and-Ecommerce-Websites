import Link from "next/link";
import {
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-t-gray-300">
      <div className="lg:flex p-6 grid items-center justify-center mx-auto bg-blue-950">
        <div className="flex gap-5 ">
          <p className="text-white text-2xl">Connect with us:</p>
          <Link
            href={
              "https://x.com/Fatimaa_FS"
            }
            target="_blank"
          >
            <FaTwitter className="text-white h-6 w-6 hover:scale-105 hover:text-blue-200" />
          </Link>
        </div>
      </div>
      <div className="h-[1px] bg-[#131313] opacity-20 mt-1"> </div>
      <div className="flex items-center bg-white p-5">
        <div className="flex justify-center mx-auto">
          <p className="text-lg text-gray-900">
            Copyright ©2024 | Powered by FF
          </p>
        </div>
      </div>
    </footer>
  );
}
