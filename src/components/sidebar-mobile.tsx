import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";

export default function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-[15px] w-[15px] cursor-pointer text-[#a1aebf] xl:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="m-0 w-72 border-none p-0 text-white">
        <div className="fixed flex h-full w-[325px] pr-[25px] text-[#1b244b]">
          <div className="h-full w-full bg-[#ffffff] px-4 py-[25px]">
            <Sidebar />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
