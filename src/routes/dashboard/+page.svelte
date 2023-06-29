<!-- src/routes/dashboard/+page.svelte -->
<script lang="ts">
	// import { agent } from '$lib/agent';
    import { agentStore } from "$lib/stores/customStores";
    import type { Agent } from "$lib/types";
	import { onDestroy, onMount } from "svelte";
	import { writable } from "svelte/store";
    import Contracts from "$lib/components/contracts/Contracts.svelte";
    import AgentCard from "$lib/components/Cards/AgentCard.svelte";
    import { post } from "./acceptContract";

    export let data;


    let agentData = writable<Agent>(data.agent);

    onDestroy(() => {
        agentStore.set({} as Agent);
    });

    const handleAcceptContract = async (e: any) => {
        const contractId = e.detail;
        const response = await fetch('/dashboard/contracts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'contractID': contractId,
            },
            // body: JSON.stringify(contractId)
        });

        if (!response.ok) {
            // Handle error
            console.error('Error accepting contract');
            return;
        }

        const data = await response.json();

        // Handle the response data as needed
        console.log(data);
    }


</script>

<div id="card" class="flex flex-col w-full">
    <AgentCard title={$agentData?.symbol} headquarters={$agentData?.headquarters} credits={$agentData?.credits} startingFaction={$agentData.startingFaction} />
</div>

<div id="contracts" class="w-full">
    {#if data.contracts.length === 0}
        <p class="text-lg text-neutral-100">No contracts available</p>
    {:else}
        <p class="text-lg text-neutral-100">Contracts available</p>
        <Contracts contracts={data.contracts} on:contractAccepted={handleAcceptContract}/>
    {/if}
</div>
