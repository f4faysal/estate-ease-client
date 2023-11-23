"use client";

import Loading from "@/app/loading";
import Gallery from "@/components/gallery/ingex";
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
          <div className="col-span-2 row-span-2 h-80 border">1</div>
          <div className="border">2</div>
          <div className="border">3</div>
          <div className="border">4</div>
          <div className="border">5</div>
        </div>

        <Gallery images={data?.home.images} />

        <h1>{data?.home.title}</h1>
      </Container>
    </div>
  );
};

export default PropertyDetails;
