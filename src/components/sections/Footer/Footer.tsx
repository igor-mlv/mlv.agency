import { footer } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer" className="relative flex flex-col pt-[50px] px-2 pb-2">
            <div className="w-full flex md:flex-row flex-col-reverse justify-between md:items-center items-start z-10">
                <div className="space-y-[16px]">
                    <h2 className="leading-none">{footer.title}</h2>

                    <Link href="/privacyPolicy" target="_blank" rel="noopener noreferrer">
                        <p className="text-gray text-[18px] mt-[16px]">Privacy Policy</p>
                    </Link>

                    <p className="text-gray text-[18px]">© {currentYear} MLV Web Inc. All rights reserved.</p>
                </div>
                <div className="md:block hidden">
                    <p className="text-gray text-[18px] text-right">(mail)</p>
                    <p className="text-gray text-[24px] text-right">{footer.email}</p>
                </div>
            </div>

            <div className="w-[1400px] h-[300px] absolute top-[-100px] z-0 overflow-hidden">
                <Image
                    src="/assets/footer/footerVector.svg"
                    width={1444}
                    height={300}
                    alt="footer vector"
                />
            </div>

        </footer>
    )
}