import Image from "next/image";

import Container from "../ui/container";

const RentalJureny = () => {
  return (
    <div>
      <div className="text-center mt-10 ">
        <h2 className="text-3xl font-bold mb-5">
          {" "}
          Where Your Ideal Rental Journey Begins
        </h2>
        <p className="mb-5">
          Start your desire home journey today, finding your dream home with
          unparalleled ease.From first- <br />
          time buyers to seasoned investors, discover properties that match your
          goals.
        </p>
      </div>

      <div className="grid grid-cols-5 grid-rows-2  gap-4 w-full">
        <div className=" row-span-2 ">
          <Image
            className="rounded-sm "
            objectFit="contain"
            src="/assets/rental-section/rental-pic1.jpg"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="  ">
          <Image
            className="rounded-sm "
            objectFit="contain"
            src="/assets/rental-section/rental-pic2.webp"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="  ">
          <Image
          objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic3.webp"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
        <div className=" row-span-2 ">
          <Image
            objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic9.webp"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
        <div className=" ">
          <Image
            objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic4.jpg"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
        <div className=" ">
          <Image
            objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic5.webp"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>

        <div className=" ">
          <Image
            objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic6.webp"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>

        <div className=" ">
          <Image
            objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic10.jpg"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default RentalJureny;
