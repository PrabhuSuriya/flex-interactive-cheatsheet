<script>
  import { ChildrenStore } from "./children-store";

  const children = ChildrenStore;

</script>

<section class="p-2 flex flex-col">
    <h5 class="font-semibold text-base">Number of Children:</h5>
    <section class="flex">
        <button 
        class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mr-2"
        on:click="{() => children.addChild()}"
        >+</button>
        <input class="mr-2 w-10 text-center" type="number" name="" id="" value={$children.length}>
        <button 
        class="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded"
        on:click="{() => children.removeChild()}"
        >-</button>
    </section>
</section>