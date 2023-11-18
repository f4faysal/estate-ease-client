import CardInfo from "@/components/card-info";
import Container from "@/components/ui/container";

const ChoicesListings = () => {
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
        <div className="-mt-28 px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 1, 1, 1, 1, 1].map((item, i) => (
            <CardInfo key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ChoicesListings;
