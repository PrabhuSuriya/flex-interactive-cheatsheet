<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ToggleOptions from "./ToggleOptions.svelte";

  export let wrap: string;

  const dispatch = createEventDispatcher();

  const onChange = (e) => dispatch("wrapChange", { wrap: e.detail.value });

  const wrapOptions = [
    { label: "NO-WRAP", value: "no-wrap" },
    { label: "WRAP", value: "wrap" },
    { label: "WRAP-REVERSE", value: "wrap-reverse" },
  ];
</script>

<ToggleOptions label="Flex Wrap" value={wrap} items={wrapOptions} on:change={onChange} />

<style>
</style>
