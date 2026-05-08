import { error } from '@sveltejs/kit';

const guideIds = new Set(['tutorial', 'rules']);

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!guideIds.has(params.id)) {
		error(404, 'Not found');
	}

	return {
		id: params.id
	};
}
