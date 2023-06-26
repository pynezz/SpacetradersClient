import { writable } from "svelte/store";
import type { Agent } from "./types";
import { API_KEY } from '$env/static/private';


// export const ssr = false;

const options = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    }
};

export let agent = writable({} as Agent);

export const getAgent = async () => {
    let data: Agent = await fetch('https://api.spacetraders.io/v2/my/agent', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log("response: ", response)
            return response.json()
        })
        .catch(e => {
            console.log('There was a problem with your fetch operation: ' + e.message);
        });

    if (data) {
        agent.set(data);
    }
}
