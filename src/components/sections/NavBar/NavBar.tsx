import { navbarLinks } from "@/constants";
import Image from "next/image"
import Link from "next/link";
import { Button } from "../../ui/button";

export default function NavBar() {
    return (
        <nav className="fixed w-full z-50 top-[25px] start-0 px-2 ">
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto md:px-[40px] px-[20px] md:py-[16px] py-[8px] bg-stone-50/5 rounded-[38px] border border-neutral-500 backdrop-blur-lg navBarBlur  border-collapse">

                <Link href="/#hero">
                    <Image
                        width={30}
                        height={30}
                        src="/assets/navBar/logo.png"
                        alt="logo"
                    />
                </Link>

                <div className="flex justify-center items-center">
                    {navbarLinks.map((link, index) => (
                        <Button asChild
                            key={link.id}
                            className={` ${index === navbarLinks.length - 1 ? "mr-0 " : "mr-[64px] md:inline-flex hidden"} navBarButtons hover:text-violet px-0`}
                            variant="default">
                            <Link href={`/#${link.id}`}>
                                {link.title}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    );
}