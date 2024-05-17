import { portfolioSection } from "@/constants";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="relative flex flex-col mt-[150px] px-2">
            <h2 className="z-10">{portfolioSection.title}</h2>
            <div className="relative w-full flex md:flex-row flex-col md:justify-between justify-center bg-[url('/assets/portfolioSection/ContainerBG.png')] bg-cover rounded-[24px] md:mt-[60px] mt-[32px] md:p-[24px] p-[8px] z-10">
                <div className="w-full max-w-[820px] md:h-[502px] h-[216px] flex justify-center items-center bg-[url('/assets/portfolioSection/PhotoBG.png')] bg-cover md:rounded-[24px] rounded-[16px] z-10">
                    <Image
                        width={532}
                        height={336}
                        src={portfolioSection.project.portfolioImgUrl}
                        alt="Portfolio For Ottawa construction company"
                        className="rounded-[10px] md:w-[532px] w-[282px]"
                        unoptimized />
                </div>

                <div className="w-full max-w-[360px] flex flex-col md:justify-between md:ml-2 z-10">
                    <div className="md:pt-[50px] pt-[24px] ">
                        <h3>{portfolioSection.project.title}</h3>
                        <p className="md:text-[18px] text-[16px] pt-[8px]">{portfolioSection.project.paragraph}</p>
                        <Link href={portfolioSection.project.btnUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="default"
                                className="bg-violet md:w-[260px] w-full h-[45px] md:px-[60px] py-2 md:mt-[40px] mt-[24px] rounded-[55px] z-10 hover:border-[2px] border-violet transition duration-500 button">
                                {portfolioSection.project.btnText}
                            </Button>
                        </Link>
                    </div>

                    <div className="md:flex hidden  flex-col z-10">
                        {portfolioSection.project.description.map((item, index) => (
                            <p key={index} className="text-[18px] text-[#63626B] text-right mt-[8px]">{item.text}</p>
                        ))}
                    </div>
                </div>
            </div>

            <Image
                width={600}
                height={600}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:top-[-200px] top-[-150px] md:left-[-300px] left-[-200px]  z-0 opacity-80" />

            <Image
                width={700}
                height={700}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:bottom-[-0px] bottom-[-200px] md:right-[-500px] right-[-200px] z-0 opacity-80" />

        </section>
    );
}