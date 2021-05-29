<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ToggleOptions from "./ToggleOptions.svelte";

  export let justifyContent: string;

  const dispatch = createEventDispatcher();

  const onChange = (e) =>
    dispatch("justifyContentChange", { justifyContent: e.detail.value });

  const items = [
    { label: "FLEX-START", value: "flex-start" },
    { label: "FLEX-END", value: "flex-end" },
    { label: "CENTER", value: "center" },
    { label: "SPACE-BETWEEN", value: "space-between" },
    { label: "SPACE-AROUND", value: "space-around" },
    { label: "SPACE-EVENLY", value: "space-evenly" },
  ];
</script>

<ToggleOptions
  label="Justify Content"
  direction="vertical"
  value={justifyContent}
  {items}
  on:change={onChange}
/>

<style>
</style>
