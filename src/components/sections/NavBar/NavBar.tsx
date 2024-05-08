import { navbarLinks } from "@/constants";
import NavBarMobile from "./NavBarMobile";
import Image from "next/image"
import Link from "next/link";
import { Button } from "../../ui/button";

export default function NavBar() {
    return (
        <nav className="fixed top-[25px] flex justify-between items-center w-full max-w-[1280px] h-[62px] px-10 bg-stone-50/5 rounded-[38px] border border-neutral-500 backdrop-blur-lg z-50">
            <div>
                <Image
                    width={30}
                    height={30}
                    src="/assets/navBar/logo.png"
                    alt="logo"
                />
            </div>
            <div className="md:block hidden">
                {navbarLinks.map((link, index) => (
                    <Button asChild
                        className="navBarButtons hover:text-violet px-0"
                        variant="default">
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            className={`flex justify-center ${index === navbarLinks.length - 1 ? "mr-0" : "mr-[64px]"}`}>
                            {link.title}
                        </Link>
                    </Button>
                ))}
            </div>
            <NavBarMobile navbarLinks={navbarLinks} className="md:hidden block pr-[30px]" />
        </nav>
    );
}