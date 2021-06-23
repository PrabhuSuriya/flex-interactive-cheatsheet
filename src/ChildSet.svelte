<script lang="ts">
	import UnitOptions from './UnitOptions.svelte';
  import { createEventDispatcher } from "svelte";

  export let child;
  const dispatch = createEventDispatcher();

  const items = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
    { label: "cm", value: "cm" },
    { label: "pt", value: "pt" },
    { label: "auto", value: "auto" },
  ];

  const increaseOrder = () => dispatch("increaseOrder", child);
  const decreaseOrder = () => dispatch("decreaseOrder", child);
  const increaseFlexGrow = () => dispatch("increaseFlexGrow", child);
  const decreaseFlexGrow = () => dispatch("decreaseFlexGrow", child);
  const increaseFlexShrink = () => dispatch("increaseFlexShrink", child);
  const decreaseFlexShrink = () => dispatch("decreaseFlexShrink", child);
  const onChangeFlexBasis = (e) => dispatch("changeFlexBasis", {child, flexBasis: e.detail});
  
</script>

<UnitOptions
  value={child.order}
  title="Set Order"
  items={[]}
  on:add={increaseOrder}
  on:remove={decreaseOrder}
/>
<UnitOptions
  value={child.flexGrow}
  title="Set Flex Grow"
  items={[]}
  on:add={increaseFlexGrow}
  on:remove={decreaseFlexGrow}
/>
<UnitOptions
  value={child.flexShrink}
  title="Set Flex Shrink"
  items={[]}
  on:add={increaseFlexShrink}
  on:remove={decreaseFlexShrink}
/>
<UnitOptions
  value={child.flexBasis.value}
  unit={child.flexBasis.unit}
  title="Set Flex Basis"
  {items}
  on:add={onChangeFlexBasis}
  on:remove={onChangeFlexBasis}
  on:unit={onChangeFlexBasis}
/>



<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
