import { aboutUsSection } from "@/constants";

export default function AboutUs() {
    const paragraph = aboutUsSection.paragraphs.find(paragraph => paragraph.id === 1);
    return (
        <div className="flex flex-col justify-between items-start pt-[100px]">
            <h2>About <span className="text-violet">us</span></h2>
            <p>{paragraph && paragraph.text}</p>
            {paragraph && <p dangerouslySetInnerHTML={{ __html: paragraph.text }}></p>}
            <p>At <span className='text-violet'>MLV Web</span> Agency, we create unique websites from scratch.</p>
        </div>
    );
}