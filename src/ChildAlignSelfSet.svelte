<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ToggleOptions from "./ToggleOptions.svelte";

  export let alignSelf: string;
  export let direction: string = 'vertical';
  let clazz = '';
	export { clazz as class };

  const dispatch = createEventDispatcher();

  const onChange = (e) =>
    dispatch("alignSelfChange", e.detail.value);

  const items = [
    { label: "AUTO", value: "auto" },
    { label: "FLEX-START", value: "flex-start" },
    { label: "FLEX-END", value: "flex-end" },
    { label: "CENTER", value: "center" },
    { label: "BASELINE", value: "baseline" },
    { label: "STRETCH", value: "stretch" },
  ];
</script>

<ToggleOptions
  class={clazz}
  label="Align Self"
  {direction}
  value={alignSelf}
  items={items}
  on:change={onChange}
/>

<style>
</style>
