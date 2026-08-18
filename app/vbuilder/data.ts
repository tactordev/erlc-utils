// import createPrompt from "prompt-sync";
// const prompt = createPrompt();


export type VehicleType = {
    id: string;
    name: string;
    preset: Record<string, string[]>;
    additions: Record<string, string[]>;
    exclusions: Record<string, string[]>;
};

export type AccessoryType = {
    id: string;
    name: string;
    category: string;
};

const FourWheeler = {
    "Main Light Options": [
        "LED Lighting",
        "Pole Lighting",
    ],
    "Accessories": [
        "Gear Bag",
    ]
}

const legacyBase = {
    "Main Light Options": [
        "Arjent Lightbar",
        "Dash Light",
        "Edge Lightbar",
        "Integrity Lightbar",
        "LED Rotary Lightbar",
        "Legacy Lightbar",
        "Liberty Lightbar",
        "N-Force Lightbar",
        "Valor Lightbar",
        "Visor Lights"
    ],
    "Rear Light Options": [
        "Rear Window Lights"
    ],
    "Additional Lighting": [
        "Dash Light",
        "Grille Lights",
        "Plate Lights",
        "Side Window Lights",
        "Under Mirror Lights"
    ],
    "Accessories": [
        "ALPR",
        "Civilian Horn",
        "Grappler",
        "Pushbar",
        "Unmarked Plate",
        "Wheel Covers",
        "Wraparound Rambar"
    ],
    "Antennas": [
        "5G Antenna",
        "Long Range Antenna",
        "Low Profile Antenna",
        "Short Antenna"
    ],
    "Siren Speakers": [
        "Compact",
    ],
    "Spotlights": [
        "LED Spotlight",
        "Passenger Spotlight"
    ],
    "Siderunners": [
        "Siderunners",
        "Small Siderunner"
    ]
};

const modernBase = {
    "Main Light Options": [
        "Arjent Lightbar",
        "Dash Light",
        "Edge Lightbar",
        "Integrity Lightbar",
        "LED Rotary Lightbar",
        "Legacy Lightbar",
        "Liberty Lightbar",
        "N-Force Lightbar",
        "Valor Lightbar",
        "Visor Lights"
    ],
    "Rear Light Options": [],
    "Additional Lighting": [
        "Dash Light",
        "Grille Lights",
        "Plate Lights",
        "Side Window Lights",
        "Under Mirror Lights"
    ],
    "Accessories": [
        "ALPR",
        "Cage",
        "Civilian Horn",
        "Grappler",
        "Laptop",
        "Pushbar",
        "Unmarked Plate",
        "Wheel Covers",
        "Wraparound Rambar"
    ],
    "Antennas": [
        "5G Antenna",
        "Long Range Antenna",
        "Low Profile Antenna",
        "Short Antenna"
    ],
    "Siren Speakers": [
        "Compact",
    ],
    "Spotlights": [
        "LED Spotlight",
        "Passenger Spotlight"
    ],
    "Siderunners": [
        "Siderunners",
        "Small Siderunner"
    ]
}

