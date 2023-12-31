"use client";
import Container from "@/components/ui/container";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];
const HomeOwnerDashboard = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <h1 className="text-2xl text-center py-5">Home Owner Dashboard</h1>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-3 border px-5  flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg"> total number of properties you own</p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
          <div className="col-span-3 border p-5  flex flex-col items-center justify-center rounded-lg capitalize">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="col-span-2 border px-5 py-10 text-center gap-2 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg">pending requests for your properties</p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
          <div className="col-span-2 border px-5 py-10 text-center gap-2 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg">your properties that are currently rented</p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
          <div className="col-span-2 border px-5 py-10 text-center gap-2 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg">
              your properties that are currently under maintenance
            </p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeOwnerDashboard;
