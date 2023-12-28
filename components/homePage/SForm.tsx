"use client";

import { usePropertysQuery } from "@/redux/api/propertysApi";
import { setProperty } from "@/redux/features/property/propertySlice";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  homeSize: z.string().optional(),
  numberOfRooms: z.string().optional(),
  numberOfBathrooms: z.string().optional(),
  residential: z.string().optional(),
  location: z.string().optional(),
  price: z.string().optional(),
});

/**
 * 
 {
        home: {
          homeSizeDetails: {
            numberOfRooms: '5',
            numberOfBathrooms: '9',
            numberOfBalconies: '7',
            numberOfWindos: '7',
            numberOfFloors: '3',
            sizePerUnit: 'Kottah',
            totalSQFT: '12'
          },
          features: {
            hasGarden: false,
            hasGarage: true,
            hasInternet: false,
            hasSecurity: false,
            hasCleaning: false
          },
          title: 'Amr Basa Vara Dibo',
          tageLine: 'Amr Basa Vara Dibo',
          tages: [ 'Amr Basa Vara Dibo' ],
          price: '1234',
          offerPrice: '123',
          address: 'Amr Basa Vara Dibo',
          description: 'Amr Basa Vara DiboAmr Basa Vara DiboAmr Basa Vara Dibo',
          images: []
          homeType: 'Amr Basa Vara Dibo',
          homeSize: '12',
          residential: 'Duplex',
          location: 'Gulshan'
        },
        homeReview: { rating: '0' },
        _id: '6560a60109f9cd14fcf86944',
        homeOwnerId: {
          _id: '655273304cdac5afb76d506a',
          id: 'HW-00002',
          role: 'HomeOwner',
          nidNumber: 1865611111111112,
          nidVerified: true,
          needsPasswordChange: true,
          homeOwner: '655273304cdac5afb76d5068',
          createdAt: '2023-11-13T19:04:16.182Z',
          updatedAt: '2023-11-13T19:04:16.182Z',
          __v: 0
        },
        homeStatus: 'pending',
        ownerBehaviourCommonQuestion: [
          { question: 'Owner behavior?', answers: [ 'Good', 'Average', 'Poor' ] },
          {
            question: 
              'The owner provides the information when you rent, is it true?',
            answers: [ 'No', 'Yes' ]
          },
          {
            question: 'Is there any electricity or gas problem?',
            answers: [ 'Yes', 'No' ]
          },
          {
            question: 'Does the owner create problems when guests come?',
            answers: [ 'No', 'Yes' ]
          }
        ],
        createdAt: '2023-11-24T13:32:49.026Z',
        updatedAt: '2023-11-24T13:32:49.026Z',
        __v: 0,
        id: '6560a60109f9cd14fcf86944'
      }, 
 * 
 */

const SForm = () => {
  const router = useRouter();

  const { data, isLoading, refetch } = usePropertysQuery({
    limit: 10,
    page: 1,
  });

  console.log(data);

  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user.property);

  useEffect(() => {
    dispatch(setProperty(data?.property));
  }, [data, dispatch]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const { handleSubmit, reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values", values);

    try {
      toast.success("values");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" md:shadow-2xl md:h-[80px] md:w-[1000px] md:border bg-white rounded-2xl text-center">
            <div className="w-full h-full flex md:flex-row flex-col justify-evenly items-center">
              <div className="w-full">
                <div className="ps-5">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <Input {...field} placeholder="Location Dropdown  " />
                    )}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="ps-5">
                  <FormField
                    control={form.control}
                    name="residential"
                    render={({ field }) => (
                      <Input {...field} placeholder="Residential Dropdown" />
                    )}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="ps-5">
                  <FormField
                    control={form.control}
                    name="homeSize"
                    render={({ field }) => (
                      <Input {...field} placeholder="homeSize" />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfRooms"
                    render={({ field }) => (
                      <Input {...field} placeholder="numberOfRooms" />
                    )}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="ps-5">
                  <FormField
                    control={form.control}
                    name="homeSize"
                    render={({ field }) => <Input {...field} placeholder="" />}
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  // onClick={handelSearch}
                  className=" py-3 px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SForm;
