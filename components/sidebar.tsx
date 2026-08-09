"use client";
import Image from "next/image";
import SButton from "./sidebar-button";
import {
    BookImage
} from "lucide-react";

const av = "https://cdn.discordapp.com/avatars/900781427719819316/8dd05eded702ba453a5e33091a71432c.webp?size=96";

export default function Sidebar() {
    return (
        <div className="h-fit my-6 ml-6 flex flex-col justify-between items-center w-20 py-6 bg-[var(--background-secondary)]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center gap-6">
                <div className="relative group">
                    <div className="absolute rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
                    <Image
                    src={av}
                    alt="Tactor"
                    width={128}
                    height={128}
                    className="relative w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 group-hover:scale-105 active:scale-95 object-cover"
                    onClick={() => window.open("https://github.com/tactordev/", "_blank")}
                    />
                </div>

                <div className="w-8 h-[1px] bg-white/10 rounded-full" />

                <SButton name={"Regulation Builder"} image={<BookImage className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 group-active:scale-95" />} url={"/vbuilder"} />
            </div>
        </div>
    );
}