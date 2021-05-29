<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label: string = 'Choose';
  export let value: string;
  export let items = [];

  const dispatch = createEventDispatcher();
  const change = (value: string) => dispatch("change", { value });

</script>

<section class="p-2 flex flex-col m-2 rounded" style="background-color: #9DB2F7;">
  <h5 class="font-semibold text-base">{label}:</h5>
  <section class="flex">
    {#each items as item}
      <button
        class="hover:bg-green-300 font-bold py-2 px-4 rounded mr-2 border-yellow-800"
        class:bg-green-600={value === item.value}
        class:text-white={value === item.value}
        on:click={() => change(item.value)}>{item.label}</button
      >
    {/each}
  </section>
</section>

<style>
</style>
