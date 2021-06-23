<script lang="ts">
	import UnitOptions from './UnitOptions.svelte';
  import { createEventDispatcher } from "svelte";

  export let children;
  const dispatch = createEventDispatcher();

  const addChild = () => dispatch("addChild");
  const removeChild = () => dispatch("removeChild");
  
</script>

<UnitOptions
  value={children.length}
  title="Set Children"
  items={[]}
  on:add={addChild}
  on:remove={removeChild}
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
