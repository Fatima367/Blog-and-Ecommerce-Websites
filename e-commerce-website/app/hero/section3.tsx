import Image from "next/image";

export default function SectionThree(){
    return(
        <div className="p-8">
         <div className="h-[1px] bg-[#131313] opacity-20 mb-8"> </div>
            <div className="flex flex-col items-center justify-center mx-auto gap-5"> 
                <h1 className="text-3xl">Easy Payment Methods</h1>
               <Image
               src="/images/methods.png"
               height={500}
               width={700}
               alt="methods"
               />
            </div>
        </div>
    )
}