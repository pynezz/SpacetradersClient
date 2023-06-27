import type { Agent } from '$lib/types';
import { API_KEY } from '$env/static/private';
import { agentStore, setAgent } from '$lib/stores/customStores';
import { writable } from "svelte/store";


const options = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${API_KEY}`
	}
};


// Will load the agent
export const load = async () => {
	let a: Agent = {
		accountId: "test",
		symbol: "AA-BB",
		headquarters: "HQ",
		credits: 10,
		startingFaction: "faction",
	}

	console.log("load function in dashboard called")
    let res = await fetch('https://api.spacetraders.io/v2/my/agent', options).then(async response =>{
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		let obj = await response.json(); // read response body and parse as JSON
		// console.log("obj.data: ", obj.data)
		let agent: Agent = obj.data;

		console.log("Agent: ", agent)
		setAgent(agent);

		return agent;
	})

	return res;
}
