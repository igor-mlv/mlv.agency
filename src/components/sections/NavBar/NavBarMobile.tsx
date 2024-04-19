import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { Button } from "../../ui/button";
import Image from "next/image";

export default function NavBarMobile({ className, navbarLinks }: { className: string, navbarLinks: { id: string, title: string }[] }) {
    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger>
                    <Image
                        width={60}
                        height={60}
                        src="/assets/navBar/hamburgerMenu.png"
                        alt="hamburgerMenu"
                    />
                </SheetTrigger>
                <SheetContent className="bg-primary">
                    <div className="flex flex-col pt-[100px] pb-[20px]">
                        {navbarLinks.map((link) => (
                            <Button asChild
                                className="navBarButtons hover:no-underline pb-[50px]"
                                variant="link">
                                <Link
                                    key={link.id}
                                    href={`#${link.id}`}
                                >
                                    {link.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}