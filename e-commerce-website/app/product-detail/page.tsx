import Image from "next/image";

export default function ProductDetailsPage() {
  return (
    <div className="w-screen">
      <hr className="mt-[16px]" />
      <div className="flex flex-col items-start justify-between mx-auto">
      <div className="p-[80px]">
        <div className="space-x-[12px] flex ml-0">
          <p className="text-[14px] opacity-50 ">Account</p>
          <p className="text-[14px] opacity-50">/</p>
          <p className="text-[14px] opacity-50 ">Gaming</p>
          <p className="text-[14px] opacity-50">/</p>
          <p className="text-[14px]">Havic HV G-92 Gamepad</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center p-[80px]">
        {/*Left*/}
        <div className="flex flex-col gap-[16px]">
          <div
            className="bg-[#F5F5F5] rounded w-[170px] h-[138px]
                flex items-center justify-center"
          >
            <Image
              src="/images/prodimg.jpg"
              width={121}
              height={114}
              alt="gamepad"
            />
          </div>

          <div
            className="bg-[#F5F5F5] rounded w-[170px] h-[138px]
                flex items-center justify-center"
          >
            <Image
              src="/images/prodimg.jpg"
              width={121}
              height={114}
              alt="gamepad"
            />
          </div>

          <div
            className="bg-[#F5F5F5] rounded w-[170px] h-[138px]
                flex items-center justify-center"
          >
            <Image
              src="/images/prodimg.jpg"
              width={121}
              height={114}
              alt="gamepad"
            />
          </div>

          <div
            className="bg-[#F5F5F5] rounded w-[170px] h-[138px]
                flex items-center justify-center"
          >
            <Image
              src="/images/prodimg.jpg"
              width={121}
              height={114}
              alt="gamepad"
            />
          </div>
        </div>

        {/*Center*/}
        <div
          className="bg-[#F5F5F5] rounded w-[500px] h-[600px]
                flex items-center justify-center ml-[30px]"
        >
          <Image
            src="/images/prodimg.jpg"
            width={446}
            height={315}
            alt="gamepad"
          />
        </div>

        {/*Right*/}
        <div className="flex flex-col ml-[70px] justify-center items-start">
          <h1 className="text-[24px] font-semibold">Havic HV G-92 Gamepad</h1>
          <div className="space-x-[16px] flex flex-row items-center justify-center">
            <div className="space-x-[8px] flex items-center justify-center ">
              <Image
                src="/images/Four Star.png"
                height={20}
                width={100}
                alt="ratings"
              />
              <p className="text-[14px] opacity-50">(150 Reviews)</p>
            </div>
            <div className="space-x-[16px] flex flex-row items-center justify-center">
              <p>|</p>
              <p className="text-[#00FF66] text-[14px] opacity-60">In Stock</p>
            </div>
          </div>
          <h2 className="text-[24px] mt-[16px]">$192.00</h2>
          <p className="text-[14px] mt-[24px] w-[373px]">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <hr className="mt-[24px]" />

          <div className="flex items-center justify-center space-x-[24px]">
            <h1 className="text-[20px]"> Colours: </h1>
            <div className="space-x-[8px] flex items-center justify-center">
              <div
                className="rounded-full bg-[#A0BCE0] h-[12px] w-[12px]
                    ring-2 ring-black ring-offset-2 ring-offset-white"
              ></div>
              <div className="rounded-full bg-[#E07575] h-[20px] w-[20px]"></div>
            </div>
          </div>

          <div className="space-x-[24px] mt-[24px] flex">
            <h2 className="text-[20px]">Size: </h2>
            <div className="flex space-x-[16px]">
              <div
                className="ring-1 ring-opacity-50 ring-black rounded
                        h-[32px] w-[32px] flex items-center justify-center"
              >
                <p className="text-[14px] font-medium">XS</p>
              </div>
              <div
                className="ring-1 ring-opacity-50 ring-black rounded
                        h-[32px] w-[32px] flex items-center justify-center"
              >
                <p className="text-[14px] font-medium">S</p>
              </div>
              <div
                className="ring-1 ring-opacity-50 ring-black rounded
                        h-[32px] w-[32px] flex items-center justify-center bg-[#DB4444]"
              >
                <p className="text-[14px] text-white font-medium">M</p>
              </div>
              <div
                className="ring-1 ring-opacity-50 ring-black rounded
                        h-[32px] w-[32px] flex items-center justify-center"
              >
                <p className="text-[14px] font-medium">L</p>
              </div>
              <div
                className="ring-1 ring-opacity-50 ring-black rounded
                        h-[32px] w-[32px] flex items-center justify-center"
              >
                <p className="text-[14px] font-medium">XL</p>
              </div>
            </div>
          </div>

          <div className="flex mt-[24px] space-x-[16px]">
            <Image
              src="/images/quantity.png"
              height={44}
              width={159}
              alt="quantity"
            />
            <button className="rounded space-x-[10px] px-[48px] py-[10px] bg-[#DB4444]">
              <p className="text-[16px] text-white font-medium">Buy Now</p>
            </button>
            <div
              className="ring-1 ring-opacity-50 ring-black rounded
                        h-[40px] w-[40px] flex items-center justify-center"
            >
              <Image
                src="/images/Wishlist.png"
                height={32}
                width={32}
                alt="wishlist"
              />
            </div>
          </div>

          <div
            className="rounded ring-1 ring-black ring-opacity-50 flex flex-col
                mt-[40px] h-[180px] w-full p-[16px] "
          >
            <div className="flex items-center justify-center">
              <div className="mr-[16px]">
                <Image
                  src="/images/icon-delivery.png"
                  height={40}
                  width={40}
                  alt="delivery"
                />
              </div>
              <div className="flex flex-col space-y-[16px]">
                <p className="text-[16px] font-medium">Free Delivery</p>
                <p className="text-[12px] font-medium underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <hr className="mt-[16px] mb-[16px]" />
            <div className="flex items-center justify-center">
              <div className="mr-[16px]">
                <Image
                  src="/images/Icon-return.png"
                  height={40}
                  width={40}
                  alt="delivery"
                />
              </div>
              <div className="flex flex-col space-y-[16px]">
                <p className="text-[16px] font-medium">Return Delivery</p>
                <p className="text-[12px] font-medium">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[80px] ">
        <div className="flex space-x-[16px]">
            <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
            <p className="font-semibold text-[16px] text-[#DB4444] my-auto">Related Item</p>
        </div>

        <div className="flex items-center justify-center gap-[30px] mt-[60px] mb-[140px]">

            <div className="space-y-[16px]">
                
                <Image src="/images/riimage.png" width={270} height={250} alt="related-item" />

                <div className="space-y-[8px]">
                    <p className="text-[16px] font-medium">HAVIT HV-G92 Gamepad</p>
                    <div className="flex space-x-[12px]">
                        <p className="text-[16px] text-[#DB4444] font-medium">$120</p>
                        <p className="text-[16px] font-medium line-through opacity-50">$160</p>
                    </div>
                    <div className="flex space-x-[8px]">
                        <Image src="/images/Five star.png" height={20} width={100} alt="ratings" />
                    <p className="text-[14px] font-semibold opacity-50">(88)</p>
                    </div>
                  </div>  
            </div>
            
            <div className="space-y-[16px]">

                <Image src="/images/riimage2.png" width={270} height={250} alt="related-item" />

                <div className="space-y-[8px]">
                    <p className="text-[16px] font-medium">AK-900 Wired Keyboard</p>
                    <div className="flex space-x-[12px]">
                        <p className="text-[16px] text-[#DB4444] font-medium">$960</p>
                        <p className="text-[16px] font-medium line-through opacity-50">$1160</p>
                    </div>
                    <div className="flex space-x-[8px]">
                        <Image src="/images/Four star.png" height={20} width={100} alt="ratings" />
                    <p className="text-[14px] font-semibold opacity-50">(75)</p>
                    </div>
                </div>
            </div>    
            
            <div className="space-y-[16px]">

                <Image src="/images/riimage3.png" width={270} height={250} alt="related-item" />

                <div className="space-y-[8px]">
                    <p className="text-[16px] font-medium">IPS LCD Gaming Monitor</p>
                    <div className="flex space-x-[12px]">
                        <p className="text-[16px] text-[#DB4444] font-medium">$370</p>
                        <p className="text-[16px] font-medium line-through opacity-50">$400</p>
                    </div>
                    <div className="flex space-x-[8px]">
                        <Image src="/images/Five star.png" height={20} width={100} alt="ratings" />
                    <p className="text-[14px] font-semibold opacity-50">(90)</p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-[16px]">

                <Image src="/images/riimage4.png" width={270} height={250} alt="related-item" />

                <div className="space-y-[8px]">
                    <p className="text-[16px] font-medium">RGB liquid CPU Cooler</p>
                    <div className="flex space-x-[12px]">
                        <p className="text-[16px] text-[#DB4444] font-medium">$160</p>
                        <p className="text-[16px] font-medium line-through opacity-50">$170</p>
                    </div>
                    <div className="flex space-x-[8px]">
                        <Image src="/images/Four Half Star.png" height={20} width={100} alt="ratings" />
                    <p className="text-[14px] font-semibold opacity-50">(65)</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
      </div>
    </div>
  );
}