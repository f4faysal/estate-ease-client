"use client";

import { useHomeOwnerQuery } from "@/redux/api/homeOwnersApi";
import { openModal } from "@/redux/features/modal/modalSlice";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { GiRoundStar } from "react-icons/gi";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineWindow } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import UseModal from "./reusable-ui/admin-modal";

const CardInfo = ({ propertys }: any) => {
  console.log(propertys);
  const dispatch = useDispatch();

  const handelRentNow = () => {
    toast.success("Rent Now");
  };

  const { data } = useHomeOwnerQuery(propertys?.homeOwnerId?.id);

  return (
    <div className="w-full">
      <UseModal
        title="Please contact owner"
        description="Please contact owner to rent this property click on the button below"
      >
        <div className="p-6 flex justify-between">
          <button className="w-1/2 text-center border rounded-lg bg-[#22d12b] capitalize text-black hover:bg-[#b8d9f0] text-[14px] p-1 transform transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75 focus:scale-95">
            <Link href={`tell:${data?.contactNo}`}>Call Now</Link>
          </button>
          <p className="p-3 border rounded-lg ">{data?.contactNo}</p>
        </div>
      </UseModal>

      <div className="w-full h-[240px]">
        <Image
          className="rounded-lg"
          width={500}
          height={500}
          objectFit="contain"
          //   layout="responsive"
          style={{
            height: "100%",
            width: "100%",
          }}
          src={propertys?.home?.images[0]?.url}
          alt=""
        />
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="text-xl font-bold ">
          {propertys?.home?.price} ৳ Rent
        </div>

        <p className="text-sm font-semibold flex items-baseline gap-1 ">
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <span>4.5</span>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold capitalize">
          {propertys?.home?.title}
        </h2>
        <p className="text-sm flex gap-1 items-center">
          <LuBedSingle />{" "}
          <span>{propertys?.home?.homeSizeDetails.numberOfBathrooms}</span> |{" "}
          <LiaBathSolid />{" "}
          <span>{propertys?.home?.homeSizeDetails.numberOfBathrooms}</span> |
          <MdOutlineWindow />
          <span>{`${propertys?.home?.homeSizeDetails.totalSQFT} ${propertys?.home?.homeSizeDetails.sizePerUnit}`}</span>
        </p>
        <p className="text-sm flex gap-1 items-center">
          <PiMapPin />
          <span>{propertys?.home?.address}</span>
        </p>
      </div>
      <div
        onClick={handelRentNow}
        className="w-full mt-3 flex justify-between gap-2"
      >
        <button
          onClick={() => dispatch(openModal())}
          className="w-1/2  text-white border rounded-lg bg-[#A2DAC7] capitalize hover:bg-[#88dcc0] text-[14px] p-1 transform transition duration-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75 focus:scale-95"
        >
          Rent Now
        </button>
        <Link
          className="w-1/2 text-center border rounded-lg bg-[#E2EEF6] capitalize text-black hover:bg-[#b8d9f0] text-[14px] p-1 transform transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75 focus:scale-95"
          href={`/search/choices-listings/${propertys?.id}`}
        >
          <p>view details</p>
        </Link>
      </div>
    </div>
  );
};

export default CardInfo;
