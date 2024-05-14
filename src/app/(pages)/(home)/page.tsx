
import AboutUs from "@/components/sections/AboutUs/AboutUs";
import ContactUsSection from "@/components/sections/ContacUs/ContactUsSection";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import NavBar from "@/components/sections/NavBar/NavBar";
import PortfolioSection from "@/components/sections/Portfolio/PortfolioSection";
import ServicesSection from "@/components/sections/Services/ServicesSection";
import SubscriptionSection from "@/components/sections/Subscription/SubscriptionSection";
import WorkStagesSection from "@/components/sections/WorkStages/WorkStagesSection";

export default function Home() {
  return (
    <div className="flex justify-center w-full overflow-hidden min-w-[380px] bg-[#111113]">
      <div className="w-full max-w-[1280px]">
        <NavBar />
        <HeroSection />
        <AboutUs />
        <PortfolioSection />
        <WorkStagesSection />
        <ServicesSection />
        <SubscriptionSection />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}
