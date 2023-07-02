// lib/components/stores/customStores.ts
import { writable } from "svelte/store";
import type { Agent, Waypoint } from "$lib/types";

export const currentWaypoint = writable<Waypoint>({} as Waypoint);

let agent: Agent = {
    accountId: "",
    symbol: "",
    headquarters: "",
    credits: 0,
    startingFaction: "",
}

export const setAgent = (a: Agent) => {
    agentStore.set(a);
}

export const setWaypoint = (w: Waypoint) => {
    let waypoint: Waypoint = w;

    console.log("setWaypoint called - not used at the moment")
    console.log(w)
    // waypointStore.set(w);
    // currentWaypoint.update((old) => { return { ...old, ...w } })
    // currentWaypoint.set(w);
    console.log("setWaypoint finished")
}

const updateWaypoint = (w: Waypoint) => {
    waypointStore.update((old) => {
        return {
            ...old,
            ...w
        }
    })
}


export const waypointStore = writable<Waypoint>();
export const authStore = writable<boolean>(false);
export const agentStore = writable<Agent>(agent);
