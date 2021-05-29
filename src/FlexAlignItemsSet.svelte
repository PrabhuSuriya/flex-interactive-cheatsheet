<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ToggleOptions from "./ToggleOptions.svelte";

  export let alignItems: string;

  const dispatch = createEventDispatcher();

  const onChange = (e) =>
    dispatch("alignItemsChange", { alignItems: e.detail.value });

  const items = [
    { label: "STRETCH", value: "stretch" },
    { label: "FLEX-START", value: "flex-start" },
    { label: "FLEX-END", value: "flex-end" },
    { label: "CENTER", value: "center" },
    { label: "BASELINE", value: "baseline" },
    { label: "AUTO", value: "auto" },
  ];
</script>

<ToggleOptions
  label="Align Items"
  direction="vertical"
  value={alignItems}
  items={items}
  on:change={onChange}
/>

<style>
</style>
