import Image from "next/image";

export default function Hero(){

    return(
        <div className="bg-black bg-opacity-20 p-6 px-10">
            <div className="flex items-center justify-between mx-auto">
                <h1 className="text-6xl text-white font-bold">
                    GET YOUR BLISSED WRAPS FOR YOUR OCCASIONS
                </h1>
                <Image 
                src="/images/prodimg2.png"
                height={600}
                width={600}
                alt="hero"
                className="rounded-xl" />
            </div>
        </div>
    )
};