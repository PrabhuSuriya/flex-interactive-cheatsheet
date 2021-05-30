import { writable } from 'svelte/store';

function childrenStore() {
	const { subscribe, set, update } = writable([{}, {}, {}, {}]);

	return {
		subscribe,
		addChild: () => update(s => {
			const n = [...s, {}];
			return n;
		}),
		removeChild: () => update(s => {
			const n = s.slice(0, -1);
			return n;
		}),
		reset: () => set([])
	};
}

export const ChildrenStore = childrenStore();