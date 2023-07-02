// Type definitions for the game data

export interface Ship {
    symbol: string;
    nav: Nav;
    crew: Crew;
    fuel: {
        current: number;
        capacity: number;
        consumed: {
            amount: number;
            timestamp: string;
        }
    }
    frame: Frame;
    engines: Engine[];
    modules: any[]; // TODO: Create module interface
    mounts: any[];  // TODO: Create mount interface
    registration: {
        name: string;
        factionSymbol: string;
        role: string;
    }
    cargo: {
        capacity: number;
        units: number;
        inventory: any[];
    }
}

export interface Nav {
    systemSymbol: string;
    waypointSymbol: string;
    route: Route;
    status: string;
    flightMode: string;
}

export interface Route {
    departure: Location;
    destination: Location;
    arrival: string;
    departureTime: string;
}

export interface Location {
    symbol: string;
    type: string;
    systemSymbol: string;
    x: number;
    y: number;
}


export interface Crew {
    current: number;
    capacity: number;
    required: number;
    rotation: string;
    morale: number;
    wages: number;
}

export interface Engine {
    symbol: string;
    name: string;
    description: string;
    condition: number;
    speed: number;
    requirements: {
        power: number;
        crew: number;
    }
}

export interface Frame {
    symbol: string;
    name: string;
    description: string;
    moduleSlots: number;
    mountingPoints: number;
    fuelCapacity: number;
    condition: number;
    requirements: {
        crew: number;
        power: number;
    }
}

export interface Agent {
    accountId: string;
    symbol: string;
    headquarters: string;
    credits: number;
    startingFaction: string;
}


export interface Trait {
    symbol: string;
    name: string;
    description: string;
}

export interface Faction {
    symbol: string;
    name: string;
    description: string;
    headquarters: string;
    traits: Trait[];
    isRecruiting: boolean;
}


/**
 *  {
	"id": "cljed32qi1trys60crn7a0p25",
	"factionSymbol": "COSMIC",
	"type": "PROCUREMENT",
	"terms": {
		"deadline": "2023-07-04T14:06:55.332Z",
		"payment": {
			"onAccepted": 175398,
			"onFulfilled": 1174404
		},
		"deliver": [
			{
				"tradeSymbol": "ALUMINUM_ORE",
				"destinationSymbol": "X1-YU85-03282C",
				"unitsRequired": 9300,
				"unitsFulfilled": 0
			}
		]
	},
	"accepted": false,
	"fulfilled": false,
	"expiration": "2023-06-28T14:06:55.332Z",
	"deadlineToAccept": "2023-06-28T14:06:55.332Z"
}

 */

export interface Contract {
    id: string;
    factionSymbol: string;
    type: string;
    terms: {
        deadline: Date;
        payment: {
            onAccepted: number;
            onFulfilled: number;
        },
        deliver: [{
            tradeSymbol: string;
            destinationSymbol: string;
            unitsRequired: number;
            unitsFulfilled: number;
        }],
    },
    accepted: boolean;
    fulfilled: boolean;
    expiration: Date;
    deadlineToAccept: Date;

    accept: () => void;
}


/**
 * {

"data"
:

{

"systemSymbol"
:

"X1-YU85"
,

"symbol"
:

"X1-YU85-99640B"
,

"type"
:

"PLANET"
,

"x"
:

-12
,

"y"
:

25
,

"orbitals"
:

[

{

"symbol"
:

"X1-YU85-03282C"

}
,

{

"symbol"
:

"X1-YU85-87273F"

}
,

{

"symbol"
:

"X1-YU85-81074E"

}

]
,

"traits"
:

[

{

"symbol"
:

"OVERCROWDED"
,

"name"
:

"Overcrowded"
,

"description"
:

"A waypoint teeming with inhabitants, leading to cramped living conditions and a high demand for resources."

}
,

{

"symbol"
:

"HIGH_TECH"
,

"name"
:

"High-Tech"
,

"description"
:

"A center of innovation and cutting-edge technology, driving progress and attracting skilled individuals from around the galaxy."

}
,

{

"symbol"
:

"BUREAUCRATIC"
,

"name"
:

"Bureaucratic"
,

"description"
:

"A waypoint governed by complex regulations, red tape, and layers of administration, often leading to inefficiencies and frustration."

}
,

{

"symbol"
:

"TEMPERATE"
,

"name"
:

"Temperate"
,

"description"
:

"A world with a mild climate and balanced ecosystem, providing a comfortable environment for a variety of life forms and supporting diverse industries."

}
,

{

"symbol"
:

"MARKETPLACE"
,

"name"
:

"Marketplace"
,

"description"
:

"A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."

}

]
,

"chart"
:

{

"submittedBy"
:

"COSMIC"
,

"submittedOn"
:

"2023-06-24T05:11:22.020Z"

}
,

"faction"
:

{

"symbol"
:

"COSMIC"

}

}
}
 */

export interface Waypoint {
    systemSymbol: string;
    symbol: string;
    type: string;
    x: number;
    y: number;

    orbitals: {
        symbol: string;
    }[];

    traits: Trait[];

    chart: {
        submittedBy: string;
        submittedOn: Date;
    };

    faction: {
        symbol: string;
    };
}
