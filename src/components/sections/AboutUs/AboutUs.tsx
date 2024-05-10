import { aboutUsSection } from "@/constants";
import parse from 'html-react-parser';
import Image from 'next/image';

export default function AboutUs() {
    const gridCards = "flex justify-center px-[24px] bg-[#FAF6F6] bg-opacity-[5%] rounded-[23px] border-[#63626B] border-[2px] m-[-4px] border-opacity-0 hover:border-opacity-100 transition"

    return (
        <section id="aboutUs" className="relative flex flex-col justify-between items-start pt-[100px] ">
            <div className=" absolute w-[426px] h-[426px] top-0 left-[-150px] opacity-20 bg-violet rounded-full blur-[60px] z-0" />

            <h2 className="z-10 px-2">{aboutUsSection.title}</h2>

            <div className="w-full h-[590px] mt-[60px] grid grid-cols-3 grid-rows-2 gap-x-[20px] gap-y-[28px] z-10">
                <div className={`${gridCards} py-[40px]`}>
                    <p>{parse(aboutUsSection.firstParagraph.text)}</p>
                </div>

                <div className={`${gridCards} flex-col`}>
                    <p>{parse(aboutUsSection.secondParagraph.text)}</p>
                    <p className="pt-[10px]">{parse(aboutUsSection.secondParagraph.dollarText)}</p>
                </div>

                <div className={`${gridCards} col-span-2 col-start-1 row-start-2`}>
                    <div className="flex flex-row justify-start items-center w-full">
                        <p className="max-w-[540px]">{parse(aboutUsSection.thirdParagraph.text)}</p>
                        <Image
                            width={147}
                            height={176}
                            src={aboutUsSection.thirdParagraph.iconUrl}
                            alt="50%Icon"
                            className="ml-[40px]" />
                    </div>
                </div>

                <div className={`bg-[#FAF6F6] bg-opacity-[5%] rounded-[23px] flex-col justify-between px-[24px] py-[24px] row-span-2 col-start-3 row-start-1 bg-[url('/assets/aboutUsSection/IgorPhotoBG.png')] bg-cover`}>
                    <div className="relative w-full h-auto" >
                        <Image
                            width={364}
                            height={485}
                            src={aboutUsSection.igorPhotoUrl}
                            alt={aboutUsSection.igorPhotoAlt}
                            className="object-cover"
                            unoptimized />
                    </div>

                    <p className="pt-[36px] text-[1.5rem]">{parse(aboutUsSection.igorPhotoTitle)}</p>

                </div>

            </div>
        </section>
    );
}

//this is the function that is used to remove a bug, if you deleted, the parse function will not work
// { parse('<p className="text-violet"> </p>') }