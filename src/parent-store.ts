import { writable } from 'svelte/store';
import type { FlexOptions } from './flex-option.model';

const defaultOptions: FlexOptions = {
	flex_direction: 'row',
	flex_wrap: 'nowrap',
	align_items: 'stretch',
	justify_content: 'flex-start',
	gap: { value: 1, unit: 'em'}
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
		changeAlignItems: (alignItems) => update(s => {
			return Object.assign({}, s, { align_items: alignItems })
		}),
		changeJustifyContent: (justifyContent) => update(s => {
			return Object.assign({}, s, { justify_content: justifyContent })
		}),
		changeGap: (gap) => update(s => {
			return Object.assign({}, s, { gap: gap })
		}),
		reset: () => set(defaultOptions)
	};
}

export const ParentStore = parentStore();