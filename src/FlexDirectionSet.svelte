<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import ToggleOptions from "./ToggleOptions.svelte";
  
    export let direction: string;
  
    const dispatch = createEventDispatcher();
  
    const onChange = (e) => dispatch("directionChange", { direction: e.detail.value });
  
    const directionOptions = [
      { label: "ROW", value: "row" },
      { label: "ROW-REVERSE", value: "row-reverse" },
      { label: "COLUMN", value: "column" },
      { label: "COLUMN-REVERSE", value: "column-reverse" },
      ];
  </script>
  
  <ToggleOptions label="Flex Direction" value={direction} items={directionOptions} on:change={onChange} />
  
  <style>
  </style>
  