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
        <div className="px-4 py-10 sm:px-6 lg:px-8 -mt-[300px]">
          <Gallery images={data?.home.images} />
        </div>

        <h1>{data?.home.title}</h1>
      </Container>
    </div>
  );
};

export default PropertyDetails;
