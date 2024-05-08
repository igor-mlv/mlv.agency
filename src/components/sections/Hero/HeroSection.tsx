import { Button } from "@/components/ui/button";
import { heroSection } from "@/constants";

export default function HeroSection() {
    return (
        <section id="hero" className="flex md:flex-row flex-col justify-between mt-[140px] h-[80dvh] max-h-[700px]  items-center px-4">
            <div className="flex flex-col md:justify-center md:items-start items-center">
                <h1 className="md:max-w-[1180px] w-full md:text-left text-center">{heroSection.title}</h1>
                <Button
                    variant="outline"
                    className="bg-primary border-purple rounded-[20px] p-[20px] my-[50px] button">
                    {heroSection.btnText}
                </Button>
            </div>
        </section>
    )
}