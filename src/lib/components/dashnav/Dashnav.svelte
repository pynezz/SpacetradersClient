<script lang="ts">
	import { writable } from 'svelte/store';
	import type { Waypoint } from '$lib/types';

    export let waypoint: Waypoint;

    let isVisible = writable(true);
    let descriptors: any = {
        'Marketplace': '⚖️',
        'Overcrowded': '👥',
        'High-Tech': '🤖',
        'Bureaucratic': '📝',
        'Temperate': '🌤️',
    }

    let waypointType: any = {
        'PLANET': '🪐',
        'STATION': '🛰️',

    }

</script>

{#if $isVisible}
<p>visible</p>
<nav class="fixed inset-x-0 bottom-0 text-white p-0 z-10 flex flex-col">

    <button class="px-5 self-center rounded-t-xl opacity-30 hover:opacity-90 bg-gray-800/50"
        on:click={() => isVisible.set(false)}>

        <!-- Chevron down svg -->
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0L4.586 8.586a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0
                111.414 1.414l-5 5z"
                clip-rule="evenodd" />
    </button>

	<div class="font-bold p-2 backdrop-blur-md w-full border-t border-teal-50/50">
        <div class="grid grid-cols-3 items-center grid-rows-1 mix-blend-hard-light justify-around">

            <div class="flex flex-col flex-shrink">
                <p>{waypoint?.systemSymbol}</p>
                <p>{waypoint?.faction.symbol}</p>
            </div>

            <div class="border w-full">
                <p class="h-fit grow text-center">{waypointType[waypoint.type]}</p>
                <p class="h-fit grow text-center">{waypoint?.type}</p>
            </div>

            {#if waypoint?.traits}
            <div class="flex flex-row justify-end">
                {#each waypoint.traits as trait}
                <!-- <p class="mx-2 text-xs">{trait.name}</p> -->
                <p class=" mx-2">{descriptors[trait.name]}</p>
                {/each}
            </div>
            {/if}

        </div>
	</div>
</nav>

{:else}
<nav class="fixed inset-x-0 bottom-0 z-10 text-white p-2 duration-200 flex flex-col translate-y-2">
    <button class="px-5 self-center rounded-t-xl opacity-30 hover:opacity-90 bg-gray-800/50"
        on:click={() => isVisible.set(true)}>
    <!-- Chevron down svg -->
        <svg class="w-4 h-4 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
                fill-rule="evenodd"
                d="M10.707 13.707a1 1 0 01-1.414 0L4.586 8.586a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0
                111.414 1.414l-5 5z"
                clip-rule="evenodd" />
    </button>
</nav>
{/if}
