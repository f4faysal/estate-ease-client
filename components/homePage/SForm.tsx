"use client";

import { usePropertysQuery } from "@/redux/api/propertysApi";
import { setProperty } from "@/redux/features/property/propertySlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/input";

const SForm = () => {
  const router = useRouter();

  const { data, isLoading, refetch } = usePropertysQuery({
    limit: 10,
    page: 1,
  });

  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user.property);

  useEffect(() => {
    dispatch(setProperty(data?.property));
  }, [data, dispatch]);

  const handelSearch = () => {
    console.log("search", user);
    // window.location.href = "/search/choices-listings";
    router.push("/search/choices-listings");
    refetch();
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="">
      <div className=" flex justify-center ">
        <div className="bg-white w-[132px] h-[60px] rounded-t-2xl flex items-center justify-center">
          <button className=" py-2 px-3  bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl flex justify-start items-center gap-1">
            <Image src="/assets/rent-logo.png" alt="" height={30} width={30} />
            Rent
          </button>
        </div>
      </div>
      <div className=" md:shadow-2xl md:h-[80px] md:w-[1000px] md:border bg-white rounded-2xl text-center">
        <div className="w-full h-full flex md:flex-row flex-col justify-evenly items-center">
          <div className="w-full">
            <div className="ps-5">
              <Input />
            </div>
          </div>
          <div className="w-full">
            <div className="ps-5">
              <Input />
            </div>
          </div>
          <div className="w-full">
            <div className="ps-5">
              <Input />
            </div>
          </div>
          <div className="w-full">
            <div className="ps-5">
              <Input />
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={handelSearch}
              className=" py-3 px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SForm;
