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
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={data?.home.images} />

            {/* <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div> */}
          </div>
          <hr className="my-10" />
          {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2 h-80 border">1</div>
          <div className="border">2</div>
          <div className="border">3</div>
          <div className="border">4</div>
          <div className="border">5</div>
        </div>

        <h1>{data?.home.title}</h1>
      </Container>
    </div>
  );
};

export default PropertyDetails;
