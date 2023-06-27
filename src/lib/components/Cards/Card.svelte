<script lang="ts">
    import TextRow from "../row/TextRow.svelte";
    export let objects: Array<any> = [];
</script>

<div id="card" class="flex flex-col w-full">
    <TextRow text="{objects[0]}" fontSize="text-lg" />
    {#each objects as object}
        {#if object[0] != objects[0]}
            <TextRow text="{object[1]}" fontSize="text-md" />
        {/if}
    {/each}
</div>
