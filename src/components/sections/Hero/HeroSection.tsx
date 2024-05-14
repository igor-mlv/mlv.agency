import { Button } from "@/components/ui/button";
import { heroSection } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex md:flex-row flex-col md:justify-between justify-end mt-[130px] h-[90dvh] max-h-[700px]  items-center px-4 md:pb-[0px] pb-[60px]">
            <div className="flex flex-col md:justify-center items-start">
                <h1 className="md:max-w-[1180px] w-full text-left z-10">{heroSection.title}</h1>
                <Button asChild
                    variant="default"
                    className="bg-violet md:w-[260px] w-[156px] h-[45px] md:px-[60px] px-[24px] md:my-[45px] my-[16px] rounded-[55px] z-30 hover:border-[2px] border-violet transition duration-500 button">
                    <Link href="#contact">
                        {heroSection.btnText}
                    </Link>
                </Button>
            </div>

            <div className="w-[1800px] md:block hidden absolute  bottom-[-200px] left-[-300px] z-20">
                <Image
                    priority
                    src={heroSection.vectorUrlLargeScreen}
                    height={720}
                    width={1800}
                    alt="m-vector"
                />
            </div>

            <div className="w-[856px] md:hidden block absolute top-[-100px] -rotate-[20deg] z-0">
                <Image
                    priority
                    src={heroSection.vectorUrlSmallScreen}
                    height={520}
                    width={856}
                    alt="m-vector"
                    className="object-cover"
                />
            </div>
        </section>
    )
}