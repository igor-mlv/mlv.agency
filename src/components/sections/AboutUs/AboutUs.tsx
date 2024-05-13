import { aboutUsSection } from "@/constants";
import parse from 'html-react-parser';
import Image from 'next/image';

export default function AboutUs() {
    const gridCards = "flex justify-center p-[24px] bg-[#FAF6F6] bg-opacity-[5%] rounded-[23px] border-[#63626B] border-[2px] md:m-[-4px] border-opacity-0 md:hover:border-opacity-100 transition"

    return (
        <section id="aboutUs" className="relative flex flex-col justify-between items-start pt-[100px] md:px-0 px-2 ">
            <div className=" absolute w-[426px] h-[426px] top-0 left-[-150px] opacity-20 bg-violet rounded-full blur-[60px] z-0" />

            <h2 className="z-10 px-2">{aboutUsSection.title}</h2>

            <div className="w-full md:h-[590px] md:mt-[60px] mt-[32px] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-[20px] md:gap-y-[28px] z-10 flex flex-col md:space-y-0 space-y-[16px]">
                <div className={`${gridCards} md:py-[40px]`}>
                    <p>{parse(aboutUsSection.firstParagraph.text)}</p>
                </div>

                <div className={`${gridCards} flex-col`}>
                    <p>{parse(aboutUsSection.secondParagraph.text)}</p>
                    <p className="pt-[10px] md:text-[2.5rem] text-[2rem]">{parse(aboutUsSection.secondParagraph.dollarText)}</p>
                </div>

                <div className={`${gridCards} col-span-2 col-start-1 row-start-2`}>
                    <div className="flex flex-row justify-start items-center w-full">
                        <p className="max-w-[540px]">{parse(aboutUsSection.thirdParagraph.text)}</p>
                        <Image
                            width={147}
                            height={176}
                            src={aboutUsSection.thirdParagraph.iconUrl}
                            alt="50%Icon"
                            className="md:ml-[40px] md:w-[147px] w-[85px] md:float-none" />

                    </div>
                </div>

                <div className={`bg-[#FAF6F6] bg-opacity-[5%] md:rounded-[23px] rounded-[16px] flex-col justify-between md:p-[24px] p-[8px] row-span-2 col-start-3 row-start-1 md:bg-[url('/assets/aboutUsSection/IgorPhotoBG.png')] bg-[url('/assets/aboutUsSection/IgorPhotoBGSmall.png')] bg-cover`}>
                    <div className="relative w-full h-auto" >
                        <Image
                            width={364}
                            height={485}
                            src={aboutUsSection.igorPhotoUrl}
                            alt={aboutUsSection.igorPhotoAlt}
                            className="md:object-cover object-cover md:rounded-[12px] rounded-[16px] md:w-[364px] w-full md:h-[485px] h-[290px]"
                            unoptimized />
                    </div>

                    <p className="md:pt-[36px] pt-[8px] text-[1.5rem]">{parse(aboutUsSection.igorPhotoTitle)}</p>

                </div>

            </div>
        </section>
    );
}

//this is the function that is used to remove a bug, if you deleted, the parse function will not work
// { parse('<p className="text-violet"> </p>') }