import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
        {/* left */}
        <div className='w-[14%] md:w[8%] lg:[16%] xl:w[14%] py-5 px-3 '>

        <Link href="/" className=" flex items-center justify-center gap-2">
        <Image src="/logo.png" width={32} height={32} alt=""/>
        <span className="hidden lg:block">SMS</span>

        </Link>
        <Menu/>
        </div>
        {/* right*/}
        <div className="w-[86%] md:[92%] lg:[84%] xl:w[86%] bg-[#F7F8FA] py-5 px-3 overflow-auto flex flex-col">
            <Navbar/>
            {children}
        </div>

    </div>
    
  );
}
