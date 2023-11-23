import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Banner } from "@/components/banner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <Banner label="Enter the information below to verify and register your NID with Estate Ease" />
      {children}
      <Footer />
    </>
  );
}
