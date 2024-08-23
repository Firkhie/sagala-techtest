import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DasboardLayout({ children }: Props) {
  return (
    <div className="relative min-h-full bg-[#eef0fa] text-[#1b244b]">
      <div className="fixed hidden h-full w-[325px] pr-[25px] xl:flex">
        <div className="h-full w-full bg-[#ffffff] px-4 py-[25px]">
          <Sidebar />
        </div>
      </div>
      <div className="min-h-full w-full p-[30px] xl:pl-[322px]">
        <Navbar />
        <div className="pt-4 xl:pt-[6px]">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
