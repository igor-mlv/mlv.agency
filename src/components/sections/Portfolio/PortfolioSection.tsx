import { portfolioSection } from "@/constants";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="flex flex-col mt-[150px] px-2">
            <h2>{portfolioSection.title}</h2>
            <div className="relative w-full flex justify-between bg-[url('/assets/portfolioSection/ContainerBG.png')] bg-cover rounded-[23px] mt-[60px] p-[24px]">
                <div className="w-full max-w-[820px] h-[502px] flex justify-center items-center bg-[url('/assets/portfolioSection/PhotoBG.png')] bg-cover rounded-[12px]">
                    <Image
                        width={532}
                        height={336}
                        src={portfolioSection.project.portfolioImgUrl}
                        alt="Portfolio For Ottawa construction company"
                        className="rounded-[10px]"
                        unoptimized />
                </div>

                <div className="w-full max-w-[360px] flex flex-col justify-between ml-2">
                    <div className="pt-[50px]">
                        <h3>{portfolioSection.project.title}</h3>
                        <p className="text-[18px] pt-[8px]">{portfolioSection.project.paragraph}</p>
                        <Link href={portfolioSection.project.btnUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="default"
                                className="bg-violet w-[260px] h-[45px] px-[60px] py-2 my-[40px] rounded-[55px] z-10 hover:border-[2px] border-violet transition duration-500 button">
                                {portfolioSection.project.btnText}
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-col">
                        {portfolioSection.project.description.map((item, index) => (
                            <p key={index} className="text-[18px] text-[#63626B] text-right mt-[8px]">{item.text}</p>
                        ))}
                    </div>
                </div>

                <div className=" absolute w-[570px] h-[570px] top-[-200px] right-[-300px] opacity-20 bg-violet rounded-full blur-[100px]" />

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