"use client";
// import Button from "../Button";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="fixed top-0 left-0 h-[var(--navbar-height)] w-full flex items-center bg-clr_primary_landing gap-2 justify-between px-8">
        <div className="flex gap-2 justify-between items-center w-full py-6">
          <Image
            src="/images/landingPage/logo.png"
            alt="logo"
            width={200}
            height={200}
            objectFit="cover"
          />
          <div className="flex items-center gap-4">
            <ul className="w-full h-[(--navbar-height)] flex gap-4">
              <Button
                variant="outline"
                className="bg-clr_landing_red text-white tracking-wider border-none outline-none"
                onClick={() => router.push("/auth/login")}
              >
                Login
              </Button>
              <Button
                className="tracking-wider"
                variant="default"
                onClick={() => router.push("/auth/register")}
              >
                Sign Up
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
