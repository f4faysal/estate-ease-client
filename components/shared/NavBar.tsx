import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f3f8fbdc] sticky top-0 z-50">
      <div className="container mx-auto py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/estate-ease-logo.png"
              alt="Logo"
              width={100}
              height={30}
            />
            {/* <a className="text-white font-bold text-lg">My App</a> */}
          </Link>
        </div>
        <div className="hidden md:block space-x-10">
          <Link href="/">Home</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="hidden md:block space-x-10">
          {!true ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/" className="flex items-center gap-1">
              {" "}
              <FiLogOut /> Logout
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-base hover:text-gray-600 focus:outline-none"
          >
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/">Home</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
            <Link href="/">Logout</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
