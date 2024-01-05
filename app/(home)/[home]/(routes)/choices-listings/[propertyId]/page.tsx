"use client";

import Loading from "@/app/loading";
import RatingAndReviews from "@/components/RatingAndReviews";
import OwnerBehaviorsCommonQuestions from "@/components/commonQuestions";
import Gallery from "@/components/gallery/ingex";
import UseModal from "@/components/reusable-ui/admin-modal";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useHomeOwnerQuery } from "@/redux/api/homeOwnersApi";
import { usePropertyQuery } from "@/redux/api/propertysApi";
import { openModal } from "@/redux/features/modal/modalSlice";
import { getUserInfo } from "@/services/auth.service";
import { HomeIcon, MapIcon, MapPinIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from "react-icons/io";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineWindow } from "react-icons/md";
import { useDispatch } from "react-redux";
interface Props {
  params: {
    propertyId: string;
    home: string;
  };
}

const PropertyDetails = ({ params }: Props) => {
  const { userId } = getUserInfo() as any;
  const [show, setShow] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const dispatch = useDispatch();

  const handelRentNow = () => {
    toast.success("Rent Now");
    dispatch(openModal());
  };

  console.log(userId);

  const { data, isLoading } = usePropertyQuery(params.propertyId);

  const { data: userData, isLoading: isUserLoading } = useHomeOwnerQuery(
    data?.homeOwnerId?.id
  );

  console.log(userData);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  if (isLoading || isUserLoading) return <Loading />;
  // if (isLoading) return <Loading />;

  return (
    <div>
      <UseModal
        title="Please contact owner"
        description="Please contact owner to rent this property click on the button below"
      >
        {userId ? (
          <>
            <div className="p-6 flex justify-between ">
              <span>
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {userData?.name?.firstName} {userData?.name?.lastName}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {userData?.email}
                </p>
                <p>
                  <span className="font-bold">Phone:</span>{" "}
                  {userData?.contactNo}
                </p>
                <p>
                  <span className="font-bold">Address:</span>{" "}
                  {userData?.permanentAddress}
                </p>
              </span>
              <span>
                <Image
                  className="w-[100px] h-[100px] rounded-full"
                  src={userData?.profileImage}
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="p-6 flex justify-between">
              <Link href={`tell:+88 ${userData?.contactNo}`}>
                <Button className="">
                  <PhoneCall />
                  &nbsp;&nbsp; Call Now
                </Button>
              </Link>
              <p className="p-3 rounded-lg ">+88 {userData?.contactNo}</p>
            </div>
          </>
        ) : (
          <div className="py-4">
            <p className="py-5 text-xl">Please login to rent this property</p>
            <Link href={`/sign-in`}>
              <Button className="w-full mt-3">Login</Button>
            </Link>
          </div>
        )}
      </UseModal>

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
            <div className="border rounded-md p-2 bg-white shadow mt-5">
              <div className="flex justify-between mt-3">
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
              <button
                onClick={handelRentNow}
                className=" w-full py-3 mt-8  text-white border rounded-lg bg-[#A2DAC7] capitalize hover:bg-[#88dcc0] text-[14px] p-1 transform transition duration-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75 focus:scale-95 "
              >
                Rent Now
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
          <OwnerBehaviorsCommonQuestions isUserLogin={!!userId} data={data} />
          <RatingAndReviews
            isUserLogin={!!userId}
            propertyesId={params.propertyId}
          />
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;
