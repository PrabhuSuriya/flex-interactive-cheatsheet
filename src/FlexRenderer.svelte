<script lang="typescript">
  import { createEventDispatcher } from "svelte";
import type { FlexOptions } from "./flex-option.model";

  export let children: any[] = [];
  export let flexOptions: FlexOptions;

  const dispatch = createEventDispatcher();

  const childSelected = (child) => dispatch('childSelected', child);
</script>

{#if children.length}
  <div
    style="
    width: 100%;
    user-select: none;
    flex-direction: {flexOptions.flex_direction};
    flex-wrap: {flexOptions.flex_wrap};
    align-items: {flexOptions.align_items};
    justify-content: {flexOptions.justify_content};
    gap: {flexOptions.gap.value}{flexOptions.gap.unit};
    "
    class="flex border-gray-200 border-2"
  >
    {#each children as child, i}
      <div
        class="flex items-center justify-center w-28 h-28 border-2 border-gray-700 bg-green-700 text-6xl text-white "
        style="order: {child.order};"
        on:click={() => childSelected(child)}
      >
        {i}
      </div>
    {/each}
  </div>
{:else}
  <div
    class="flex p-2 border-gray-200 border-2 items-center justify-center"
    style="width: 100%;"
  >
    Start adding some children..
  </div>
{/if}

<style>
</style>
