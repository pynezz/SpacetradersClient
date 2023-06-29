// src/routes/dashboard/+page.server.ts
import type { Agent } from '$lib/types';
import { API_KEY } from '$env/static/private';
import { setAgent } from '$lib/stores/customStores';

const endpoint = 'https://api.spacetraders.io/v2/my/';

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

	let retObject = {
		agent: {} as any, 		// Agent
		contracts: {} as any, 	// Contract[]
	};

	console.log("load function in dashboard called")

	// retObject.agent = res;
	retObject.agent = get('agent');
	retObject.contracts = get('contracts');

	setAgent(retObject.agent);	// Set the agent in the store

	return retObject;			// Return the agent and contracts, because the setAgent doesn't work..
}

const get = async (catalog: string) => {
	let res = await fetch(endpoint + catalog, options).then(async response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		let obj = await response.json(); // read response body and parse as JSON
		console.log("Data: ", obj)

		return obj.data;
	})

	return res;
}
