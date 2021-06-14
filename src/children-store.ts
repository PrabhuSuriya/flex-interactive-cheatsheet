import { writable } from 'svelte/store';
import { ChildOptions, getChild } from './flex-option.model';

function childrenStore() {
	const defaultChildren: { children: ChildOptions[], selectedChild: ChildOptions } = {
		children: [0, 1, 2, 3].map(getChild),
		selectedChild: null
	};
	const { subscribe, set, update } = writable(defaultChildren);

	return {
		subscribe,
		addChild: () => update(s => {
			const children = [...s.children, getChild(s.children.length + 1)];
			return Object.assign({}, s, { children });
		}),
		removeChild: () => update(s => {
			const children = s.children.slice(0, -1);
			return Object.assign({}, s, { children });
		}),
		selectChild: (child) => update(s => {
			return Object.assign({}, s, { selectedChild: child });
		}),
		increaseOrder: (id) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.order++;
			return Object.assign({}, s);
		}),
		decreaseOrder: (id) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.order--;
			return Object.assign({}, s);
		}),
		reset: () => set({ children: [], selectedChild: null })
	};
}

export const ChildrenStore: any = childrenStore();