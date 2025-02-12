import Image from "next/image";
import Navbar from "@/components/features/navbar/NavbarHomePage";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-clr_primary_landing overflow-hidden">
      <Navbar />

      {/* Hero Text */}
      <div
        className="absolute z-10 w-full 
                      px-6 sm:px-8 md:px-12 lg:px-16
                      top-[30%] lg:top-[40%]
                      text-center lg:text-left"
      >
        <div className="text-white font-bold font-poppins tracking-wider lg:text-left">
          <h1 className="text-clamp_landingPage tracking-wider leading-relaxed">
            Sales
            <br />
            Dashboard
          </h1>
        </div>
      </div>

      {/* Small subtract decoration */}
      <div
        className="absolute -top-10 left-0 
                      w-[45%] sm:w-[35%] md:w-[30%] lg:w-[25%] 
                      aspect-square"
      >
        <Image
          src="/images/landingPage/small_substract.svg"
          alt="decorative subtract element"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Large subtract background */}
      <div
        className="absolute bottom-0 left-0 
                      w-[100%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
                      h-[50%] sm:h-[60%] md:h-[70%] lg:h-[80%]"
      >
        <div
          className="relative h-full w-full 
                        translate-x-[0%] sm:translate-x-[20%] md:translate-x-[20%]"
        >
          <Image
            src="/images/landingPage/subtract.svg"
            alt="decorative background element"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Main landing image */}
      <div
        className="absolute bottom-0 right-0 
                      w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
                      h-[80%] sm:h-[70%] md:h-[80%] lg:h-[90%]"
      >
        <Image
          src="/images/landingPage/landing_image.svg"
          alt="landing page illustration"
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>
    </main>
  );
}
