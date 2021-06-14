<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label: string = 'Choose';
  export let value: string;
  export let items = [];
  export let direction = 'horizontal';
  let clazz = '';
	export { clazz as class };

  const dispatch = createEventDispatcher();
  const change = (value: string) => dispatch("change", { value });

</script>

<section class="{clazz} p-1 m-1 md:p-2 flex flex-col md:m-2 rounded whitespace-nowrap" style="background-color: #9DB2F7;">
  <h5 class="font-semibold text-base">{label}:</h5>
  <section class="flex flex-nowrap gap-y-2" class:flex-col={direction === 'vertical'}>
    {#each items as item}
      <button
        class="hover:bg-green-300 font-bold py-2 px-4 rounded border-yellow-800"
        class:mx-2={direction === 'horizontal'}
        class:my-2={direction === 'vertical'}
        class:bg-green-600={value === item.value}
        class:text-white={value === item.value}
        on:click={() => change(item.value)}>{item.label}</button
      >
    {/each}
  </section>
</section>

<style>
</style>
