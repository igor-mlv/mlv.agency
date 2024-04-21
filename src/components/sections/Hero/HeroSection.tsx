import { Button } from "@/components/ui/button";
import { heroSection } from "@/constants";
import VideoSphere from "./VideoSphere";

export default function HeroSection() {
    return (
        <section id="hero" className="flex md:flex-row flex-row justify-between mt-[140px] h-[80vh] max-h-[700px]">
            <div className="flex flex-col md:justify-center items-start">
                <h1 className="w-[700px]">{heroSection.title}</h1>
                <Button
                    variant="outline"
                    className="bg-primary border-purple rounded-[20px] p-[20px] my-[50px] button">
                    {heroSection.btnText}
                </Button>
            </div>
            <VideoSphere />



        </section>
    )
}