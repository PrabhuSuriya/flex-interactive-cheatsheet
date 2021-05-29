<script lang="typescript">
  import type { FlexOptions } from "./flex-option.model";

  export let children: any[] = [];
  export let flexOptions: FlexOptions;
</script>

{#if children.length}
  <div
    style="
    width: 100%;
    flex-direction: {flexOptions.flex_direction};
    flex-wrap: {flexOptions.flex_wrap};
    align-items: {flexOptions.align_items};
    justify-content: {flexOptions.justify_content};
    "
    class="flex p-2 border-gray-500 border-2"
  >
    {#each children as child, i}
      <div
        class="flex items-center justify-center w-28 h-28 border-2 border-gray-700 bg-green-700 m-2 text-6xl text-white "
      >
        {i}
      </div>
    {/each}
  </div>
{/if}

<style>
</style>
