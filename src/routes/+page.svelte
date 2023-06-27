<script lang="ts">

    import { agentStore } from "$lib/stores/customStores";
	import type { Agent } from "$lib/types";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";


    // onMount(async () => {
    //     // await getAgent();
    //     // console.log(agent);
    // });

</script>

<div class="flex flex-col mx-2 space-y-4">


    <h1 class="text-2xl font-light text-neutral-100">
        Built with Svelte/SvelteKit and TailwindCSS
    </h1>

    <button type="button" class="backdrop-blur-md bg-cyan-800/70 h-full p-2 border border-teal-500
        hover:bg-cyan-800/40
        duration-200" on:click={() => goto('/dashboard')}>
        <span class="font-bold font-mono text-xl text-neutral-50">DASHBOARD</span>
    </button>
</div>
