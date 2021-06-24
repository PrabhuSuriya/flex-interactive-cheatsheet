import { writable } from 'svelte/store';
import { ChildOptions, getChild } from './flex-option.model';

function getNextId(children: ChildOptions[]): number {
	return Math.max(...children.map(x => x.id)) + 1;
}
function childrenStore() {
	const defaultChildren: { children: ChildOptions[], selectedChild: ChildOptions } = {
		children: [0, 1, 2, 3].map(getChild),
		selectedChild: null
	};
	const { subscribe, set, update } = writable(defaultChildren);

	return {
		subscribe,
		addChild: () => update(s => {
			const nextId = getNextId(s.children);
			const children = [...s.children, getChild(nextId];
			return Object.assign({}, s, { children });
		}),
		removeChild: () => update(s => {
			const children = s.children.slice(0, -1);
			return Object.assign({}, s, { children });
		}),
		deleteChild: (child) => update(s => {
			const children = s.children.filter(x => x !== child);
			return Object.assign({}, s, { children });
		}),
		selectChild: (child) => update(s => {
			return Object.assign({}, s, { selectedChild: child });
		}),
		deSelectChild: (child?) => update(s => {
			return Object.assign({}, s, { selectedChild: null });
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
		increaseFlexGrow: (id) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.flexGrow++;
			return Object.assign({}, s);
		}),
		decreaseFlexGrow: (id) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.flexGrow--;
			return Object.assign({}, s);
		}),
		increaseFlexShrink: (id) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.flexShrink++;
			return Object.assign({}, s);
		}),
		decreaseFlexShrink: (id) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.flexShrink--;
			return Object.assign({}, s);
		}),
		setFlexBasis: (id, flexBasis) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.flexBasis = flexBasis;
			return Object.assign({}, s);
		}),
		setAlignSelf: (id, alignSelf) => update(s => {
			const child = s.children.find(x => x.id === id);
			child.alignSelf = alignSelf;
			return Object.assign({}, s);
		}),

		reset: () => set({ children: [], selectedChild: null })
	};
}

export const ChildrenStore: any = childrenStore();