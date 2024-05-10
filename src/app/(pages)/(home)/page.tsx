import AboutUs from "@/components/sections/AboutUs/AboutUs";
import HeroSection from "@/components/sections/Hero/HeroSection";
import NavBar from "@/components/sections/NavBar/NavBar";
import PortfolioSection from "@/components/sections/Portfolio/PortfolioSection";

export default function Home() {
  return (
    <div className="flex justify-center w-full overflow-hidden min-w-[380px] bg-[#111113] h-[3000px]">
      <div className="w-full max-w-[1280px]">
        <NavBar />
        <HeroSection />
        <AboutUs />
        <PortfolioSection />
      </div>
    </div>
  );
}
