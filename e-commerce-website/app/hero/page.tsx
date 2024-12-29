import Image from "next/image";

export default function Hero() {
  return (
    <div className="p-6 px-10">
      <div className="flex items-center justify-between mx-auto relative group">
        <h1 className="text-6xl text-white font-bold z-10 lg:ml-16">
          GET YOUR BLISSED WRAPS FOR YOUR OCCASIONS
        </h1>
        <Image
          src="/images/prodimg4.png"
          height={600}
          width={600}
          alt="hero"
          className="rounded-xl z-10"
        />
        <div className="inset-0 absolute bg-rose-200 h-[20rem] lg:mt-36 rounded-full"></div>
      </div>
    </div>
  );
}
