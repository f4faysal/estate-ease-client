"use client";

import Footer from "@/components/shared/Footer";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { adminId: string };
}) {
  // const { adminId } = params;
  // const { data, isLoading } = useMyProfileQuery({});
  // const isLogin = isLoggedIn();
  // const userId = data?._id;

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (adminId !== userId) {
  //   toast.error("your id is not matched to this page!");
  //   redirect("/");
  // }

  // if (!isLogin) {
  //   redirect("/sign-in");
  // }

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
