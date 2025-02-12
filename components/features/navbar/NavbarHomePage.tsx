"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Button";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 h-[var(--navbar-height)] w-full flex items-center bg-clr_primary_landing px-8">
      <div className="flex justify-between items-center w-full">
        <Image
          src="/images/landingPage/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="object-cover"
        />
        <ul className="h-[var(--navbar-height)] flex items-center gap-4">
          {/* Fixed width container for consistent button sizes */}
          <Button
            className="hover:bg-clr_landing_red bg-transparent border-clr_landing_red border text-white tracking-wider px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors max-w-28 flex-1"
            onClick={() => router.push("/dashboard")}
          >
            Login
          </Button>

          {/* Fixed width container for consistent button sizes */}
          <Button
            className="w-full border border-white text-white tracking-wider px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors max-w-28"
            onClick={() => router.push("/auth/register")}
          >
            Sign Up
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
