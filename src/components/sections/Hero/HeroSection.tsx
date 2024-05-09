import { Button } from "@/components/ui/button";
import { heroSection } from "@/constants";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex md:flex-row flex-col justify-between mt-[130px] h-[90dvh] max-h-[700px]  items-center px-4">
            <div className="flex flex-col md:justify-center md:items-start items-center">
                <h1 className="md:max-w-[1180px] w-full md:text-left text-center">{heroSection.title}</h1>
                <Button
                    variant="default"
                    className="bg-violet w-[260px] h-[45px] px-[60px] py-2 my-[45px] rounded-[55px] z-10 hover:border-[2px] border-violet button">
                    {heroSection.btnText}
                </Button>
            </div>

            <div className="w-[1800px] absolute bottom-[-200px] left-[-300px]">
                <Image
                    priority
                    src={heroSection.iconUrl}
                    height={720}
                    width={1800}
                    alt="m-vector"
                />
            </div>
        </section>
    )
}