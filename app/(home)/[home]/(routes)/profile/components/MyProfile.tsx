"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useMyProfileQuery } from "@/redux/api/authApi";
import { Cog, HomeIcon, MessageSquare } from "lucide-react";

const MyProfile = () => {
  const { data } = useMyProfileQuery({});
  console.log(data);

  const user = data?.rentUser || data?.homeOwner;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover bg-center ">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50"></div>
      </div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mx-3 -mt-16 mb-6 lg:mx-4">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {/* className="inline-block relative object-cover object-center w-[74px] h-[74px] rounded-lg shadow-lg shadow-blue-gray-500/40" */}
              <Avatar className=" w-[74px] h-[74px] rounded-lg shadow-lg shadow-blue-gray-500/40">
                <AvatarImage src={user.profileImage} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-1">
                  {`${user.name?.firstName} ${user.name?.middleName} ${user.name?.lastName}`}
                </h5>
                <p className=" text-sm leading-normal font-normal text-blue-gray-600">
                  User Id : <span className="font-bold">{user.id}</span>
                </p>
              </div>
            </div>
            <div className="w-96">
              <div className="block overflow-hidden">
                <nav>
                  <ul
                    role="tablist"
                    className="flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1"
                  >
                    <li
                      role="tab"
                      className="grid place-items-center text-center w-full h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                      data-value="app"
                    >
                      <div className="z-20 flex gap-2">
                        <HomeIcon />
                        App
                      </div>
                    </li>
                    <li
                      role="tab"
                      className="grid place-items-center text-center w-full h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                      data-value="message"
                    >
                      <div className="z-20 flex gap-2">
                        <MessageSquare />
                        Message
                      </div>
                    </li>
                    <li
                      role="tab"
                      className="grid place-items-center text-center w-full h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                      data-value="settings"
                    >
                      <div className="z-20 flex gap-2">
                        <Cog />
                        Settings
                      </div>
                      <div
                        className="absolute top-0 left-0 right-0 z-10 h-full bg-white rounded-md shadow"
                        data-projection-id="16"
                        style={{
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      ></div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <h6 className="text-base font-semibold  text-blue-gray-900 mb-3">
                KYC Settings
              </h6>
              <div className="p-0">
                <ul className="flex flex-col gap-4 p-0">
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      NID:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {data?.nidNumber}
                    </p>
                    {data?.nidVerified ? (
                      <Badge
                        className="bg-green-400 text-white"
                        variant="secondary"
                      >
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Not Verified</Badge>
                    )}
                  </li>
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      Role:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {data?.role}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
              <h6 className="text-base font-semibold  text-blue-gray-900 mb-3">
                Profile Information
              </h6>
              <div className="p-0">
                <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                  Hi, I`m Alec Thompson, Decisions: If you can`t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
                <hr className="my-4 border-blue-gray-50" />

                <ul className="flex flex-col gap-4 p-0">
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      first name:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {`${user.name?.firstName} ${user.name?.middleName} ${user.name?.lastName}`}
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      mobile:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {user.contactNo}
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      email:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {user.email}
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      Address:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {user.presentAddress}
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      bloodGroup:
                    </p>
                    <p className=" text-sm leading-normal font-normal text-blue-gray-500">
                      {user.bloodGroup}
                    </p>
                  </li>
                  {/* <li className="flex items-center gap-4">
                    <p className=" text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      social:
                    </p>
                    <div className="flex items-center gap-4">
                      <i className="fa-brands fa-facebook text-blue-700"></i>
                      <i className="fa-brands fa-twitter text-blue-400"></i>
                      <i className="fa-brands fa-instagram text-purple-500"></i>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            <div>
              <h6 className="text-base font-semibold  text-blue-gray-900 mb-3">
                Platform Settings
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
