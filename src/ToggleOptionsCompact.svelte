<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: string | number;
  export let items = [];
  export let direction = 'horizontal';

  const dispatch = createEventDispatcher();
  const change = (value: string) => dispatch("change", { value });

</script>

  <section class="flex" class:flex-col={direction === 'vertical'}>
    {#each items as item}
      <button
        class="hover:bg-green-300 font-bold py-2 px-4 pb-2 rounded-none border-r-0 last:border-r first:rounded-l last:rounded-r border-yellow-800"
        
        class:my-2={direction === 'vertical'}
        class:bg-green-600={value === item.value}
        class:text-white={value === item.value}
        on:click={() => change(item.value)}>{item.label}</button
      >
    {/each}
  </section>

<style>
</style>
