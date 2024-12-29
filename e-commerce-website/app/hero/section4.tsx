import { TbTruckDelivery } from "react-icons/tb";

export default function SectionFour() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center mx-auto gap-5 mb-12">
        <div className="flex mt-8 gap-10 items-center">
          <TbTruckDelivery className="w-40 h-40 text-rose-500" />
          <h1 className="text-red-400 text-4xl font-bold">
            We Deliver all accross the country
          </h1>
        </div>
      </div>
    </div>
  );
}
