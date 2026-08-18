"use client";
import CHR from "@/components/chr";
import { useRef, useState } from "react";
import {
    ChevronDown,
    Circle,
    CircleSlash,
    Plus,
    ReceiptTurkishLiraIcon,
    Trash2
} from "lucide-react";
import Button from "@/components/button";
import { AccessoryType, VehicleType, vehicles, accessories } from "./data";
import Image from "next/image";
import { toPng } from "html-to-image";

type ObjType = {
    id: string;
    type: "vehicle" | "accessory";
    value: VehicleType | AccessoryType
}
function Obj(
    {
        id,
        name,
        del,
        type
    }: {
        id: string;
        name: string;
        del: (id: string) => void;
        type: "vehicle" | "accessory";
    }
) {
    return (
        <div className="flex flex-col relative justify-center items-center rounded-md group h-full w-fit overflow-hidden bg-zinc-200/5 aspect-square w-full">
            <div className="flex items-center justify-center relative h-full w-full"><Image src={`/media/${type}/exports/${name}.png`} unoptimized alt={`${name} Model`} width={600} height={400} className="object-contain p-2 transition-transform duration-200 group-hover:scale-105" /></div>
            <div onClick={() => { del(id); }} className="group-hover:opacity-100 opacity-0 transition-all duration-200 absolute top-2 right-2 bg-red-900/40 px-3 py-2 rounded-md hover:bg-red-900/50 hover:cursor-pointer hover:scale-105 active:scale-95">
                <Trash2 className="w-4 h-4 text-zinc-300" />
            </div>
            <div className="absolute bottom-2 left-2 px-4 py-2 bg-zinc-200/5 rounded-md">
                <p className="text-zinc-200/40 font-bold text-lg">{name}</p>
            </div>
        </div>
    )
}

function Editor(
    {
        type,
        objs,
        del
    }: {
        type: "vehicle" | "accessory";
        objs: ObjType[];
        del: (id: string) => void;
    }
) {
    const relevant = objs.filter((obj) => obj.type === type);
    return (
        <div className={`max-h-[40vh] min-h-[20vh] overflow-y-hidden w-full gap-2 py-2 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mb-4 ${relevant.length > 0 ? "items-end" : "items-center"} justify-center`}>
            {
                relevant.length > 0 ? relevant.map((obj, index) => <Obj key={`${type}obj-${index}`} id={obj.value.id} name={obj.value.name} del={del} type={type} />) : (
                    <div className="flex flex-col items-center justify-center w-full h-full gap-4 opacity-20">
                        <CircleSlash className="w-16 h-16 text-zinc-500/80" />
                        <p className="text-2xl font-bold text-zinc-500/80">Nothing added.</p>
                    </div>
                )
            }
        </div>
    )
} 

