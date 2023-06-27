<script lang="ts">

    export let contracts: Array<any> = [];


</script>

<div class="flex">

    {#each contracts as contract (contract.id)}
    <div class="text-green-500">
        <p class="text-sm text-neutral-500">{contract.id}</p>
        <p class="text-base text-neutral-50">{contract.type}</p>

        <div class="pl-2 border-l border-l-neutral-500">
            <h3 class="text-lg text-neutral-200 font-semibold">Terms</h3>
            <p class="text-base text-neutral-100">Deadline: {contract.terms.deadline}</p>
            <p class="text-base text-lime-200">Payment on accepted: {contract.terms.payment.onaccepted}</p>
            <p class="text-base text-lime-200">Payment on completed: {contract.terms.payment.oncompleted}</p>
        </div>


    </div>

    {/each}
</div>
