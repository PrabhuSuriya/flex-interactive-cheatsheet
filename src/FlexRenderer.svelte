<script lang="typescript">
    // export let childCount: number = 0;
    export let children: any[] = [];

</script>

<section>
        <div class="flex">
            {#each children as child }
                <div class="w-28 h-28 border-2 border-gray-700 bg-green-700">

                </div>
            {/each}

        </div>
</section>

<style>

</style>