import { AiFillBank } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function SectionThree() {
  return (
    <div className="p-8 bg-rose-50 border-t border-t-gray-200">
      <div className="flex flex-col items-center justify-center mx-auto gap-5 mb-12">
        <h1
          className="text-4xl font-bold bg-opacity-90 p-4 rounded-full
                 lg:px-8 text-center"
        >
          Easy Payment Methods
        </h1>
        <div className="lg:flex-row mt-8 lg:gap-20 gap-8 flex flex-col">
          <div className="flex flex-col items-center">
            <GiTakeMyMoney className="h-20 w-20" />
            <p className="text-2xl"> Cash on delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <AiFillBank className="h-20 w-20" />
            <p className="text-2xl">Bank Transfer</p>
          </div>
          <div className="flex flex-col items-center">
            <IoPhonePortraitOutline className="h-20 w-20" />
            <p className="text-2xl">Online Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
