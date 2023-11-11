import { ReactNode } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
