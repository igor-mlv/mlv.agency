import { workStagesSection } from "@/constants";
import workStagesCard from "@/components/sections/WorkStages/workStagesCard";
import Image from "next/image";

export default function WorkStagesSection() {
    return (
        <section id="portfolio" className="relative flex flex-col mt-[150px] px-2">
            <h2>{workStagesSection.title}</h2>
            <div className="w-full flex flex-col md:mt-[60px] mt-[32px] md:space-y-[40px] space-y-[16px] z-10">
                <div className="w-full flex md:flex-row flex-col justify-start md:space-x-[240px] md:space-y-[0px] space-y-[16px]">
                    {workStagesSection.stages.slice(0, 2).map((item) => (
                        workStagesCard(item)
                    ))}
                </div>

                <div className="w-full flex md:flex-row flex-col justify-end md:space-x-[240px] md:space-y-[0px] space-y-[16px]">
                    {workStagesSection.stages.slice(2, 4).map((item) => (
                        workStagesCard(item)
                    ))}
                </div>

                <div className="w-full flex md:flex-row flex-col justify-start md:space-x-[24px] md:space-y-[0px] space-y-[16px]">
                    {workStagesSection.stages.slice(4, 6).map((item) => (
                        workStagesCard(item)
                    ))}
                </div>

            </div>

            <Image
                width={570}
                height={570}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:top-[-150px] top-[350px] md:left-[-350px] left-[-250px] z-0 md:opacity-100 opacity-75" />

            <Image
                width={770}
                height={770}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:bottom-[0px] bottom-[200px] md:right-[-500px] right-[-300px] z-0 opacity-80" />

        </section>
    );
}