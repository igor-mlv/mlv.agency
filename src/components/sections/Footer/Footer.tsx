import { footer } from '@/constants';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer" className="relative flex flex-col pt-[50px] px-2 pb-2">
            <div className="w-full flex md:flex-row flex-col-reverse justify-between md:items-center items-start">
                <div className="space-y-[16px] md:">
                    <h2>{footer.title}</h2>
                    <p className="text-gray text-[18px]">Privacy Policy</p>
                    <p className="text-gray text-[18px]">© {currentYear} MLV Web Inc. All rights reserved.</p>
                </div>
                <div className="md:block hidden">
                    <p className="text-gray text-[18px] text-right">(mail)</p>
                    <p className="text-gray text-[24px] text-right">{footer.email}</p>
                </div>
            </div>

            <div className="w-[1444px] h-[1121] absolute top-[-200px]">
                <Image
                    src="/assets/footer/footerVector.svg"
                    width={1444}
                    height={1121}
                    alt="footer vector" />
            </div>

        </footer>
    )
}