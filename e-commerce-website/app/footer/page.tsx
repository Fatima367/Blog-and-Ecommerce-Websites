import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-t-gray-300">
      <div className="lg:flex p-6 grid items-center justify-center mx-auto bg-black">
        <div className="flex gap-5 ">
          <p className="text-white text-xl">Connect with us:</p>
          <FaFacebook className="text-white h-6 w-6 hover:text-amber-300" />
          <FaInstagram className="text-white h-6 w-6 hover:text-amber-300" />
          <FaWhatsapp className="text-white h-6 w-6 hover:text-amber-300" />
          <FaPhoneFlip className="text-white h-6 w-6 hover:text-amber-300" />
        </div>
      </div>
      <div className="h-[1px] bg-[#131313] opacity-20 mt-1"> </div>
      <div className="flex items-center bg-white p-5">
        <div className="flex justify-center mx-auto">
          <p className="text-base text-gray-900">
            Copyright ©2024 | Powered by FF
          </p>
        </div>
      </div>
    </footer>
  );
}
