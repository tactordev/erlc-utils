"use client";
import CHR from "@/components/chr";
import { useState } from "react";
import {
    Circle,
    CircleSlash,
    Plus,
    Trash2
} from "lucide-react";
import Button from "@/components/button";
import { AccessoryType, VehicleType, vehicles } from "./data";
import Image from "next/image";

type ObjType = {
    id: string;
    type: "vehicle" | "accessory";
    value: VehicleType | AccessoryType
}
function Vehicle(
    {
        id,
        name,
        del
    }: {
        id: string;
        name: string;
        del: (id: string) => void;
    }
) {
    return (
        <div className="flex relative bg-blue-800/5 rounded-md group h-full w-fit overflow-y-hidden">
            <Image src={"https://picsum.photos/600/400"} alt={`${name} Model`} width={600} height={400} className="h-auto w-fit" />
            <div onClick={() => { del(id); }} className="group-hover:opacity-100 opacity-0 transition-all duration-200 absolute top-2 right-2 bg-red-900/60 px-3 py-2 rounded-md hover:bg-red-400/30 hover:cursor-pointer hover:scale-105 active:scale-95">
                <Trash2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-2 left-2 px-4 py-2 bg-stone-900/90 rounded-md">
                <p className="shadow-sm text-blue-200/40 font-bold text-lg">{name}</p>
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
        type: string;
        objs: ObjType[];
        del: (id: string) => void;
    }
) {
    const relevant = objs.filter((obj) => obj.type === type);
    return (
        <div className="max-h-[40vh] min-h-[20vh] overflow-y-hidden flex flex-row w-full gap-2 py-2 px-4 flex-wrap mb-4 items-center justify-center">
            {
                relevant.length > 0 ? relevant.map((obj, index) => <Vehicle key={`vehicleobj-${index}`} id={obj.value.id} name={obj.value.name} del={del} />) : (
                    <div className="flex flex-col items-center justify-center gap-4 opacity-20">
                        <CircleSlash className="w-16 h-16 text-blue-500/80" />
                        <p className="text-2xl font-bold text-blue-500/80">Nothing added.</p>
                    </div>
                )
            }
        </div>
    )
}



const accessories = {
    "Main Lighting Options": [
        "LED Lighting",
        "Pole Lighting",
    ],
    "Accessories": [
        "Gear Bag",
    ]
}; 

function SearchList(
    {
        type,
        add
    }: {
        type: string;
        add: (type: "vehicle" | "accessory", value: VehicleType | AccessoryType) => void;
    }
) {
    const [val, setVal] = useState<string>("");
    const search = <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); }}>
        <input value={val} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)} type="text" className="text-base my-2 px-4 py-0.5 bg-blue-300/5 rounded-md outline-none border border-blue-800/10 focus:border-blue-800/20" />
    </form>;

    switch (type) {
        case "vehicle":
            const res = vehicles.filter((vehicleType) => vehicleType.name.includes(val));
            const results = <div className="flex flex-col w-full h-full items-center justify-center gap-1">
                {
                    res.length > 0 ? (
                        res.map((vehicleType, index) => <Button key={`vehiclesearch-${index}`} onClick={() => add("vehicle", vehicleType)} className="!justify-start w-full text-sm">{vehicleType.name}</Button>)
                    ) : (
                        <div className="w-full flex flex-col items-center justify-center gap-2 opacity-40 mt-2 mb-2">
                            <CircleSlash className="w-8 h-8 text-blue-500/80" />
                            <p className="text-base text-blue-500/80">No results found.</p>
                        </div>
                    )
                }
            </div>
            return (
                <div className="flex flex-col items-center justify-center">
                    { search }
                    {
                        results
                    }
                </div>
            )
        case "accessory":

        default:
            return <></>;
    }
}

export default function VBuilder() {
    const [objs, setObjs] = useState<ObjType[]>([]);

    const [dropdown, setDropdown] = useState<"vehicle" | "accessory" | null>(null);

    return (
        <div className="w-full h-full">
            <h1 className="font-bold text-3xl">Regulation Builder</h1>
            <div className="mt-2 w- bg-blue-900/10 rounded-md flex flex-col items-center justify-center border border-blue-600/5 shadow-sm">
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
                                    <div className={`absolute z-10 min-w-48 max-h-128 overflow-y-auto top-full right-0 rounded-md mt-2 bg-blue-800/5 shadow-md backdrop-blur-md px-4 py-2 flex flex-col`}>
                                        <div className="flex flex-row gap-2 bg-blue-500/5 px-2 py-1 rounded-md justify-between mx-2">
                                            <div onClick={() => setDropdown("vehicle")} className={`px-4 py-0.5 rounded-md ${dropdown === "vehicle" ? "bg-blue-500/20" : "opacity-40 bg-transparent"} hover:bg-blue-500/20 hover:cursor-pointer transition-all duration-200`}>
                                                <p>Vehicle</p>
                                            </div>
                                            <div onClick={() => setDropdown("accessory")} className={`px-4 py-0.5 rounded-md ${dropdown === "accessory" ? "bg-blue-500/20" : "opacity-40 bg-transparent"} hover:bg-blue-500/20 hover:cursor-pointer transition-all duration-200`}>
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
                <Editor objs={objs} del={(id: string) => { setObjs([...objs.filter((value) => value.id !== id)]); }} type={"vehicle"} />
                <CHR />
                <Editor objs={objs} del={(id: string) => { setObjs([...objs.filter((value) => value.id !== id)]); }} type={"accessory"} />
            </div>
        </div>
    )
}
