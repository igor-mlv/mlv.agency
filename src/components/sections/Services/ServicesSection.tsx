import { servicesSection } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section id="services" className="relative flex flex-col mt-[150px] px-2">
            <h2 className="z-10">{servicesSection.title}</h2>

            <div className="relative md:mt-[60px] mt-[32px] w-full md:h-[650px] h-auto flex justify-center items-center md:flex-row flex-col md:space-x-[24px] md:space-y-0 space-y-[16px] z-10">
                {servicesSection.cards.map((card) => (
                    <div key={card.id} className="group relative md:w-[410px] w-full md:h-[590px] h-auto md:hover:h-[645px] md:px-[20px] md:py-[40px] p-[24px] bg-[#FAF6F6] bg-opacity-[5%] rounded-[24px] border-gray border-[2px] border-opacity-0 hover:border-opacity-100 transition-all duration-1000">

                        <div className="flex md:flex-col flex-row-reverse md:space-y-[24px] justify-center items-start">
                            <h4 className="md:ml-0 ml-[24px] text-violet">{card.title}</h4>
                            {/* <div>
                                <h6 className="text-white">{card.startsFrom}</h6>
                                <h2 className="md:text-[3rem] text-[2.5rem]">{card.price}</h2>
                            </div> */}
                        </div>
                        <ul className="list-disc text-gray md:mt-[24px] mt-[16px]">
                            {card.list.map((listItem, index) => (
                                <li key={index} className="relative ml-[20px]">
                                    <p className="text-[18px] text-gray">{listItem}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="md:flex justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-1000">
                                <Button asChild
                                    variant="default"
                                    className="bg-violet md:w-[260px] w-[156px] h-[45px] md:px-[60px] px-[24px] md:my-[45px] my-[16px] rounded-[55px] z-30 hover:border-[2px] transition-all duration-500 border-violet button">
                                    <Link href="#contact">
                                        {servicesSection.btnText}
                                    </Link>
                                </Button>
                                <div className="absolute top-[10px] w-[312px] h-[98px] opacity-50 bg-violet rounded-full blur-[50px]" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <Image
                width={570}
                height={570}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:top-[-150px] top-[-170px] md:left-[-250px] left-[-220px] z-0 opacity-80" />


        </section>
    );
}