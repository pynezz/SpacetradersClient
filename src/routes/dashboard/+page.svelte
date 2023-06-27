<script lang="ts">
	// import { agent } from '$lib/agent';
    import { agentStore } from "$lib/stores/customStores";
    import type { Agent } from "$lib/types";
	import { onDestroy, onMount } from "svelte";
	import { writable } from "svelte/store";

    import AgentCard from "$lib/components/Cards/AgentCard.svelte";

    export let data;

    let agentData = writable<Agent>(data);

    onDestroy(() => {
        agentStore.set({} as Agent);
    });
</script>

<div id="card" class="flex flex-col w-full">
    <AgentCard title={$agentData?.symbol} headquarters={$agentData?.headquarters} credits={$agentData?.credits} startingFaction={$agentData.startingFaction} />
</div>
