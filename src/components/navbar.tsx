"use client";

import { usePathname } from "next/navigation";

import { Bell, CircleAlert, Moon, Search } from "lucide-react";
import SidebarMobile from "./sidebar-mobile";

export default function Navbar() {
  const pathname = usePathname();
  let newPathname = pathname.substring(1).replaceAll("-", " ");
  if (newPathname.length === 0) {
    newPathname = "Data Tables";
  }

  return (
    <div className="sticky top-5 z-30 flex h-[140px] flex-col rounded-xl bg-[#eef0fa]/70 px-2 pb-3 xl:h-[82px] xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-col">
        <p className="text-sm capitalize">Pages / {newPathname}</p>
        <h3 className="text-[34px] font-bold capitalize">{newPathname}</h3>
      </div>
      <div className="flex h-[60px] items-center gap-x-3 rounded-full bg-[#ffffff] p-[10px] shadow-md xl:w-fit">
        <div className="flex h-full w-[200px] flex-1 items-center gap-x-3 rounded-full bg-[#f4f7fe] p-5">
          <Search className="h-[18px] w-[18px]" />
          <input
            className="w-full bg-transparent text-sm focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Search..."
          />
        </div>
        <SidebarMobile />
        <Bell className="h-[15px] w-[15px] cursor-pointer text-[#a1aebf]" />
        <CircleAlert className="h-[15px] w-[15px] cursor-pointer text-[#a1aebf]" />
        <Moon className="h-[15px] w-[15px] cursor-pointer text-[#a1aebf]" />
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#11037a]">
          <p className="text-sm text-white">AP</p>
        </div>
      </div>
    </div>
  );
}
