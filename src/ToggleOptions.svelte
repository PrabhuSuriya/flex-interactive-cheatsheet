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

<section class="{clazz} wrapper p-1 m-1 pb-2 flex flex-row rounded whitespace-nowrap" style="background-color: #9DB2F7;">
  <div>
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
  </div>
</section>

<style>
  section.wrapper {
    background: #a8ff78;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border: 1px #17ad0c solid;
    box-shadow: 0px 1px 4px 1px #80c82d;
    box-sizing: border-box;
  }
</style>
