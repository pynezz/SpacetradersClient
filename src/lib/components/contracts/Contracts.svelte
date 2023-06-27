<script lang="ts">
    export let contracts: Array<any> = [];
</script>

<div class="flex">

    {#each contracts as contract (contract.id)}
    <div class="text-green-500">

    </div>

    {/each}
</div>
