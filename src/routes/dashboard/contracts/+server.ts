// src/routes/dashboard/+server.ts
import { API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const endpoint = 'https://api.spacetraders.io/v2/my/';

const options = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};

// Accept a contract
export const POST: RequestHandler = ( async ({ request }) => {
    const contractId = request.headers.get('contractId');
    // console.log("POST PARAMS: ", params);
    console.log("POST function in acceptContract called")
    console.log("REQUEST: ", request.headers)
    const response = await fetch(`${endpoint}contracts/${contractId}/accept`, {
        method: 'POST',
        headers: options.headers
    });

    if (!response.ok) {
        // Handle error
        return new Response(JSON.stringify('Error accepting contract'), {
            status: response.status,
        });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: 200,
    });
}) satisfies RequestHandler;
