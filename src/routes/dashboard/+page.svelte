<!-- src/routes/dashboard/+page.svelte -->
<script lang="ts">
	// import { agent } from '$lib/agent';
    import { agentStore } from "$lib/stores/customStores";
    import type { Agent } from "$lib/types";
	import { onDestroy, onMount } from "svelte";
	import { writable } from "svelte/store";
    import Contracts from "$lib/components/contracts/Contracts.svelte";
    import AgentCard from "$lib/components/Cards/AgentCard.svelte";
    import { slide } from 'svelte/transition';

    import { post } from "./acceptContract";
	import Accordion from "$lib/components/accordion/Accordion.svelte";
	import AccordionItem from "$lib/components/accordion/AccordionItem.svelte";

    const dashboardMenuItems = [
		{ title: 'Agent', content: '', index: 0 },
		{ title: 'Contracts', content: Contracts, index: 1 },
		// { title: 'Meldinger', content: '' }
	];

    // Display stuff based on the chosen menu item
	let menuItems = dashboardMenuItems;
	let chosenItem = menuItems[0].index;

    export let data;

    let chosenMenuItem = writable(0);

	const handleMenuItemClick = (item: number) => {
        chosenItem = item;
		chosenMenuItem.set(item);
        console.log('Chosen menu item: ', $chosenMenuItem);
	};

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

<div class="flex flex-row h-screen">

    <div id="card" class="flex flex-col w-full">
        <AgentCard title={$agentData?.symbol} headquarters={$agentData?.headquarters} credits={$agentData?.credits} startingFaction={$agentData.startingFaction} />
        <div class="accordion w-full">
        {#if data.contracts.length === 0}
            <p class="text-lg text-red-100 m-2 font-light">no contracts available...</p>
        {:else}
        <Accordion>
            <p class="text-md text-cyan-200 mx-2 mt-2 font-light animate-pulse font-sans">contracts available</p>
            <AccordionItem>
                <!-- <svelte:fragment slot="title">

            </svelte:fragment> -->
                <svelte:fragment slot="content">
        <!-- <button class="bg-transparent hover:bg-white/5 text-neutral-100 font-medium py-2 px-4 border-r border-r-slate-500
            border-spacing-y-4
            {chosenMenuItem === dashboardMenuItems[0] ? 'border-b-4 border-spacing-y-4 border-b-green-500' : ''}"
            on:click={() => handleMenuItemClick(dashboardMenuItems[0])}>Klasserom
	    </button> -->
                    <div id="contracts" class="w-full">
                        <Contracts contracts={data.contracts} on:contractAccepted={handleAcceptContract}/>
                    </div>
                </svelte:fragment>

            </AccordionItem>
        </Accordion>
        {/if}
    </div>
    </div>

        <!-- Spaceship SVG -->
    <div class="hover:w-full w-min border-2 group p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
        <button type="button" class="duration-200 ease-in-out group-hover:w-full">Shipyard</button>
    </div>



</div>
