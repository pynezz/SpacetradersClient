
<script lang="ts">
    import TextRow from "../row/TextRow.svelte";


    export let title: string = '';
    export let headquarters: string = '';
    export let credits: Number = 0;
    export let startingFaction: string;
</script>

<div id="card" class="flex flex-col w-full border border-teal-500 p-2">
    <h1 class="text-3xl font-bold text-neutral-50">{title}</h1>
    <TextRow text="🏢 {headquarters}" fontSize="text-lg" />
    <TextRow text="💰 {credits}" fontSize="text-md" />
    <TextRow text="🛡️ {startingFaction}" fontSize="text-md" color="text-neutral-100" />
    <!-- <p class="text-neutral-50">🏢{headquarters}</p> -->
    <!-- <p class="text-neutral-50">💰{credits}</p> -->
</div>
