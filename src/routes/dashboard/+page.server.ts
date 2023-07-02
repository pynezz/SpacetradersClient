// src/routes/dashboard/+page.server.ts
import type { Agent, Contract, Waypoint } from '$lib/types';
import { API_KEY } from '$env/static/private';

const endpoint = 'https://api.spacetraders.io/v2/';

const options = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${API_KEY}`
	}
};


// Will load the agent
export const load = async () => {

	let retObject = {
		agent: {} as Agent, 			// Agent
		contracts: {} as any, 		// Contract[]
		wayPoint: {} as Waypoint,	// Waypoint
	};

	retObject.agent = await get('agent') as Agent;
	retObject.contracts = await get('contracts') as Contract[];
	retObject.wayPoint = await getWaypointData(retObject.agent.headquarters);

	return retObject;			// Return the agent and contracts, because the setAgent doesn't work..
}

const get = async (catalog: string) => {
	let res = await fetch(endpoint + "my/" + catalog, options).then(async response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		let obj = await response.json(); // read response body and parse as JSON
		return obj.data;
	})

	return res;
}

/**
 * Will split it for you, and request the location data
 * @param headquarters
 * @returns json object
 */
const getWaypointData = async (headquarters: string) => {
	const hqArr = headquarters.split("-")
	const system = hqArr[0] + "-" + hqArr[1];

	let res = await fetch(`${endpoint}/systems/${system}/waypoints/${headquarters}`, options).then(async response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		let obj = await response.json(); // read response body and parse as JSON

		return obj.data;
	})

	return res;
}
