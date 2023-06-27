import { writable } from "svelte/store";
import type { Agent } from "$lib/types";

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


export const authStore = writable<boolean>(false);
export const agentStore = writable<Agent>(agent);
