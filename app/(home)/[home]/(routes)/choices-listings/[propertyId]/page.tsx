"use client";

import Loading from "@/app/loading";
import Gallery from "@/components/gallery/ingex";
import Container from "@/components/ui/container";
import { usePropertyQuery } from "@/redux/api/propertysApi";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Calculate from "@/components/calculate";
import { differenceInDays } from "date-fns";
interface Props {
  params: {
    propertyId: string;
    home: string;
  };
}

const PropertyDetails = ({ params }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
 
  const { data, isLoading } = usePropertyQuery(params.propertyId);
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const calculateDateDistance = () => {
    if (startDate && endDate) {
      const distance = differenceInDays(endDate, startDate);
      return distance;
    }
    return null;
  };

  const days = calculateDateDistance();


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
              <span>{data?.home?.homeSizeDetails?.numberOfRooms} Rooms</span>
              <div className="w-[1px] bg-gray-500"></div>
              <span>{data?.home?.homeSizeDetails?.numberOfBathrooms} Bath</span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
                {data?.home?.homeSizeDetails?.numberOfBalconies} Balconi
              </span>
              <div className="w-[2px] bg-gray-500"></div>
              <span>
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
                    className="w-[105px] mx-auto outline-none"
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
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="w-[105px] mx-auto outline-none"
                    dateFormat="PP"
                  />
                  <label htmlFor="check-out">
                    <IoIosArrowDown />
                  </label>
                </div>
              </div>
            </div>
            <button className="text-center bg-[#A2DAC7] w-full p-2 rounded-[16px] h-[46px] mt-10 text-white">
              Rent Now
            </button>
            <Calculate price={data?.home?.price} days={days} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;
