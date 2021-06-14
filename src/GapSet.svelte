<script lang="ts">
  import ToggleOptionsCompact from "./ToggleOptionsCompact.svelte";
  import { createEventDispatcher } from "svelte";
  import { ChildrenStore } from "./children-store";
  import type { Gap } from "./flex-option.model";

  export let gap: Gap;
  const dispatch = createEventDispatcher();

  const onChange = (type, unit?) => {
    switch (type) {
      case "ADDGAP": {
        gap.value += 1;
        break;
      }
      case "REMOVEGAP": {
        gap.value -= 1;
        break;
      }
      case "UNIT": {
        gap.unit = unit;
        break;
      }
    }
    dispatch("gapChange", { gap });
  };

  const items = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
    { label: "cm", value: "cm" },
    { label: "pt", value: "pt" },
  ];
</script>

<section
  class="p-2 flex flex-row m-2 rounded"
  style="background-color: #a1e085;"
>
  <div class="ml-2">
    <h5 class="font-semibold text-base">Set Gap:</h5>
    <section class="flex flex-nowrap">
      <div class="flex">
        <button
          class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
          on:click={() => onChange("REMOVEGAP")}>-</button
        >
        <input class="mr-2 w-10 text-center" type="number" value={gap.value} />
        <button
          class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
          on:click={() => onChange("ADDGAP")}>+</button
        >
      </div>
      <ToggleOptionsCompact
        value={gap.unit}
        {items}
        on:change={(e) => onChange("UNIT", e.detail.value)}
      />
    </section>
  </div>
</section>

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
