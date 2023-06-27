<script lang="ts">
	// import { agent } from '$lib/agent';
    import { agentStore } from "$lib/stores/customStores";
    import type { Agent } from "$lib/types";
	import { onDestroy, onMount } from "svelte";
	import { writable } from "svelte/store";
    import Contracts from "$lib/components/contracts/Contracts.svelte";
    import AgentCard from "$lib/components/Cards/AgentCard.svelte";

    export let data;

    let agentData = writable<Agent>(data.agent);

    onDestroy(() => {
        agentStore.set({} as Agent);
    });
</script>

<div id="card" class="flex flex-col w-full">
    <AgentCard title={$agentData?.symbol} headquarters={$agentData?.headquarters} credits={$agentData?.credits} startingFaction={$agentData.startingFaction} />
</div>

<div id="contracts" class="flex flex-col w-full">
    {#if data.contracts.length === 0}
        <p class="text-lg text-neutral-100">No contracts available</p>
    {:else}
        <p class="text-lg text-neutral-100">Contracts available</p>
        <Contracts contracts={data.contracts} />
    {/if}
</div>