function SearchList(
    {
        type,
        add
    }: {
        type: "vehicle" | "accessory";
        add: (type: "vehicle" | "accessory", value: VehicleType | AccessoryType) => void;
    }
) {
    const [val, setVal] = useState<string>("");
    const search = (
        <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <input
                value={val}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
                type="text"
                placeholder="Search..."
                className="text-base my-2 px-4 py-0.5 bg-zinc-300/5 rounded-md outline-none border border-zinc-800/10 focus:border-zinc-800/20 w-full"
            />
        </form>
    );

    if (type === "vehicle") {
        const res = vehicles.filter((value) => value.name.toLowerCase().includes(val.toLowerCase()));
        return (
            <div className="flex flex-col items-center justify-center w-full">
                {search}
                <div className="flex flex-col w-full h-full items-center justify-center gap-1">
                    {res.length > 0 ? (
                        res.map((val, index) => (
                            <Button key={`vehiclesearch-${index}`} onClick={() => add("vehicle", val)} className="!justify-start w-full text-sm">
                                {val.name}
                            </Button>
                        ))
                    ) : (
                        <div className="w-full flex flex-col items-center justify-center gap-2 opacity-40 mt-2 mb-2">
                            <CircleSlash className="w-8 h-8 text-zinc-500/80" />
                            <p className="text-base font-semibold text-zinc-500/80">No results found.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const filteredAccessories = accessories.filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase())
    );

    const groupedAccessories = filteredAccessories.reduce<Record<string, AccessoryType[]>>((acc, item) => {
        const cat = item.category || "Other";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});

    const categories = Object.keys(groupedAccessories);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {search}
            <div className="flex flex-col w-full h-full items-start justify-start gap-3 mt-1">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category} className="w-full flex flex-col gap-1">
                            <p className="text-xs font-bold text-zinc-400/60 tracking-wider px-1 text-left">
                                {category}
                            </p>
                            {groupedAccessories[category].map((item, index) => (
                                <Button
                                    key={`accsearch-${category}-${index}`}
                                    onClick={() => add("accessory", item)}
                                    className="!justify-start w-full text-sm"
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="w-full flex flex-col items-center justify-center gap-2 opacity-40 mt-2 mb-2">
                        <CircleSlash className="w-8 h-8 text-zinc-500/80" />
                        <p className="text-base font-semibold text-zinc-500/80">No results found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function VBuilder() {
    const [objs, setObjs] = useState<ObjType[]>([]);
    const [col, setCol] = useState<string>("#fff");
    const [bgCol, setBgCol] = useState<string>("#fff");
    const [exportDropdown, setExportDropdown] = useState<boolean>(false);
    const [exporting, setExporting] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<"vehicle" | "accessory" | null>(null);

    const canvas = useRef<HTMLDivElement>(null);

    const handleExport = async (bgColor?: string) => {
        if (!canvas.current) return;
        setExporting(true);

        try {
            const data = await toPng(canvas.current, {
                cacheBust: true,
                backgroundColor: bgColor || undefined,
            });

            const link = document.createElement("a");
            link.download = "regulation.png";
            link.href = data;
            link.click();
        } catch (err) {
            console.error(err);
        }
        setExporting(false);
    };

    return (
        <div className="w-full h-full">
            <h1 className="font-bold text-3xl">Regulation Builder</h1>
            <div className="mt-2 bg-zinc-900/40 rounded-md flex flex-col items-center justify-center border border-zinc-600/5 shadow-sm">
                <div className="py-2 px-4 w-full relative flex flex-row justify-between items-center">
                    <p className="font-semibold text-lg">Canvas</p>
                    <div className="relative flex flex-row gap-4">
                        <div
                            tabIndex={0}
                            onBlur={(e: React.FocusEvent<HTMLDivElement>) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) { setDropdown(null); } }}
                            className={`relative flex flex-row gap-4 focus:outline-none`}
                        >
                            <Button onClick={(e: React.MouseEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setDropdown("vehicle"); }}>
                                <Plus className="w-4 h-4" />
                            </Button>
                            {
                                dropdown && (
                                    <div className={`absolute z-10 border border-zinc-800/80 min-w-48 max-h-128 overflow-y-auto top-full right-0 rounded-md mt-2 bg-zinc-800/5 shadow-md backdrop-blur-md px-4 py-2 flex flex-col`}>
                                        <div className="flex flex-row gap-2 bg-zinc-500/5 px-2 py-1 rounded-md justify-between mx-2">
                                            <div onClick={() => setDropdown("vehicle")} className={`px-4 py-0.5 rounded-md ${dropdown === "vehicle" ? "bg-zinc-500/20" : "opacity-40 bg-transparent"} hover:bg-zinc-500/20 hover:cursor-pointer transition-all duration-200`}>
                                                <p>Vehicle</p>
                                            </div>
                                            <div onClick={() => setDropdown("accessory")} className={`px-4 py-0.5 rounded-md ${dropdown === "accessory" ? "bg-zinc-500/20" : "opacity-40 bg-transparent"} hover:bg-zinc-500/20 hover:cursor-pointer transition-all duration-200`}>
                                                <p>Accessory</p>
                                            </div>
                                        </div>
                                        <SearchList add={(type, value) => { setObjs([...objs, { id: value.id, type: type, value: value }])}} type={dropdown} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full">
                        <CHR />
                    </div>
                </div>
                <div className="flex flex-col w-full" ref={canvas}>
                    <div className="py-2 px-2 flex flex-row justify-start items-center w-full">
                        <form className="flex flex-row items-center gap-0.5">
                            { !exporting ? <input type="color" id="html5colorpicker" onChange={(e) => { setCol(e.target.value.toString()); }} className="w-6 rounded-full" value={col}></input> : <></> }
                            <input style={{ color: col }} className={`text-xl font-semibold py-0.5 border border-transparent rounded-md hover:border-zinc-200/30 focus:outline-none focus:border focus:border-zinc-200/50 px-2`} defaultValue={"Title"}></input>
                        </form>
                    </div>
                    <CHR />
                    <Editor objs={objs} del={(id: string) => { setObjs([...objs.filter((value) => value.id !== id)]); }} type={"vehicle"} />
                    <CHR />
                    <Editor objs={objs} del={(id: string) => { setObjs([...objs.filter((value) => value.id !== id)]); }} type={"accessory"} />
                </div>
            </div>
            <div className="flex flex-row w-full justify-end items-center mt-2">
                <div className="relative flex flex-row justify-center items-center">
                    <p onClick={ () => handleExport() } className="bg-zinc-400/10 px-4 py-2 text-zinc-200/80 hover:bg-zinc-200/10 rounded-md rounded-tr-none rounded-br-none duration-200 transition-colors hover:cursor-pointer">Export</p>
                    <ChevronDown onClick={ (e) => { e.preventDefault(); e.stopPropagation(); setExportDropdown(true); }} className="bg-zinc-400/10 h-full w-auto border hover:bg-zinc-200/10 hover:cursor-pointer !border-l-zinc-500/20 border-transparent px-1 text-zinc-200/80 py-[0.4rem] rounded-md rounded-tl-none rounded-bl-none" />
                    { exportDropdown ? <div tabIndex={0} onBlur={(e) => { e.preventDefault(); e.stopPropagation(); setExportDropdown(false); }} className="absolute top-full right-0 bg-zinc-200/5 rounded-md w-fit flex flex-col py-2 px-2 gap-2 mt-1">
                        <Button onClick={ () => handleExport() }>
                            <p className="text-sm">Transparent</p>
                        </Button>
                        <Button onClick={ () => handleExport(bgCol) } className="gap-2">
                            <input type="color" id="html5colorpicker" onChange={(e) => { setBgCol(e.target.value.toString()); }} className="w-6 rounded-md" value={col}></input>
                            <p className="text-sm" style={{ color: bgCol }}>Colored</p>
                        </Button>
                    </div> : <></> }
                </div>  
            </div>
        </div>
    )
}
