// src/routes/dashboard/acceptContract.ts
// import { API_KEY } from '$env/static/private';


// ⚠️ THIS IS CLIENT SIDE CODE ⚠️

const endpoint = 'https://api.spacetraders.io/v2/my/';

const options = {
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${API_KEY}`
    }
};

export const post = async (contractId: string) => {
    const response = await fetch(`${endpoint}contracts/${contractId}/accept`, {
        method: 'POST',
        headers: options.headers
    });

    if (!response.ok) {
        // Handle error
        return {
            status: response.status,
            body: 'Error accepting contract'
        };
    }

    const data = await response.json();

    return {
        status: 200,
        body: data
    };
};
