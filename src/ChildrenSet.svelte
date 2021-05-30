<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let children;
  const dispatch = createEventDispatcher();

  const addChild = () => dispatch("addChild");
  const removeChild = () => dispatch("removeChild");
  
</script>

<section
  class="p-2 flex flex-row m-2 rounded"
  style="background-color: #a1e085;"
>
  <div>
    <h5 class="font-semibold text-base">Set Children:</h5>
    <section class="flex">
      <button
        class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
        on:click={removeChild}>-</button
      >
      <input
        class="mr-2 w-10 text-center"
        type="number"
        name=""
        id=""
        value={children.length}
      />
      <button
        class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
        on:click={addChild}>+</button
      >
    </section>
  </div>
</section>

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
