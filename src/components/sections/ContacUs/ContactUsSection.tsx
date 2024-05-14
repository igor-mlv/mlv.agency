import { contactUsSection } from "@/constants"
import parse from 'html-react-parser';
import ContactUsForm from "@/components/ui/customUI/ContactUsForm"

export default function ContactUsSection() {
    return (
        <section id="contact" className="relative flex flex-col pt-[150px] px-2">

            <div className="w-full flex md:flex-row flex-col justify-around md:space-y-0 space-y-[40px]">
                <h2 className="z-10 w-full max-w-[630px]">{parse(contactUsSection.title)}</h2>

                <ContactUsForm />
            </div>

            <div className="absolute w-[370px] h-[370px] top-[-0px] left-[-350px] opacity-20 bg-violet rounded-full blur-[70px] z-0" />
        </section>
    )
}           