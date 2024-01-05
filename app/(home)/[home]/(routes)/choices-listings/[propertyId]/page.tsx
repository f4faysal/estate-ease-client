"use client";

import Loading from "@/app/loading";
import RatingAndReviews from "@/components/RatingAndReviews";
import OwnerBehaviorsCommonQuestions from "@/components/commonQuestions";
import Gallery from "@/components/gallery/ingex";
import Container from "@/components/ui/container";
import { usePropertyQuery } from "@/redux/api/propertysApi";
import { HomeIcon, MapIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from "react-icons/io";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineWindow } from "react-icons/md";
interface Props {
  params: {
    propertyId: string;
    home: string;
  };
}

const PropertyDetails = ({ params }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const { data, isLoading } = usePropertyQuery(params.propertyId);

  console.log(data);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="w-full h-[300px] bg-[#EBF6FF] rounded-lg"></div>

      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 -mt-[300px]">
          <Gallery images={data?.home.images} />
        </div>
        <div className="px-4 py-10 sm:px-6 lg:px-8 grid grid-cols-5 gap-10">
          <div className="col-span-3">
            <h1 className="text-3xl font-bold ">{data?.home?.title}</h1>
            <div className="text-sm font-semibold flex justify-between">
              <p>{data?.home?.tageLine}</p>
              <p className="flex items-center ">
                <MapPinIcon className="w-8 px-2" />
                {data?.home?.location} | <HomeIcon className="w-8 px-2" />
                {data?.home?.residential}
              </p>
            </div>
            <p className="text-xl font-medium py-4">
              {data?.home?.homeSize} {data?.home?.homeSizeDetails?.sizePerUnit}
              {data?.home?.residential} for {data?.home?.homeType}
            </p>

            <div className="flex gap-[12px]">
              <span>
                {" "}
                <LuBedSingle className="w-7 h-7" />{" "}
                {data?.home?.homeSizeDetails?.numberOfRooms} Rooms
              </span>
              <div className="w-[3px] bg-gray-500"></div>
              <span>
                <LiaBathSolid className="w-7 h-7" />{" "}
                {data?.home?.homeSizeDetails?.numberOfBathrooms} Bath
              </span>
              <div className="w-[3px] bg-gray-500"></div>
              <span>
                <MdOutlineWindow className="w-7 h-7" />
                {data?.home?.homeSizeDetails?.numberOfBalconies} Balconi
              </span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
                <MdOutlineWindow className="w-7 h-7" />
                {data?.home?.homeSizeDetails?.numberOfBalconies} Windows
              </span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
                <MapIcon className="w-7 h-7" />
                {data?.home?.homeSizeDetails?.numberOfFloors} Floors
              </span>
              <div className="w-[3px] bg-gray-500"></div>
              <span>
                <MapPinIcon className="w-7 h-7" />
                {data?.home?.address}
              </span>
            </div>
            <br />
            <div>
              <h1 className="text-2xl font-bold">Description</h1>
              <br />
              <p className="">{data?.home?.description}</p>
              <br />
              <p>
                Aura house is a beautiful & unique eco bamboo house built on the
                west bank of the River Ayung facing east to catch sunrise. Aura
                House is situated 25min away from Ubud, and 35min away from
                Canggu. <br />
                <br /> IF WE ARE FULLY BOOKED, PLEASE CHECK OUR AIRBNB PROFILE
                (CLICK ON OUR PROFILE PICTURE) TO FIND 10 MORE BEAUTIFUL BAMBOO
                HOUSES, ALL BASED IN THE...
                <br />
                <br />
              </p>
              <p className="cursor-pointer" onClick={() => setShow(!show)}>
                {show ? (
                  <span className="flex gap-[2px] items-center">
                    {" "}
                    Show less <IoIosArrowDown />
                  </span>
                ) : (
                  <span className="flex items-center gap-[2px]">
                    Show more <IoIosArrowUp />
                  </span>
                )}
              </p>
              <p>{data?.home?.description}</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold ">
                {numberWithCommas(data?.home?.price)}৳ Rent
              </h1>
              <div className="flex gap-5 items-center justify-center">
                <span className="text-xl font-bold flex items-center">
                  <IoIosStar className="text-yellow-500" />
                  4.5
                </span>
                <span className="text-xl font-bold flex items-center">
                  117 reviews
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-10  mt-4 py-3 rounded-md items-center"></div>

            <div className="border rounded-md p-2 bg-white shadow">
              <button className="bg-[#FFD600] w-full py-3 mt-5 rounded-md text-white">
                Book Now
              </button>
              <button className="bg-[#27A9DF] w-full py-3 mt-5 rounded-md text-white">
                Contact Owner
              </button>
            </div>
          </div>

          <div className="col-span-5">
            <h1 className="text-2xl font-bold py-4">Features</h1>
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <ul className="list-disc list-inside">
                  <li>
                    <span className="">Internet</span>
                  </li>
                  <li>
                    <span className="">Kitchen</span>
                  </li>
                  <li>
                    <span className="">Free parking on premises</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="list-disc list-inside">
                  <li>
                    <span className="">Indoor fireplace</span>
                  </li>
                  <li>
                    <span className="">Heating</span>
                  </li>
                  <li>
                    <span className="">Air conditioning</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="list-disc list-inside">
                  <li>
                    <span className="">Security</span>
                  </li>
                  <li>
                    <span className="">
                      Smoke detector Carbon monoxide detector
                    </span>
                  </li>
                  <li>
                    <span className="">
                      <span className="">Washer</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-span-5">
            <h1 className="text-2xl font-bold">
              Owner Behaviors Common Question
            </h1>

            <div className="grid grid-cols-2 gap-5">
              {data?.ownerBehaviourCommonQuestion?.map(
                (item: any, i: number) => (
                  <div key={i} className="col-span-1">
                    <p className="font-bold">{item.question}</p>
                    <ul className="list-disc list-inside">
                      {item.answers?.map((answer: any, i: any) => (
                        <li key={i}>
                          <span className="">{answer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          
          </div> */}
          <OwnerBehaviorsCommonQuestions data={data} />

          <RatingAndReviews />
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;
