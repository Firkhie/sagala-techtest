"use client";

import { cn } from "@/lib/utils";
import {
  ChartNoAxesColumn,
  House,
  LockKeyhole,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dashboardContents = [
  {
    label: "Main Dashboard",
    href: "/main-dashboard",
    icon: House,
  },
  {
    label: "NFT Marketplace",
    href: "/nft-marketplace",
    icon: ShoppingCart,
  },
  {
    label: "Data Tables",
    href: "/",
    icon: ChartNoAxesColumn,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Sign In",
    href: "/sign-in",
    icon: LockKeyhole,
  },
  {
    label: "RTL Admin",
    href: "/rtl-admin",
    icon: House,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex h-[90px] cursor-pointer flex-col items-center justify-center gap-y-10 border-b-[1px]">
        <p className="text-2xl uppercase">
          <span className="font-extrabold">Horizon</span> Free
        </p>
      </div>
      <div className="flex flex-1 cursor-pointer flex-col gap-y-2 py-10 pl-6 text-[#8e9bbb]">
        {dashboardContents.map((content) => (
          <Link href={content.href} key={content.label}>
            <div
              className={cn(
                "relative flex h-[36px] items-center gap-x-5",
                pathname === content.href
                  ? "font-extrabold text-[#1b244b]"
                  : "",
              )}
            >
              <content.icon
                className={cn(
                  "h-[20px] w-[20px]",
                  pathname === content.href ? "text-[#422afa]" : "",
                )}
              />
              <p>{content.label}</p>
              <div
                className={cn(
                  "",
                  pathname === content.href
                    ? "absolute right-0 top-0 h-full w-1 rounded-full bg-[#422afa]"
                    : "",
                )}
              ></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="relative flex h-[250px] flex-col items-center justify-center gap-y-2 rounded-[32px] bg-gradient-to-br from-[#8284ff] to-[#4a25fe] px-[15px] pt-[35px] text-white">
        <div className="absolute -top-10 flex h-[94px] w-[94px] items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-[#8284ff] to-[#4a25fe]">
          <div className="relative h-[40px] w-[40px] rounded-full border-[8px] border-white bg-gradient-to-br from-[#8284ff] to-[#4a25fe]">
            <div className="absolute -bottom-[5px] left-1/2 h-[21px] w-[21px] -translate-x-1/2 transform rounded-full bg-[#ffffff]"></div>
          </div>
        </div>
        <p className="text-[18px] font-extrabold">Upgrade to PRO</p>
        <p className="px-[10px] text-center text-sm font-semibold">
          Improve your development process and start doing more with Horizon UI
          PRO!
        </p>
        <button className="mt-3 rounded-xl bg-gradient-to-br from-[#7e6ffe] to-[#6d50ff] p-2 px-10 text-sm hover:bg-gradient-to-r hover:from-[#7061ff] hover:to-[#5f3fff]">
          Upgrade to PRO
        </button>
      </div>
    </div>
  );
}
