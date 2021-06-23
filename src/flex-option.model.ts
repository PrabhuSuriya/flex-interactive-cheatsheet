export interface FlexOptions {
    flex_direction: 'row' | 'row_reverse' | 'column' | 'column-reverse';
    flex_wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    align_items: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'auto';
    justify_content: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap: CSSUnit;
}

export class ChildOptions {
    id: number;
    order?: number = 0;
    flexGrow?: number = 0;
    flexShrink?: number = 1;
    flexBasis?: CSSUnit;
}

export const getChild = (id: number): ChildOptions => ({
    id,
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: { value: 0, unit: 'auto' }
});

export const getCSSUnitString = (cssUnit: CSSUnit): string => {
    if (cssUnit.unit === 'auto') {
        return cssUnit.unit;
    }
    return `${cssUnit.value}${cssUnit.unit}`;
}

export interface CSSUnit { value: number, unit: Unit }

type Unit = 'px' | '%' | 'em' | 'cm' | 'pt' | 'auto';