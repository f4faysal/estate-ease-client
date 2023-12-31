"use client";

import Loading from "@/app/loading";
import CardInfo from "@/components/card-info";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { usePropertysQuery } from "@/redux/api/propertysApi";
import { setProperty } from "@/redux/features/property/propertySlice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ChoicesListings = () => {
  const searchParams = useSearchParams();

  console.log();

  const query: Record<string, any> = {};
  const dispatch = useDispatch();

  // const [page, setPage] = useState<number>(1);
  // const [size, setSize] = useState<number>(10);
  // const [location, setLocation] = useState<string>("");
  // const [residential, setResidential] = useState<string>("");

  // query["limit"] = size;
  // query["page"] = page;
  const residential = searchParams.get("residential");
  const location = searchParams.get("location");

  console.log(residential, location);

  query["location"] = location === "undefined" ? "Gulshan" : location;
  query["residential"] = residential === "undefined" ? "House" : residential;

  // query["searchTerm"] = searchTerm;

  const { data, isLoading, refetch } = usePropertysQuery({
    limit: 1000,
    page: 1,
    ...query,
  });

  console.log(data);

  useEffect(() => {
    dispatch(setProperty(data?.property));
  }, [data, dispatch]);

  const { property, meta }: any = data || [];

  if (isLoading) return <Loading />;

  return (
    <div className="">
      <div className=" bg-[#EBF6FF] flex flex-col pt-12 items-center h-[300px] rounded-lg ">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Great choices from our listings
        </h1>
        <p className="text-center pt-3 text-sm md:w-[50%] px-2">
          Strategy startup research & development equity burn rate validation
          customer vesting period infrastructure seed round bandwidth ecosystem
          infographic market.
        </p>
      </div>
      <Container>
        {property?.length !== 0 ? (
          <div className="-mt-28 px-3 mb-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen">
            {property?.map((propertys: any, i: number) => (
              <CardInfo key={i} propertys={propertys} />
            ))}
          </div>
        ) : (
          <div className="text-center text-2xl font-bold min-h-[50vh] flex flex-col items-center justify-center">
            <p>No property found for this location and residential type</p>
            <Link href="/">
              <Button>Go back</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ChoicesListings;
