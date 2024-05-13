import { portfolioSection } from "@/constants";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="flex flex-col mt-[150px] px-2">
            <h2>{portfolioSection.title}</h2>
            <div className="relative w-full flex md:flex-row flex-col md:justify-between justify-center bg-[url('/assets/portfolioSection/ContainerBG.png')] bg-cover rounded-[24px] md:mt-[60px] mt-[32px] md:p-[24px] p-[8px]">
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

                <div className=" absolute w-[570px] h-[570px] top-[-200px] right-[-300px] opacity-20 bg-violet rounded-full blur-[100px] z-0" />

                <div className=" absolute top-[-300px] left-[-400px] ">
                    <Image
                        width={590}
                        height={635}
                        src="/assets/portfolioSection/neonRectangle.svg"
                        alt="neonRectangle"
                    />
                </div>
            </div>
        </section>
    );
}