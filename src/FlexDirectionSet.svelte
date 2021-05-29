<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let direction: string = "row";

  const dispatch = createEventDispatcher();

  const directionChange = (direction: string) =>
    dispatch("directionChange", { direction });

  const directionOptions = [
      { label: "ROW", value: "row" },
      { label: "ROW-REVERSE", value: "row-reverse" },
      { label: "COLUMN", value: "column" },
      { label: "COLUMN-REVERSE", value: "column-reverse" },
      ];
</script>

<section class="p-2 flex flex-col m-2 rounded" style="background-color: #9DB2F7;">
  <h5 class="font-semibold text-base">Flex Direction:</h5>
  <section class="flex">
    {#each directionOptions as item}
      <button
        class="hover:bg-green-300 font-bold py-2 px-4 rounded mr-2 border-yellow-800"
        class:bg-green-600={direction === item.value}
        class:text-white={direction === item.value}
        on:click={() => directionChange(item.value)}>{item.label}</button
      >
    {/each}
  </section>
</section>

<style>
</style>
