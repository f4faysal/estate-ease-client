"use client";

import Loading from "@/app/loading";
import Gallery from "@/components/gallery/ingex";
import Container from "@/components/ui/container";
import { usePropertyQuery } from "@/redux/api/propertysApi";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
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
            <h1>{data?.home.title}</h1>

            <div className="flex gap-[12px]">
              <span>
                {" "}
                <LuBedSingle className="w-7 h-7" />{" "}
                {data?.home?.homeSizeDetails?.numberOfRooms} Rooms
              </span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
                <LiaBathSolid className="w-7 h-7" />{" "}
                {data?.home?.homeSizeDetails?.numberOfBathrooms} Bath
              </span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
                <MdOutlineWindow className="w-7 h-7" />
                {data?.home?.homeSizeDetails?.numberOfBalconies} Balconi
              </span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
                <MdOutlineWindow className="w-7 h-7" />
                {data?.home?.homeSizeDetails?.numberOfBalconies} Windows
              </span>
            </div>
            <br />
            <div>
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
              <h1>{numberWithCommas(data?.home?.price)}৳ Rent</h1>
              <div className="flex gap-5">
                <span className="flex items-center">
                  <IoIosStar className="text-yellow-500" />
                  4.5
                </span>
                <span>117 reviews</span>
              </div>
            </div>
            <div className="flex justify-center gap-10 border mt-4 py-3 rounded-md items-center bg-white shadow">
              <div className="flex flex-col">
                <label htmlFor="check-in">Check In</label>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <ReactDatePicker
                    id="check-in"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-[100px] mx-auto outline-none"
                    dateFormat="PP"
                  />
                  <label htmlFor="check-in">
                    <IoIosArrowDown />
                  </label>
                </div>
              </div>
              <div className="w-[2px] h-[30px] bg-gray-600"></div>
              <div>
                <label htmlFor="check-out">Check out</label>
                <br />
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <ReactDatePicker
                    id="check-out"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-[100px] mx-auto outline-none"
                    dateFormat="PP"
                  />
                  <label htmlFor="check-out">
                    <IoIosArrowDown />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;
