import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import takeoff from "@/public/assets/takeoff.jpg";

export default function Header() {
  return (
    <div className="flex w-[22rem] flex-col rounded-3xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-300/50">
      <div className="flex items-center justify-between">
        <div className="relative mr-3">
          <Search size={18} className="absolute left-3 top-3 text-zinc-500" />

          <Input
            type="text"
            placeholder="Search"
            className="h-10 rounded-full border-none bg-[#f3f3f3] pl-10 shadow-none focus-visible:ring-1 focus-visible:ring-zinc-200"
          />
        </div>
        <Image
          src={takeoff}
          alt=""
          className="h-9 w-9 rounded-full object-cover"
        />
      </div>
      {/* tags */}
      <div className="mt-3 flex items-center justify-between overflow-y-hidden overflow-x-scroll">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Button
              key={i}
              variant={"outline"}
              className="mr-2 h-7 rounded-full px-3 text-xs font-medium text-zinc-600"
            >
              Dark
            </Button>
          ))}
      </div>
    </div>
  );
}
