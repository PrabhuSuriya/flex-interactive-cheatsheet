<script lang="ts">
  import Tailwindcss from "./Tailwind.svelte";
  import Header from "./Header.svelte";
  import FlexRenderer from "./FlexRenderer.svelte";
  import ChildrenSet from "./ChildrenSet.svelte";
  import { ChildrenStore } from "./children-store";

  const children = ChildrenStore;

  const parentProp = {};
</script>

<Tailwindcss />
<main>
	<Header />
	<section class="flex">
		<ChildrenSet />
		<!-- <FlexParentSet /> -->


	</section>


  <section class="p-5 border-gray-500 border-2">
    <FlexRenderer children={$ChildrenStore} />
	<!-- {$children} -->
  </section>
</main>

<style>
</style>
