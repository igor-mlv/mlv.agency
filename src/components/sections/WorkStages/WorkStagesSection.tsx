import { workStagesSection } from "@/constants";
import workStagesCard from "@/components/sections/WorkStages/workStagesCard";

export default function WorkStagesSection() {
    return (
        <section id="portfolio" className="relative flex flex-col mt-[150px] px-2">
            <h2>{workStagesSection.title}</h2>
            <div className="w-full flex flex-col md:mt-[60px] mt-[32px] md:space-y-[40px] space-y-[16px]">
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

            <div className="absolute top-0 left-[-200px] w-[353px] h-[353px] opacity-20 bg-violet rounded-full blur-[100px]" />

            <div className=" absolute bottom-[200px] right-[-400px] w-[570px] h-[570px] opacity-20 bg-violet rounded-full blur-[100px]" />
        </section>
    );
}