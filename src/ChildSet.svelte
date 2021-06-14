<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let child;
  const dispatch = createEventDispatcher();

  const increaseOrder = () => dispatch("increaseOrder", child);
  const decreaseOrder = () => dispatch("decreaseOrder", child);
  
</script>

<section
  class="p-1 m-1 md:p-2 flex flex-row md:m-2 rounded"
  style="background-color: #a1e085;"
>
  <div>
    <h5 class="font-semibold text-base">Order:</h5>
    <section class="flex">
      <button
        class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
        on:click={decreaseOrder}>-</button
      >
      <input
        class="mr-2 w-10 text-center"
        type="number"
        name=""
        id=""
        value={child.order}
      />
      <button
        class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
        on:click={increaseOrder}>+</button
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
