<script lang="ts">
	import UnitOptions from './UnitOptions.svelte';
  import { createEventDispatcher } from "svelte";

  export let child;
  const dispatch = createEventDispatcher();

  const increaseOrder = () => dispatch("increaseOrder", child);
  const decreaseOrder = () => dispatch("decreaseOrder", child);
  const increaseFlexGrow = () => dispatch("increaseFlexGrow", child);
  const decreaseFlexGrow = () => dispatch("decreaseFlexGrow", child);
  const increaseFlexShrink = () => dispatch("increaseFlexShrink", child);
  const decreaseFlexShrink = () => dispatch("decreaseFlexShrink", child);
  
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
