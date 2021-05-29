import { writable } from 'svelte/store';
import type { FlexOptions } from './flex-option.model';

const defaultOptions: FlexOptions = {
	flex_direction: 'row',
	flex_wrap: 'nowrap',
}

function parentStore() {
	const { subscribe, set, update } = writable(defaultOptions);

	return {
		subscribe,
		changeDirection: (direction) => update(s => {
			return Object.assign({}, s, { flex_direction: direction })
		}),
		changeWrap: (wrap) => update(s => {
			return Object.assign({}, s, { flex_wrap: wrap })
		}),
		reset: () => set(defaultOptions)
	};
}

export const ParentStore = parentStore();