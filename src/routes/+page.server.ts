import type { PageServerLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';


export const load = (async ({cookies}) => {
    if (cookies.get('allowed')) {
        throw redirect(307, '/welcome');
    }
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request: request, cookies: cookies }) => {
        const data = await request.formData();

        if (data.get('passphrase') === PASSPHRASE) {
            cookies.set('allowed', 'true', {
                path: '/'
            });

            throw redirect(303, '/dashboard');
        }

        return fail(403, {
            incorrect: true
        });
    }
};