export const accessories: AccessoryType[] = [
    {
        id: "alpr",
        name: "ALPR",
        category: "Accessories",
    },
    {
        id: "arjent-lightbar",
        name: "Arjent Lightbar",
        category: "Main Light Options",
    },
    {
        id: "cage",
        name: "Cage",
        category: "Accessories",
    },
    {
        id: "cargo-lights-1",
        name: "Cargo Lights 1",
        category: "Additional Lighting",
    },
    {
        id: "cargo-lights-2",
        name: "Cargo Lights 2",
        category: "Additional Lighting",
    },
    {
        id: "dash-light",
        name: "Dash Light",
        category: "Main Light Options",
    },
    {
        id: "double-rear-light-sticks",
        name: "Double Rear Light Sticks",
        category: "Rear Light Options",
    },
    {
        id: "edge-lightbar",
        name: "Edge Lightbar",
        category: "Main Light Options",
    },
    {
        id: "fog-lights",
        name: "Fog Lights",
        category: "Additional Lighting",
    },
    {
        id: "freedom-lightbar",
        name: "Freedom Lightbar",
        category: "Main Light Options",
    },
    {
        id: "front-bumper-lights",
        name: "Front Bumper Lights",
        category: "Additional Lighting",
    },
    {
        id: "gear-bag",
        name: "Gear Bag",
        category: "Accessories",
    },
    {
        id: "grappler",
        name: "Grappler",
        category: "Accessories",
    },
    {
        id: "grille-lights",
        name: "Grille Lights",
        category: "Additional Lighting",
    },
    {
        id: "grille-lightstick",
        name: "Grille Lightstick",
        category: "Additional Lighting",
    },
    {
        id: "headlight-lights",
        name: "Headlight Lights",
        category: "Additional Lighting",
    },
    {
        id: "integrity-lightbar",
        name: "Integrity Lightbar",
        category: "Main Light Options",
    },
    {
        id: "laptop",
        name: "Laptop",
        category: "Accessories",
    },
    {
        id: "led-rotary-lightbar",
        name: "LED Rotary Lightbar",
        category: "Main Light Options",
    },
    {
        id: "legacy-lightbar",
        name: "Legacy Lightbar",
        category: "Main Light Options",
    },
    {
        id: "liberty-lightbar",
        name: "Liberty Lightbar",
        category: "Main Light Options",
    },
    {
        id: "mini-lightbar",
        name: "Mini Lightbar",
        category: "Main Light Options",
    },
    {
        id: "mirror-lights",
        name: "Mirror Lights",
        category: "Additional Lighting",
    },
    {
        id: "n-force-lightbar",
        name: "N-Force Lightbar",
        category: "Main Light Options",
    },
    {
        id: "navigator-lightbar",
        name: "Navigator Lightbar",
        category: "Main Light Options",
    },
    {
        id: "outer-grille-lights",
        name: "Outer Grille Lights",
        category: "Additional Lighting",
    },
    {
        id: "pillar-lights",
        name: "Pillar Lights",
        category: "Additional Lighting",
    },
    {
        id: "plate-lights",
        name: "Plate Lights",
        category: "Additional Lighting",
    },
    {
        id: "pole-lighting",
        name: "Pole Lighting",
        category: "Main Light Options",
    },
    {
        id: "pushbar-floodlight",
        name: "Pushbar Floodlight",
        category: "Accessories",
    },
    {
        id: "pushbar-lights",
        name: "Pushbar Lights",
        category: "Accessories",
    },
    {
        id: "pushbar",
        name: "Pushbar",
        category: "Accessories",
    },
    {
        id: "rear-bumper-lights",
        name: "Rear Bumper Lights",
        category: "Additional Lighting",
    },
    {
        id: "rear-deck-lights",
        name: "Rear Deck Lights",
        category: "Rear Light Options",
    },
    {
        id: "rear-lightbar",
        name: "Rear Lightbar",
        category: "Rear Light Options",
    },
    {
        id: "rear-lightstick",
        name: "Rear Lightstick",
        category: "Rear Light Options",
    },
    {
        id: "rear-trim-lights",
        name: "Rear Trim Lights",
        category: "Additional Lighting",
    },
    {
        id: "rear-upper-lights",
        name: "Rear Upper Lights",
        category: "Additional Lighting",
    },
    {
        id: "rear-window-lightstick",
        name: "Rear Window Lightstick",
        category: "Rear Light Options",
    },
    {
        id: "rotary-bar-classic",
        name: "Rotary Bar Classic",
        category: "Main Light Options",
    },
    {
        id: "small-rear-lightstick",
        name: "Small Rear Lightstick",
        category: "Rear Light Options",
    },
    {
        id: "small-spoiler-lights",
        name: "Small Spoiler Lights",
        category: "Rear Light Options",
    },
    {
        id: "spoiler-lights",
        name: "Spoiler Lights",
        category: "Rear Light Options",
    },
    {
        id: "valor-lightbar",
        name: "Valor Lightbar",
        category: "Main Light Options",
    },
    {
        id: "visor-lights",
        name: "Visor Lights",
        category: "Main Light Options",
    },
    {
        id: "wraparound-rambar",
        name: "Wraparound Rambar",
        category: "Accessories",
    },
];

