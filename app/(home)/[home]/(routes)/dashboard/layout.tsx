"use client";

import { getUserInfo } from "@/services/auth.service";
import { redirect } from "next/navigation";
import DashboardNav from "./component/DashboardNavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role }: any = getUserInfo();

  if (role === "HomeOwner") {
    return (
      <>
        <DashboardNav />
        {children}
      </>
    );
  }
  return redirect("/en");
}
