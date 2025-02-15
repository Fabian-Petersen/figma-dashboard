import HeaderMobile from "@/components/landingPage/HeaderMobile";
import SmallFeautre from "@/components/landingPage/features/SmallFeautre";
import LargeFeature from "@/components/landingPage/features/LargeFeature";
import ClipPath from "@/components/landingPage/features/ClipPath";
import HeaderDesktop from "@/components/landingPage/HeaderDesktop";
import DeskopScreenImage from "@/components/landingPage/DesktopScreenImage";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-clr_primary_landing overflow-hidden">
      <HeaderMobile />
      <HeaderDesktop />
      {/* // $ Background Features */}
      <SmallFeautre />
      <LargeFeature />
      <ClipPath />
      <div className="absolute h-[555px] w-[800px] top-44 -right-[42px]">
        <DeskopScreenImage />
      </div>
    </main>
  );
}
