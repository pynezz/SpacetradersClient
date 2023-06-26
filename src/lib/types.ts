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

export interface Contract {
    id: string;
    factionSymbol: string;
    type: string;
    terms: {
        deadline: string;
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
    expiration: string;
    deadlineToAccept: string;
}
