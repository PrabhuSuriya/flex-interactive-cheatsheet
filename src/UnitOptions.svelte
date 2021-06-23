<script lang="ts">
  import ToggleOptionsCompact from "./ToggleOptionsCompact.svelte";
  import { createEventDispatcher } from "svelte";

  export let value;
  export let unit = undefined;
  export let title;
  export let items = [];
  const dispatch = createEventDispatcher();

  const onChange = (type, changedUnit?) => {
    switch (type) {
      case "ADD": {
        dispatch("add", { value: value + 1, unit });
        break;
      }
      case "REMOVE": {
        dispatch("remove", { value: value - 1, unit });
        break;
      }
      case "UNIT": {
        dispatch("unit", { value: value, unit: changedUnit });
        break;
      }
    }
  };


</script>

<section
  class="p-1 m-1 md:p-2 flex flex-row md:m-2 rounded"
  style="background-color: #a1e085;"
>
  <div>
    <h5 class="font-semibold text-base">{title}:</h5>
    <section class="flex flex-nowrap">
      <div class="flex">
        <button
          class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
          on:click={() => onChange("REMOVE")}>-</button
        >
        <input class="mr-2 w-10 text-center" type="number" value={value} />
        <button
          class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
          on:click={() => onChange("ADD")}>+</button
        >
      </div>
      <ToggleOptionsCompact
        value={unit}
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
