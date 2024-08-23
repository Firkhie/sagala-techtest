"use client";

import Image from "next/image";
import { useDevelopmentStore } from "@/store/development-store";

import { Ellipsis, Plus, Search, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export default function DevelopmentTable() {
  const { onOpen, data, delData } = useDevelopmentStore();
  const [search, setSearch] = useState<string>("");
  const [contents, setContents] = useState<
    {
      id: string;
      name: string;
      images: string[];
      date: string;
      progress: number;
    }[]
  >(data);
  useEffect(() => {
    if (search) {
      const newData = data.filter((e) =>
        e.name.toLowerCase().startsWith(search.toLowerCase()),
      );
      setContents(newData);
    } else {
      setContents(data);
    }
  }, [data, search]);
  return (
    <div className="h-[745px] overflow-auto rounded-2xl bg-[#ffffff] scrollbar-hide">
      <div className="flex items-center gap-x-5 justify-between px-6 py-5">
        <h3 className="text-[22px] font-bold">Development Table</h3>
        <div className="flex items-center gap-x-2">
          <div className="flex h-full max-w-[200px] items-center gap-x-3 rounded-full bg-[#f4f7fe] p-2">
            <Search className="h-[18px] w-[18px]" />
            <input
              className="w-full bg-transparent text-sm focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex h-[37px] w-[37px] items-center justify-center rounded-lg bg-[#f4f7fe]">
                <Ellipsis className="h-[20px] w-[20px]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1">
              <DropdownMenuItem
                className="flex cursor-pointer items-center gap-x-3"
                onClick={onOpen}
              >
                <Plus className="h-[14px] w-[14px]" />
                <p className="text-xs">Add Data</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Table className="!overflow-auto !scrollbar-hide">
        <TableHeader>
          <TableRow>
            <TableHead className="pl-6 text-xs font-bold uppercase text-[#a7b1bb]">
              Name
            </TableHead>
            <TableHead className="text-xs font-bold uppercase text-[#a7b1bb]">
              Tech
            </TableHead>
            <TableHead className="text-xs font-bold uppercase text-[#a7b1bb]">
              Date
            </TableHead>
            <TableHead className="pr-6 text-xs font-bold uppercase text-[#a7b1bb]">
              Progress
            </TableHead>
            <TableHead className="pr-6 text-xs font-bold uppercase text-[#a7b1bb]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.map((e) => (
            <TableRow key={e.name} className="border-b-0 font-bold">
              <TableCell className="pl-6">{e.name}</TableCell>
              <TableCell>
                <div className="flex w-[90px] items-center gap-x-3">
                  {e.images.map((img) => (
                    <Image
                      src={img}
                      alt="tech-image"
                      width={20}
                      height={20}
                      key={img}
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell>{e.date}</TableCell>
              <TableCell className="flex items-center gap-x-3 pr-6">
                {e.progress}%
                <Progress
                  value={e.progress}
                  className="h-2 [&>div]:bg-[#432afc]"
                />
              </TableCell>
              <TableCell>
                <Trash
                  className="h-[20px] w-[20px] cursor-pointer text-red-500"
                  onClick={() => delData(e.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
