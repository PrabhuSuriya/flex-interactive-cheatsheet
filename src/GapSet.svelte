<script lang="ts">
  import ToggleOptionsCompact from "./ToggleOptionsCompact.svelte";
  import { createEventDispatcher } from "svelte";
  import { ChildrenStore } from "./children-store";
  import type { Gap } from "./flex-option.model";
  import UnitOptions from "./UnitOptions.svelte";

  export let gap: Gap;
  const dispatch = createEventDispatcher();

  const onChange = (e) => console.log("gapChange", { gap: e.detail });

  const items = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
    { label: "cm", value: "cm" },
    { label: "pt", value: "pt" },
  ];
</script>

<UnitOptions
  value={gap.value}
  unit={gap.unit}
  title="Set Gap"
  {items}
  on:add={onChange}
  on:remove={onChange}
  on:unit={onChange}
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
