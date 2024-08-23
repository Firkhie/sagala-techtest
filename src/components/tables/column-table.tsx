"use client";

import { useColumnStore } from "@/store/column-store";
import { useEffect, useState } from "react";

import { Ellipsis, Plus, Search, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ColumnTable() {
  const { onOpen, data, delData } = useColumnStore();
  const [search, setSearch] = useState<string>("");
  const [contents, setContents] = useState<
    {
      id: string;
      name: string;
      progress: number;
      quantity: number;
      date: string;
    }[]
  >(data);
  useEffect(() => {
    if (search) {
      const newData = data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase()),
      );
      setContents(newData);
    } else {
      setContents(data);
    }
  }, [data, search]);
  return (
    <div className="h-[390px] overflow-auto rounded-2xl bg-[#ffffff] scrollbar-hide">
      <div className="flex items-center justify-between px-6 py-5">
        <h3 className="text-[22px] font-bold">4-Column Table</h3>
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-6 text-xs font-bold uppercase text-[#a7b1bb]">
              Name
            </TableHead>
            <TableHead className="text-xs font-bold uppercase text-[#a7b1bb]">
              Progress
            </TableHead>
            <TableHead className="text-xs font-bold uppercase text-[#a7b1bb]">
              Quantity
            </TableHead>
            <TableHead className="pr-6 text-xs font-bold uppercase text-[#a7b1bb]">
              Date
            </TableHead>
            <TableHead className="pr-6 text-xs font-bold uppercase text-[#a7b1bb]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.map((e) => (
            <TableRow key={e.id} className="border-b-0 font-bold">
              <TableCell className="pl-6">{e.name}</TableCell>
              <TableCell className="flex items-center gap-x-3 pr-6">
                {e.progress}%
              </TableCell>
              <TableCell>{e.quantity}</TableCell>
              <TableCell>{e.date}</TableCell>
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
