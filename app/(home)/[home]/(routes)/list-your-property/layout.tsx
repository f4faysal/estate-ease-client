"use client";

import { getUserInfo } from "@/services/auth.service";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role }: any = getUserInfo();

  if (role === "RentUser") {
    window.location.href = "/";
  }

  return <>{children}</>;
}
