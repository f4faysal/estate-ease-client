import Image from "next/image";

const RentalJureny = () => {
  return (
    <div className="py-10">
      <div className="text-center mt-10 ">
        <h2 className="text-3xl font-bold mb-5">
          Where Your Ideal Rental Journey Begins
        </h2>
        <p className="mb-5">
          Start your desire home journey today, finding your dream home with
          unparalleled ease.From first- <br />
          time buyers to seasoned investors, discover properties that match your
          goals.
        </p>
      </div>

      <div className="grid grid-cols-5 grid-rows-2 gap-2 w-full h-[370px]">
        <div className=" row-span-2 ">
          <Image
            className="rounded-sm "
            src="/assets/rental-section/rental-pic1.jpg"
            alt=""
            objectFit="contain"
            width={500}
            height={500}
            style={{
              height: "100%",
              width: "100%",
            }}
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
            style={{
              height: "100%",
              width: "100%",
            }}
          ></Image>
        </div>
        <div className="  ">
          <Image
            objectFit="contain"
            className="rounded-sm "
            src="/assets/rental-section/rental-pic3.jpg"
            alt=""
            width={500}
            height={500}
            style={{
              height: "100%",
              width: "100%",
            }}
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
            style={{
              height: "100%",
              width: "100%",
            }}
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
            style={{
              height: "100%",
              width: "100%",
            }}
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
            style={{
              height: "100%",
              width: "100%",
            }}
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
            style={{
              height: "100%",
              width: "100%",
            }}
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
            style={{
              height: "100%",
              width: "100%",
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default RentalJureny;