export const vehicles: VehicleType[] = [
    {
        id: "4-wheeler",
        name: "4-Wheeler",
        preset: FourWheeler,
        additions: {},
        exclusions: {}
    },
    {
        id: "2022-averon-q8",
        name: "2022 Averon Q8",
        preset: legacyBase,
        additions: {
            "Additional Lighting": [ "Outer Grille Lights" ],
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2020-bkm-munich",
        name: "2020 BKM Munich",
        preset: legacyBase,
        additions: {
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2009-bullhorn-bh15-ssv",
        name: "2009 Bullhorn BH15 SSV",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights" ],
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2022-bullhorn-determinator-ct",
        name: "2022 Bullhorn Determinator CT",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Lower Grille Lights", "Rear Upper Lights" ],
        },
        exclusions: {
            "Accessories": [ "Cage", "Laptop" ],
        }
    },
    {
        id: "1988-bullhorn-foreman",
        name: "1988 Bullhorn Foreman",
        preset: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Accessories": [ "Pushbar" ],
            "Spotlights": [ "Passenger Spotlight" ],
            "Antennas": [ "Long Range Antenna" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2020-bullhorn-prancer-fury-widebody-pursuit",
        name: "2020 Bullhorn Prancer Fury Widebody Pursuit",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Tail Light Flasher", "Upper Rear Lights" ],
        },
        exclusions: {
            "Accessories": [ "ALPR", "Civilian Horn" ]
        }
    },
    {
        id: "2011-bullhorn-prancer-pursuit",
        name: "2011 Bullhorn Prancer Pursuit",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Tail Light Flasher", "Upper Rear Lights" ],
        },
        exclusions: {}
    },
    {
        id: "2015-bullhorn-prancer-pursuit",
        name: "2015 Bullhorn Prancer Pursuit",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fender Lights", "Fog Lights", "Tail Light Flasher", "Upper Rear Lights" ],
        },
        exclusions: {
            "Accessories": [ "Civilian Horn" ]
        }
    },
    {
        id: "2022-bullhorn-pueblo-pursuit",
        name: "2022 Bullhorn Pueblo Pursuit",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Small Rear Lightstick", "Small Spoiler Lights", "Spoiler Lights"],
            "Additional Lighting": [ "Fender Lights", "Fog Lights", "Tail Light Flasher" ],
            "Accessories": [ "Trailer Hitch" ],
        },
        exclusions: {
            "Accessories": [ "Civilian Horn", "Grappler" ]
        }
    },
    {
        id: "canyon-descender",
        name: "Canyon Descender",
        preset: {
            "Main Light Options": [ "Mini Lightbar" ],
            "Rear Light Options": [ "Rear Lightbar" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2024-celestial-truckatron",
        name: "2024 Celestial Truckatron",
        preset: modernBase,
        additions: {
            "Additional Lighting": [ "Rear Bumper Lights" ],
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {
            "Accessories": [ "Cage", "Wraparound Rambar" ]
        }
    },
    {
        id: "2011-chevlon-amigo-lzr",
        name: "2011 Chevlon Amigo LZR",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights" ],
            "Accessories": [ "Reverse Flashers" ]
        },
        exclusions: {
            "Accessories": [ "Cage", "Laptop" ]
        }
    },
    {
        id: "1994-chevlon-antelope-ss",
        name: "1994 Chevlon Antelope SS",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Additional Lighting": [ "Rear Upper Lights" ],
            "Accessories": [ "Dash Light" ]
        },
        exclusions: {
            "Additional Lighting": [ "Dash Light" ]
        }
    },
    {
        id: "2018-chevlon-camion-ppv",
        name: "2018 Chevlon Camion PPV",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightbar", "Rear Lightstick", "Spoiler Lights" ],
            "Additional Lighting": [ "Fog Lights", "Pillar Lights" ],
            "Accessories": [ "Trailer Hitch" ],
        },
        exclusions: {}
    },
    {
        id: "2021-chevlon-camion-ppv",
        name: "2021 Chevlon Camion PPV",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Small Rear Lightstick", "Small Spoiler Lights", "Spoiler Lights" ],
            "Additional Lighting": [
                "Cargo Lights 1",
                "Cargo Lights 2",
                "Fender Lights",
                "Fog Lights",
                "Grille Lights 1",
                "Grille Lights 2",
                "Grille Lights 3",
                "Mirror Lights",
                "Pillar Lights",
                "Plate Lights 1",
                "Plate Lights 2",
                "Rear Bumper Lights",
                "Taillight Flasher"
            ],
            "Accessories": [ "Front Plate", "Trailer Hitch" ],
            "Pushbar Accessories": [ "Pushbar", "Pushbar Floodlight", "Pushbar Lights 1", "Pushbar Lights 2", "Pushbar Lights 3", "Wraparound Rambar" ],
            "Siderunners": [ "Small Siderunner 1", "Small Siderunner 2"]

        },
        exclusions: {
            "Additional Lighting": [ "Grille Lights", "Plate Lights" ],
            "Accessories": [ "Pushbar", "Wheel Covers", "Wraparound Rambar" ],
            "Siderunners": [ "Small Siderunner" ]
        }
    },
    {
        id: "2000-chevlon-camion-ppv",
        name: "2000 Chevlon Camion PPV",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Lightbar", "Rear Lightstick" ],
            "Accessories": [ "Reverse Flashers", "Trailer Hitch" ]
        },
        exclusions: {
            "Accessories": [ "Cage" ]
        }
    },
    {
        id: "2008-chevlon-camion-ppv",
        name: "2008 Chevlon Camion PPV",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Lightbar", "Rear Lightstick", "Spoiler Lights" ],
            "Additional Lighting": [ "Fog Lights", "Pillar Lights" ],
            "Accessories": [ "Trailer Hitch" ],
        },
        exclusions: {}
    },
    {
        id: "2009-chevlon-captain-ppv",
        name: "2009 Chevlon Captain PPV",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Additional Lighting": [ "Rear Upper Lights" ],
        },
        exclusions: {}
    },
    {
        id: "2006-chevlon-commuter-van",
        name: "2006 Chevlon Commuter Van",
        preset: {
            "Main Light Options": [
                "Arjent Lightbar",
                "Dash Light",
                "Edge Lightbar",
                "Integrity Lightbar",
                "LED Rotary Lightbar",
                "Legacy Lightbar",
                "Liberty Lightbar",
                "N-Force Lightbar",
                "Valor Lightbar",
                "Visor Lights"
            ],
            "Rear Light Options": [ "Rear Window Lights" ],
            "Additional Lighting": [ "Grille Lights", "Side Lighting", "Under Mirror Lights" ],
            "Accessories": [ "ALPR", "Civilian Horn", "Unmarked Plate" ],
            "Antennas": [ "5G Antenna", "Long Range Antenna", "Low Profile Antenna", "Short Antenna" ]
        },
        additions: {},
        exclusions: {
            "Main Light Options": [ "Dash Light" ]
        }
    },
    {
        id: "2014-chevlon-corbeta-rzr",
        name: "2014 Chevlon Corbeta RZR",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Additional Lighting": [ "Outer Grille Lights" ],
        },
        exclusions: {
            "Accessories": [ "Cage" ]
        }
    },
    {
        id: "1981-chevlon-inferno",
        name: "1981 Chevlon Inferno",
        preset: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Accessories": [ "Pushbar", "Trailer Hitch" ],
            "Antennas": [ "Long Range Antenna" ],
            "Spotlights": [ "Passenger Spotlight" ]
        },
        additions: {},
        exclusions: {
            "Accessories": [ "Cage", "Civilian Horn", "Grappler", "Laptop", "Pushbar", "Unmarked Plate", "Wheel Covers", "Wraparound Rambar" ],
            "Siren Speakers": [ "Compact" ]
        }
    },
    {
        id: "2019-chevlon-platoro-ppv",
        name: "2019 Chevlon Platoro PPV",
        preset: legacyBase,
        additions: {
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {
            
        }
    },
    {
        id: "2020-emergency-services-falcon-advance-plus",
        name: "2020 Emergency Services Falcon Advance+",
        preset: modernBase,
        additions: {
            "Additional Lighting": [ "Front Bumper Lights" ],
            "Accessories": [ "Trailer Hitch" ],
            "Scene Lighting": [ "Flood Lights", "LED Lightbar" ]
        },
        exclusions: {
            "Spotlights": [ "Halogen Spotlight", "LED Spotlight", "Passenger Spotlight" ]
        }
    },
    {
        id: "2020-falcon-advance-350",
        name: "2020 Falcon Advance 350",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Accessories": [ "Bedcap", "Trailer Hitch" ]
        },
        exclusions: {
            "Accessories": [ "Laptop" ]
        }
    },
    {
        id: "2022-falcon-advance-xet",
        name: "2022 Falcon Advance XET",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightstick", "Small Rear Lightstick"],
            "Additional Lighting": [ "Grille Lights 1", "Grille Lights 2", "Tailgate Light" ],
            "Accessories": [ "Front Plate", "Trailer Hitch" ],
            "Siderunners": [ "Small Siderunner 1", "Small Siderunner 2", "Side Lights" ],
            "Pushbar Accessories": [ "Pushbar", "Pushbar Floodlight", "Pushbar Lights 1", "Wraparound Rambar" ],
            "Side Lighting": [ "Mirror Lights" ],
            "Bed Options": [ "Bed Cover", "Toolbox", "Toolbox W/ Lights" ]
        },
        exclusions: {
            "Additional Lighting": [ "Grille Lights" ],
            "Accessories": [ "Pushbar", "Wheel Covers", "Wraparound Rambar" ],
            "Siderunners": [ "Small Siderunner" ]
        }
    },
    {
        id: "2024-falcon-estallion",
        name: "2024 Falcon eStallion",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Rear Trim Lights" ],
        },
        exclusions: {
            "Accessories": [ "Laptop", "Wheel Covers" ]
        }
    },
    {
        id: "2013-falcon-global-350",
        name: "2013 Falcon Global 350",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic", "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks" ],
            "Additional Lighting": [ "Grille Lights 1", "Rear Bumper Lights" ],
            "Accessories": [ "Front Plate", "Trailer Hitch" ],
            "Siderunners": [ "Side Lights" ]
        },
        exclusions: {
            "Additional Lighting": [ "Grille Lights", "Plate Lights", "Side Window Lights", "Under Mirror Lights" ],
            "Accessories": [ "ALPR", "Cage", "Grappler", "Laptop", "Pushbar", "Wheel Covers", "Wraparound Rambar" ],
            "SpotLights": [ "LED Spotlight", "Passenger Spotlight" ],
            "Siderunners": [ "Siderunners", "Small Siderunner" ]
        }
    },
    {
        id: "2017-falcon-interceptor-sedan",
        name: "2017 Falcon Interceptor Sedan",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fender Lights", "Lower Grille Lights", "Tail Light Flasher", "Upper Rear Lights" ],
            "Accessories": []
        },
        exclusions: {}
    },
    {
        id: "2019-falcon-interceptor-utility",
        name: "2019 Falcon Interceptor Utility",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick", "Spoiler Lights" ],
            "Additional Lighting": [ "Lower Grille Lights", "Pillar Lights" ],
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2024-falcon-interceptor-utility",
        name: "2024 Falcon Interceptor Utility",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Small Rear Lightstick", "Small Spoiler Lights", "Spoiler Lights" ],
            "Additional Lighting": [ "Fog Lights", "Grille Lightstick", "Headlight Lights", "Lower Grille Lights", "Taillight Flasher" ],
            "Accessories": [ "Front Plate" ],
        },
        exclusions: {}
    },
    {
        id: "2013-falcon-interceptor-utility",
        name: "2013 Falcon Interceptor Utility",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Small Rear Lightstick", "Small Spoiler Lights", "Spoiler Lights" ],
            "Additional Lighting": [ "Fog Lights", "Lower Grille Lights", "Taillight Flasher" ],
            "Accessories": [ "ALPR", "Cage", "Laptop", "Trailer Hitch" ]
        },
        exclusions: {
            "Accessories": [ "Civilian Horn" ]
        }
    },
    {
        id: "2003-falcon-prime-eques-interceptor",
        name: "2003 Falcon Prime Eques Interceptor",
        preset: legacyBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Tail Light Flasher" ],
        },
        exclusions: {
            "Accessories": [ "Grappler" ]
        }
    },
    {
        id: "2021-falcon-rampage-interceptor",
        name: "2021 Falcon Rampage Interceptor",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Small Rear Lightstick", "Small Spoiler Lights" ],
            "Additional Lighting": [ "Rear Bumper Lights" ],
            "Accessories": [ "ALPR", "Cage", "Laptop" ]
        },
        exclusions: {
            "Additional Lighting": [ "Plate Lights" ]
        }
    },
    {
        id: "2015-falcon-stallion-350",
        name: "2015 Falcon Stallion 350",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Additional Lighting": [ "Lower Grille Lights", "Outer Grille Lights", "Rear Upper Lights", "Upper Grille Lights" ]
        },
        exclusions: {
            "Accessories": [ "Cage" ],
            "Additional Lighting": [ "Grille Lights" ]
        }
    },
    {
        id: "2002-falcon-traveller",
        name: "2002 Falcon Traveller",
        preset: legacyBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Lightbar", "Rear Lightstick" ],
            "Accessories": [ "Cage", "Laptop", "Reverse Flashers", "Trailer Hitch" ]
        },
        exclusions: {
            "Rear Light Options": [ "Rear Window Lights" ],
            "Accessories": [ "Wheel Covers" ]
        }
    },
    {
        id: "2022-falcon-traveller-ppv",
        name: "2022 Falcon Traveller PPV",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Small Rear Lightstick", "Small Spoiler Lights", "Spoiler Lights" ],
            "Additional Lighting": [ "Cargo Lights", "Grille Lights 1", "Grille Lights 2", "Mirror Lights", "Plate Lights 1", "Plage Lights 2", "Fog Lights", "Rear Bumper Lights" ],
            "Accessories": [ "Front Plate", "Trailer Hitch" ],
            "Pushbar Accessories": [ "Pushbar", "Pushbar Floodlight", "Pushbar Lights 1", "Pushbar Lights 2", "Wraparound Rambar" ],
            "Siderunners": [ "Small Siderunner 1", "Small Siderunner 2" ]
        },
        exclusions: {
            "Additional Lighting": [ "Grille Lights", "Plate Lights" ],
            "Accessories": [ "Cage", "Pushbar", "Wheel Covers", "Wraparound Rambar" ],
            "Siderunners": [ "Small Siderunner" ]
        }
    },
    {
        id: "2005-mobile-command",
        name: "2005 Mobile Command",
        preset: {
            "Main Light Options": [ "Freedom Lightbar" ],
            "Antennas": [ "5G Antenna", "Long Range Antenna", "Low Profile Antena", "Short Antenna" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2020-stuttgart-runner-prisoner-transport",
        name: "2020 Stuttgart Runner Prisoner Transport",
        preset: {
            "Main Light Options": modernBase["Main Light Options"],
            "Rear Light Options": [ "Rear Upper Lights" ],
            "Additional Lighting": ["Dash Light", "Grille Lights", "Side Lighting", "Under Mirror Lights" ],
            "Accessories": [ "Civilian Horn", "Unmarked Plate" ],
            "Antennas": modernBase["Antennas"],
        },
        additions: {
            "Scene Lighting": [ "LED Lightbar" ]
        },
        exclusions: {}
    },
    {
        id: "2011-swat-armored-truck",
        name: "2011 SWAT Armored Truck",
        preset: {},
        additions: {},
        exclusions: {}
    }
];

// function merge(preset: Record<string, string[]>, additions: Record<string, string[]>, exclusions: Record<string, string[]>): Record<string, string[]> {
//     const finalInfo: Record<string, string[]> = {};
//     const keys = new Set([...Object.keys(preset), ...Object.keys(additions)]);
    
//     for (const key of keys) {
//         const base = preset[key] || [];
//         const added = additions[key] || [];
//         const excluded = exclusions[key] || [];

//         const merged = Array.from(new Set([...base, ...added])).filter((item) => !excluded.includes(item));

//         if (merged.length > 0) {
//             finalInfo[key] = merged.sort();
//         }
//     }
    
//     return finalInfo;
// }

// for (const vehicle of vehicles) {
//     console.log(vehicle.name, merge(vehicle.preset, vehicle.additions, vehicle.exclusions));

//     prompt("\n\nENTER to continue.\n\n\n");
// }