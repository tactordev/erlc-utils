

// check for missing wheel covers

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
        "Conventional",
        "Low Profile 1",
        "Low Profile 2"
    ],
    "Spotlights": [
        "Halogen Spotlight",
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
        "Grappler",
        "Pushbar",
        "Unmarked Plate",
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
        "Conventional",
        "Low Profile 1",
        "Low Profile 2"
    ],
    "Spotlights": [
        "Halogen Spotlight",
        "LED Spotlight",
        "Passenger Spotlight"
    ],
    "Siderunners": [
        "Siderunners",
        "Small Siderunner"
    ]
}

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
        id: "2022-bullhorn-determinator-c/t",
        name: "2022 Bullhorn Determinator C/T",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Lower Grille Lights", "Rear Upper Lights" ],
            "Accessories": [ "ALPR", "Civilian Horn" ]
        },
        exclusions: {
            "Accessories": [ "Cage", "Laptop" ]
        }
    },
    {
        id: "1988-bullhorn-foreman",
        name: "1988 Bullhorn Foreman",
        preset: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Accessories": [ "Pushbar" ],
            "Spotlights": [ "Halogen Spotlight", "Passenger Spotlight" ],
            "Antennas": [ "Long Range Antenna" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2020-bullhorn-prancer-widebody-pursuit",
        name: "2020 Bullhorn Prancer Widebody Pursuit",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Tail Light Flasher", "Upper Rear Lights" ],
        },
        exclusions: {
            "Accessories": [ "ALPR" ]
        }
    },
    {
        id: "2011-bullhorn-prancer-pursuit",
        name: "2011 Bullhorn Prancer Pursuit",
        preset: modernBase,
        additions: {
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
        exclusions: {}
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
        exclusions: {}
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
        exclusions: {}
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
        exclusions: {}
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
        exclusions: {}
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
            "Pushbar Accessories": [ "Pushbar Floodlight", "Pushbar Lights 1", "Pushbar Lights 2", "Pushbar Lights 3" ],
            "Siderunners": [ "Small Siderunner 2"]

        },
        exclusions: {}
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
        exclusions: {}
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
            "Rear Light Options": [ "Rear Window Lights", "Mini Lightbar" ],
            "Additional Lighting": [ "Grille Lights", "Side Lighting", "Under Mirror Lights" ],
            "Accessories": [ "ALPR", "Civilian Horn", "Unmarked Plate" ],
            "Antennas": [ "5G Antenna", "Long Range Antenna", "Low Profile Antenna", "Short Antenna" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2014-chevlon-corbeta-rzr",
        name: "2014 Chevlon Corbeta RZR",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Additional Lighting": [ "Outer Grille Lights" ],
        },
        exclusions: {}
    },
    {
        id: "1981-chevlon-inferno",
        name: "1981 Chevlon Inferno",
        preset: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Accessories": [ "Pushbar", "Trailer Hitch" ],
            "Antennas": [ "Long Range Antenna" ],
            "Spotlights": [ "Halogen Spotlight", "Passenger Spotlight" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2019-chevlon-platoro-ppv",
        name: "2019 Chevlon Platoro PPV",
        preset: legacyBase,
        additions: {
            "Accessories": [ "Trailer Hitch" ]
        },
        exclusions: {}
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
            "Accessories": [ "Bedcap", "Cage", "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2022-falcon-advance-xet",
        name: "2022 Falcon Advance XET",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightstick", "Small Rear Lightstick"],
            "Additional Lighting": [ "Grille Lights 1", "Grille Lights 2", "Tailgate Light" ],
            "Accessories": [ "Cage", "Front Plate", "Trailer Hitch" ],
            "Siderunners": [ "Small Siderunner 2", "Side Lights" ],
            "Pushbar Accessories": [ "Pushbar Floodlight", "Pushbar Lights 1" ],
            "Side Lighting": [ "Mirror Lights" ],
            "Bed Options": [ "Bed Cover", "Toolbox", "Toolbox w/ Lights" ]
        },
        exclusions: {}
    },
    {
        id: "2024-falcon-estallion",
        name: "2024 Falcon eStallion",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Rear Trim Lights" ],
            "Accessories": [ "Cage" ]
        },
        exclusions: {}
    },
    {
        id: "2013-falcon-global-350",
        name: "2013 Falcon Global 350",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Double Rear Light Sticks" ],
            "Additional Lighting": [ "Grille Lights 1", "Rear Bumper Lights" ],
            "Accessories": [ "Front Plate", "Trailer Hitch" ]
        },
        exclusions: {
            "Accessories": [ "ALPR" ]
        }
    },
    {
        id: "2017-falcon-interceptor-sedan",
        name: "2017 Falcon Interceptor Sedan",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick", "Rear Window Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Tail Light Flasher" ],
            "Accessories": [ "ALPR", "Cage", "Laptop", "Reverse Flashers" ]
        },
        exclusions: {}
    },
    {
        id: "2019-falcon-interceptor-utility",
        name: "2019 Falcon Interceptor Utility",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightbar", "Rear Lightstick", "Spoiler Lights" ],
            "Additional Lighting": [ "Fender Lights", "Fog Lights", "Pillar Lights", "Spoiler Lights" ],
            "Accessories": [ "ALPR", "Cage", "Laptop", "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2024-falcon-interceptor-utility",
        name: "2024 Falcon Interceptor Utility",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick", "Spoiler Lights" ],
            "Additional Lighting": [ "Cargo Lights 1", "Fender Lights", "Fog Lights", "Grille Lights 1", "Grille Lights 2", "Mirror Lights", "Pillar Lights", "Taillight Flasher" ],
            "Accessories": [ "ALPR", "Cage", "Front Plate", "Laptop", "Trailer Hitch" ],
            "Pushbar Accessories": [ "Pushbar Floodlight", "Pushbar Lights 1", "Pushbar Lights 2" ]
        },
        exclusions: {}
    },
    {
        id: "2013-falcon-interceptor-utility",
        name: "2013 Falcon Interceptor Utility",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightbar", "Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Pillar Lights" ],
            "Accessories": [ "ALPR", "Cage", "Laptop", "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2003-falcon-prime-eques-interceptor",
        name: "2003 Falcon Prime Eques Interceptor",
        preset: legacyBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Additional Lighting": [ "Rear Upper Lights" ],
            "Accessories": [ "ALPR", "Cage", "Laptop" ]
        },
        exclusions: {}
    },
    {
        id: "2021-falcon-rampage-interceptor",
        name: "2021 Falcon Rampage Interceptor",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Deck Lights", "Rear Lightstick", "Small Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Tail Light Flasher" ],
            "Accessories": [ "ALPR", "Cage", "Laptop" ]
        },
        exclusions: {}
    },
    {
        id: "2015-falcon-stallion-350",
        name: "2015 Falcon Stallion 350",
        preset: modernBase,
        additions: {
            "Rear Light Options": [ "Rear Lightstick" ],
            "Additional Lighting": [ "Grille Lights 1" ],
            "Accessories": [ "Bedcap", "Cage", "Front Plate", "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2002-falcon-traveller",
        name: "2002 Falcon Traveller",
        preset: legacyBase,
        additions: {
            "Main Light Options": [ "Rotary Bar Classic" ],
            "Rear Light Options": [ "Rear Window Lightstick" ],
            "Accessories": [ "Reverse Flashers", "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2022-falcon-traveller-ppv",
        name: "2022 Falcon Traveller PPV",
        preset: modernBase,
        additions: {
            "Main Light Options": [ "Navigator Lightbar" ],
            "Rear Light Options": [ "Double Rear Light Sticks", "Rear Lightbar", "Rear Lightstick" ],
            "Additional Lighting": [ "Fog Lights", "Pillar Lights", "Taillight Flasher" ],
            "Accessories": [ "ALPR", "Cage", "Laptop", "Trailer Hitch" ]
        },
        exclusions: {}
    },
    {
        id: "2005-mobile-command",
        name: "2005 Mobile Command",
        preset: {
            "Main Light Options": [ "Arjent Lightbar", "Edge Lightbar", "Legacy Lightbar" ],
            "Scene Lighting": [ "Flood Lights", "Perimeter Lights", "Roof Flood Lights" ],
            "Accessories": [ "Command Awning", "Satellite Dish", "Trailer Hitch" ],
            "Siren Speakers": [ "Conventional", "Low Profile 1" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2020-stuttgart-runner-prisoner-transport",
        name: "2020 Stuttgart Runner Prisoner Transport",
        preset: {
            "Main Light Options": [ "Arjent Lightbar", "Edge Lightbar", "Legacy Lightbar", "Visor Lights" ],
            "Rear Light Options": [ "Rear Lightbar", "Rear Window Lights" ],
            "Additional Lighting": [ "Grille Lights", "Side Window Lights" ],
            "Accessories": [ "ALPR", "Cage", "Prisoner Cell Partition", "Step Rail" ],
            "Spotlights": [ "Halogen Spotlight", "LED Spotlight" ]
        },
        additions: {},
        exclusions: {}
    },
    {
        id: "2011-swat-armored-truck",
        name: "2011 SWAT Armored Truck",
        preset: {
            "Main Light Options": [ "LED Rotary Lightbar", "Mini Lightbar" ],
            "Scene Lighting": [ "Flood Lights", "Side Flood Lights" ],
            "Additional Lighting": [ "Grille Lights", "Upper Cab Flasher" ],
            "Accessories": [ "Heavy Duty Bumper", "Peephole Armor", "Roof Hatch", "Running Boards" ],
            "Siren Speakers": [ "Conventional", "Dual Siren" ]
        },
        additions: {},
        exclusions: {}
    }
];