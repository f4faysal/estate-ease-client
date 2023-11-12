import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Star } from "lucide-react";
import Image from "next/image";

const ChoicesListings = () => {
  return (
    <div className="">
      <div className=" bg-[#EBF6FF] flex flex-col pt-12 items-center h-[300px] rounded-lg ">
        <h1 className="text-3xl font-bold">Great choices from our listings</h1>
        <p className="text-center pt-3 text-sm">
          Strategy startup research & development equity burn rate validation
          customer vesting <br /> period infrastructure seed round bandwidth
          ecosystem infographic market.
        </p>
      </div>
      <Container>
        <div className="-mt-28 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border w-full">
            <div className="">
              <Image
                className="rounded-lg"
                width={420}
                height={345}
                src="/demo.png"
                alt=""
              />
            </div>
            <div className="mt-3 flex justify-between">
              <div className="text-xl font-bold ">$320,00</div>

              <p className="flex items-center justify-center ">
                <Star size={16} />
                <p>4.5</p>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-semibold">
                Beautiful House for Sale
              </h2>
              <p className="text-sm">3 bd | 15 ba | 1,540 sqft</p>
              <p className="text-sm">
                1234 Street Name, City Name, State Name Country Name, 12345
              </p>
            </div>
            <div>
              <Button className="w-full mt-3" size={"sm"} variant={"default"}>
                view details
              </Button>
            </div>
          </div>
          <div className="border w-full">
            <div className="">
              <Image width={420} height={345} src="/demo.png" alt="" />
            </div>
            <div>price and rating</div>
            <div>
              <div>title</div>
              <div>location</div>
            </div>
            <div>
              <button>view details</button>
            </div>
          </div>
          <div className="border w-full">
            <div className="">
              <Image width={420} height={345} src="/demo.png" alt="" />
            </div>
            <div>price and rating</div>
            <div>
              <div>title</div>
              <div>location</div>
            </div>
            <div>
              <button>view details</button>
            </div>
          </div>
          <div className="border w-full">
            <div className="">
              <Image width={420} height={345} src="/demo.png" alt="" />
            </div>
            <div>price and rating</div>
            <div>
              <div>title</div>
              <div>location</div>
            </div>
            <div>
              <button>view details</button>
            </div>
          </div>
          <div className="border w-full">
            <div className="">
              <Image width={420} height={345} src="/demo.png" alt="" />
            </div>
            <div>price and rating</div>
            <div>
              <div>title</div>
              <div>location</div>
            </div>
            <div>
              <button>view details</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChoicesListings;
