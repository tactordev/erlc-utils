"use client";
import { SquareArrowOutUpRight } from "lucide-react";


export default function Home() {
  return (
    <div>
      <p className="font-semibold text-2xl">No content selected.</p>
      <div onClick={() => window.location.href = "/vbuilder"} className="flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-md mt-2 hover:bg-[var(--primary)]/80 bg-[var(--primary)]/40 hover:cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 w-fit px-8">
        <p className="text-xl">Regulation builder</p>
        <SquareArrowOutUpRight className="w-4 h-4" />
      </div>
    </div>
  );
}