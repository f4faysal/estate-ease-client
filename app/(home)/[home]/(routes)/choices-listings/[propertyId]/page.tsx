"use client";

import Loading from "@/app/loading";
import Container from "@/components/ui/container";
import { usePropertyQuery } from "@/redux/api/propertysApi";

interface Props {
  params: {
    propertyId: string;
    home: string;
  };
}

const PropertyDetails = ({ params }: Props) => {
  const { data, isLoading } = usePropertyQuery(params.propertyId);

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="w-full h-[300px] bg-[#EBF6FF] rounded-lg"></div>

      <Container>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2">1</div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
          <div className="">5</div>
        </div>

        <h1>{params.propertyId}</h1>
      </Container>
    </div>
  );
};

export default PropertyDetails;
