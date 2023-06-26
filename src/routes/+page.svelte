<script lang="ts">

    import { getAgent, agent } from "$lib/agent";
	import type { Agent } from "$lib/types";
	import { onMount } from "svelte";


    onMount(async () => {
        await getAgent();
        console.log(agent);
    });

</script>

<h1 class="text-5xl font-bold">
    {$agent?.accountId}
</h1>



<h3 class="text-3xl font-bold">
    Built with Svelte and TailwindCSS
</h3>
