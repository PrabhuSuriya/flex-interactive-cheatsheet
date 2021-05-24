<script lang="ts">
	import Tailwindcss from './Tailwind.svelte';
	export let name: string;
</script>
<Tailwindcss />
<main>
	<h1 class="flex text-center">Hello {name}!</h1>
</main>

<style>
	
</style>