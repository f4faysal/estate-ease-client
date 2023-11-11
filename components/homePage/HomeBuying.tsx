import { MdCheckCircle } from "react-icons/md";

const HomeBuying = () => {
  return (
    // text pull requst
    <div className="relative">
      <div className=" relative mx-auto lg:w-[1500px] lg:h-[600px]">
        <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
          <div className="w-1/2 ">
            <div className=" ">
              {/* <Image
            src=""
            alt=""
            height={50}
            width={50}
            className="rounded-full"
          /> */}
              <div className=" hidden md:block absolute top-2 left-[400px]  h-52 w-52 bg-slate-500 rounded-full"></div>
              {/* mobile device show */}
              <div className="z-50 lg:absolute top-[100px] w-full h-7 md:h-96 md:w-96 bg-slate-500 rounded-full"></div>
              {/* mobile device show */}
              <div className=" hidden md:block absolute top-[50px] left-[100px] h-8 w-8 bg-[#D6EDFF] rounded-full"></div>
              <div className="   hidden md:block absolute top-[300px] left-[400px] h-10 w-10 bg-[#D6EDFF] rounded-full"></div>
              <div className="hidden z-50 md:block absolute bottom-10 left-[500px] h-40 w-40 bg-slate-500 rounded-full"></div>
            </div>
          </div>
          <div className=" px-3 md:px-1 md:w-1/2 z-50">
            <h1 className="text-3xl md:text-5xl font-semibold ">
              <span className="text-[#384652] capitalize">
                Hassle free buying your
              </span>{" "}
              <br />
              <span className="text-[#26aae1] capitalize">own property</span>
            </h1>
            <p className=" md:text-xl my-5">
              Embark on your home journey with us, where finding <br /> your
              dream home is an exciting adventure.
            </p>
            <ul className="list-none ml-6 space-y-2">
              <li className="flex items-center gap-2 ">
                <samp className="text-[#26aae1] text-xl">
                  {" "}
                  <MdCheckCircle />
                </samp>
                Modern Property Exploration easy, efficient, and enjoyable.
              </li>
              <li className="flex items-center gap-2 ">
                <samp className="text-[#26aae1] text-xl">
                  {" "}
                  <MdCheckCircle />
                </samp>
                Intuitive Search, Faster Results.
              </li>
              <li className="flex items-center gap-2 ">
                <samp className="text-[#26aae1] text-xl">
                  {" "}
                  <MdCheckCircle />
                </samp>
                Virtual Tours Anywhere.
              </li>
              <li className="flex items-center gap-2 ">
                <samp className="text-[#26aae1] text-xl">
                  {" "}
                  <MdCheckCircle />
                </samp>
                Find your dream home.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 w-full h-[200px] bg-[#aad4f6] opacity-25 border "></div>
    </div>
  );
};

export default HomeBuying;
