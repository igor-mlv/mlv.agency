import { contactUsSection } from "@/constants"
import parse from 'html-react-parser';
import ContactUsForm from "@/components/ui/customUI/ContactUsForm"
import Image from "next/image";

export default function ContactUsSection() {
    return (
        <section id="contact" className="relative flex flex-col pt-[150px] px-2">

            <div className="w-full flex md:flex-row flex-col justify-around items-center md:space-y-0 space-y-[40px]">
                <h2 className="z-10 w-full max-w-[630px]">{parse(contactUsSection.title)}</h2>

                <ContactUsForm />
            </div>

            <Image
                width={770}
                height={770}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:top-[-100px] top-[-000px] md:left-[-450px] left-[-200px] z-0 opacity-70" />
        </section>
    )
}           