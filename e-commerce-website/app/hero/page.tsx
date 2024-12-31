import Image from "next/image";

export default function Hero() {
  return (
    <div className="lg:p-6 lg:px-10 p-2">
      <div
        className="lg:flex-row flex flex-col items-center lg:justify-between mx-auto 
      relative group"
      >
        <h1
          className="lg:text-6xl text-4xl text-white font-bold z-20 lg:ml-16
        lg:text-left text-center lg:w-auto w-60 lg:pt-0 pt-10"
        >
          PREMIUM GIFT BASKETS FOR EVERY OCCASION!
        </h1>
        <Image
          src="/images/prodimg4.png"
          height={600}
          width={600}
          alt="hero"
          className="rounded-xl z-10 lg:mr-auto"
        />
        <div
          className="inset-0 absolute bg-rose-200 lg:h-[20rem] h-[28rem] lg:mt-36 rounded-full
        lg:mx-auto mx-5"
        ></div>
      </div>
    </div>
  );
}
