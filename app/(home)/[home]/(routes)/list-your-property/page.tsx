"use client";

import Container from "@/components/ui/container";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

const ListYourProperty = () => {
  const { role }: any = getUserInfo();

  const router = useRouter();

  const handelGetStarted = () => {
    if (role === "HomeOwner") {
      toast.success("Welcome Home Owner");
    } else {
      router.push("/sign-up-home-owner");
    }
  };

  return (
    <div>
      {/* hero rent */}
      <div className="bg-hero-pattern bg-transparent h-[500px] bg-cover bg-no-repeat flex justify-center items-center">
        <Container>
          <div className="flex gap-2 w-full">
            <div className=" w-1/2 flex flex-col gap-6 justify-center">
              <h1 className="text-4xl font-bold">
                Rent or Sell <br /> Property Online
              </h1>
              <p className="text-base ">
                Looking to sell property online or are you in search of tenants?{" "}
                <br />
                Do it with ease with the largest real estate marketplace in
                Bangladesh. Start your journey now!
              </p>
              <button
                onClick={handelGetStarted}
                className=" w-52 py-3 px-9 bg-[#A2DAC7] text-white font-semibold rounded-xl   transform transition duration-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75 focus:scale-95"
              >
                Gat Started
              </button>
            </div>
            <div className="w-1/2">
              <iframe
                className="rounded-lg w-full "
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
      {/* how it works */}

      <div className=" py-12">
        <Container>
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl font-bold">How it Works</h1>
            <p className="text-base ">
              Real estate can be complicated on its own. But we are here to make
              <br /> your journey simple and easy.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-4 w-full">
            <div className="p-5 w-full flex flex-col items-center justify-center gap-3">
              <Image
                src="/assets/works/buyerguide1.png"
                width={1000}
                height={1000}
                objectFit="contain"
                //   layout="responsive"
                style={{
                  width: "80%",
                }}
                alt=""
              />
              <p className="text-base font-semibold text-center px-5">
                Fill out the request form and submit your request of your
                property
              </p>
            </div>
            <div className="p-5 w-full flex flex-col items-center justify-center gap-3">
              <Image
                src="/assets/works/howwork2.png"
                width={1000}
                height={1000}
                objectFit="contain"
                //   layout="responsive"
                style={{
                  width: "80%",
                }}
                alt=""
              />
              <p className="text-base font-semibold text-center px-5">
                One of our representatives will contact you for further
                information
              </p>
            </div>
            <div className="p-5 w-full flex flex-col items-center justify-center gap-3">
              <Image
                src="/assets/works/howwork3.png"
                width={1000}
                height={1000}
                objectFit="contain"
                //   layout="responsive"
                style={{
                  width: "80%",
                }}
                alt=""
              />
              <p className="text-base font-semibold text-center px-5">
                An executive will visit your site to take photos/videos of your
                property
              </p>
            </div>
            <div className="p-5 w-full flex flex-col items-center justify-center gap-3">
              <Image
                src="/assets/works/howwork4.png"
                width={1000}
                height={1000}
                objectFit="contain"
                //   layout="responsive"
                style={{
                  width: "80%",
                }}
                alt=""
              />
              <p className="text-base font-semibold text-center px-5">
                We will publish your property on the website to attract
                buyers/tenants
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ListYourProperty;
