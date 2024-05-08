import HeroSection from "@/components/sections/Hero/HeroSection";
import NavBar from "@/components/sections/NavBar/NavBar";

export default function Home() {
  return (
    <div className="flex justify-center w-full overflow-hidden min-w-[380px] bg-[#111113] h-[3000px]">
      <div className="w-full max-w-[1280px]">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}
