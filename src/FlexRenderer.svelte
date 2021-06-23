<script lang="typescript">
  import { createEventDispatcher } from "svelte";
  import { getCSSUnitString } from "./flex-option.model";
  import type { FlexOptions } from "./flex-option.model";

  export let children: any[] = [];
  export let selectedChild;
  export let flexOptions: FlexOptions;

  const dispatch = createEventDispatcher();

  const childSelected = (child) => {
    if (selectedChild?.id !== child.id) {
      dispatch("childSelected", child);
    }
    else {
      dispatch("childDeselected", child);
    }
  }
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
        class="flex items-start justify-start w-28 h-28 border border-gray-700 bg-green-700 text-white relative"
        class:active="{selectedChild?.id == child.id}"
        style="
        order: {child.order};
        flex-grow: {child.flexGrow};
        flex-shrink: {child.flexShrink};
        flex-basis: {getCSSUnitString(child.flexBasis)};
        "
        on:click={() => childSelected(child)}
      >
        <span class="child-index-bg absolute top-0 right-0">
        </span>
        <span class="child-index absolute top-0 right-0 font-bold text-sm leading-none">
          {i}
        </span>
          
        <div class="child-styles text-xs leading-tight p-1">
          <div> order: {child.order} </div>
          <div> flex-grow: {child.flexGrow} </div>
          <div> flex-shrink: {child.flexShrink} </div>
          <div> flex-basis: {getCSSUnitString(child.flexBasis)} </div>
        </div>
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
  .active {
    background-color: #3b0671;
  }
  .child-index-bg {
    width: 0;
    height: 0;
    border-top: 2.5em solid rgb(141 13 13);
    border-left: 2.5em solid transparent;
  }
</style>
