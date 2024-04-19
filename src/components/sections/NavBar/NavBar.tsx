import { navbarLinks } from "@/constants";
import NavBarMobile from "./NavBarMobile";
import Image from "next/image"
import Link from "next/link";
import { Button } from "../../ui/button";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center w-full max-w-[1280px] h-[90px] fixed top-0 bg-primary">
            <div>
                <Image
                    width={100}
                    height={100}
                    src="/assets/navBar/logo.png"
                    alt="logo"
                />
            </div>
            <div className="md:block hidden">
                {navbarLinks.map((link, index) => (
                    <Button asChild
                        className="navBarButtons"
                        variant="ghost">
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            className={`flex justify-center ${index === navbarLinks.length - 1 ? "mr-0" : "mr-[40px]"}`}>
                            {link.title}
                        </Link>
                    </Button>
                ))}
            </div>
            <NavBarMobile navbarLinks={navbarLinks} className="md:hidden block pr-[30px]" />
        </nav>
    );
}