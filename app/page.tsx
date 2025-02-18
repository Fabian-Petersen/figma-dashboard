import LargeFeature from "@/components/landingPage/features/LargeFeature";
import SmallFeautre from "@/components/landingPage/features/SmallFeautre";
import MainContent from "@/components/landingPage/MainContent";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-clr_primary_landing overflow-hidden z-0">
      <MainContent />
      {/* // $ Background Features Absolute Positioned on the parent element */}
      <SmallFeautre />
      <LargeFeature />
    </main>
  );
}
