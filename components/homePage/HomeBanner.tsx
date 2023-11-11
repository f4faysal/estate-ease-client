import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import SForm from "./SForm";

const HomeBanner = () => {
  return (
    <div className="relative container mx-auto mb-16 pt-">
      <div className="relative">
        {/* Linear gradient overlay */}
        <div
          className="absolute inset-0 md:rounded-3xl"
          style={{
            background:
              "linear-gradient(269deg, rgba(199, 202, 199, 0.00) 10.88%, rgba(38, 42, 52, 0.31) 67.19%)",
          }}
        ></div>

        {/* Image */}
        <Image
          src="/assets/placeholder.jpg"
          alt=""
          width={1600}
          height={700}
          className="md:rounded-3xl"
        />
      </div>
      <div className="absolute top-5 lg:top-20 left-10 ">
        <h1 className="text-2xl md:text-7xl font-bold text-white">
          Find your way <br />
          <span className="text-[#A2DAC7]">Home</span>
        </h1>
        <p className="text-white md:text-xl mt-1 md:mt-4 hidden md:block">
          Intuitive search that matches your preferences, saving time and <br />{" "}
          ensuring you find the perfect property
        </p>
        <div className="mt-2 md:mt-5 flex gap-3 lg:gap-7 md:gap-10">
          <button className="text-sm py-1 px-2 md:py-3 md:px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75">
            Get Start
          </button>
          <button className=" text-sm py-1 px-2 md:text-xl md:py-3 md:px-9  border border-[#A2DAC7]  text-[#eef2f5] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75 flex items-center gap-4">
            <span className="">
              <BsFillPlayCircleFill />{" "}
            </span>{" "}
            Watch Video
          </button>
        </div>
      </div>
      <div className="md:absolute lg:top-[340px] xl:top-[380px] 2xl:top-[500px] left-0 right-0 lg:flex justify-center  ">
        <SForm />
      </div>
    </div>
  );
};

export default HomeBanner;
