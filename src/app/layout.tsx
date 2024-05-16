import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/sections/NavBar/NavBar";
import Footer from "@/components/sections/Footer/Footer";
import { Toaster } from "@/components/ui/toaster"



export const metadata: Metadata = {
  title: "MLV Web agency",
  description: "Web agency that makes custom websites for Canada and US",
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center w-full overflow-hidden min-w-[380px] bg-[#111113]">
          <div className="w-full max-w-[1280px]">
            <NavBar />
            <main>{children}</main>
            <Toaster />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
