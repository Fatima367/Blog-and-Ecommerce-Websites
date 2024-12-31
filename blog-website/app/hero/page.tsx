export default function Hero() {
  return (
    <div className="bg-[url('/bgimage.png')] lg:bg-cover bg-center h-screen">
      <div className="flex items-center justify-start px-6 relative">
        <div
          className="text-white lg:mt-52 mt-32 bg-slate-950 lg:bg-opacity-50 bg-opacity-65 
          rounded-md p-2"
        >
          <p className="lg:text-4xl text-3xl font-bold text-left lg:max-w-[50rem] ">
            Welcome to the Future of Tech – Insights, Innovations, and Trends at
            Your Fingertips!
          </p>
        </div>
      </div>
    </div>
  );
}
