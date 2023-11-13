import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineWindow } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";

import { Button } from "./ui/button";

const CardInfo = () => {
  return (
    <div className="w-full">
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
          src="/demo.png"
          alt=""
        />
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="text-xl font-bold ">$320,00</div>

        <p className="text-sm font-semibold flex items-baseline gap-1 ">
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <span>4.5</span>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold">Beautiful House for Sale</h2>
        <p className="text-sm flex gap-1 items-center">
          <LuBedSingle /> <span>4</span> | <LiaBathSolid /> <span>6</span> |
          <MdOutlineWindow />
          <span>1500 sqft</span>
        </p>
        <p className="text-sm flex gap-1 items-center">
          <PiMapPin />
          <span>Street, City, Country Name</span>
        </p>
      </div>
      <div>
        <Button className="w-full mt-3" size={"sm"} variant={"default"}>
          view details
        </Button>
      </div>
    </div>
  );
};

export default CardInfo;
