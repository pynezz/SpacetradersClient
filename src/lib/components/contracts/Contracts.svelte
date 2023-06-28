<script lang="ts">
    import type { Contract } from "$lib/types";

    const contractSymbol = {
        "Procurement": "⛏️",
        "Recon": "🔭",

    }

    export let contracts: Array<Contract> = [];

    let tooltip = { text: '', groupName: '' };

    const showToolTip = (groupName: string, text: string | Date) => {
        tooltip = { text: text as string, groupName };
    }

    const hideTooltip = () => {
        tooltip = { text: '', groupName: '' };
    }

    $: hoverClass = `absolute z-50 p-1 -right-1 -top-1/3 bg-cyan-900/40 text-neutral-50 px-2 text-xs rounded-sm backdrop-blur-md opacity-0 delay-500 transition duration-200 ease-in-out`;

    $: timeleft = (deadline: Date) => {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        const diff = deadlineDate.getTime() - now.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}:${seconds}`;
    }


</script>
<div class="group w-full h-full">
    {#each contracts as contract (contract.id)}
        <div class="card p-2 w-fit border-2 border-dotted border-gray-600/50 rounded-sm">
            <div class="flex flex-row space-x-2 items-center justify-between">
                <p class="text-md text-neutral-50">{contract.type}</p>
                <p class="text-xs text-neutral-500">{contract.id}</p>
            </div>

            <div class="border rounded-md p-2 m-1 mx-2 text-neutral-100 text-sm">
                ⏳ {timeleft(contract.deadlineToAccept)}
            </div>

            <div class="pl-2 border-l border-l-neutral-500 pointer-events-auto">
                <h3 class="text-md text-neutral-200 font-light underline">Terms</h3>

                <div class="relative group/deadline">
                    <p class="text-base text-neutral-100"
                        on:mouseover={() => showToolTip('deadline', contract.terms.deadline)}
                        on:mouseout={hideTooltip}
                        on:focus={() => showToolTip('deadline', contract.terms.deadline)}
                        on:blur={hideTooltip}>
                        Deadline: {contract.terms.deadline.toString().split('T')[0]}
                    </p>

                    <div class={`${hoverClass}  group-hover/deadline:opacity-90`}>
                        {contract.terms.deadline}
                    </div>
                </div>

                <div class="relative group/accepted">
                    <p class="text-base text-lime-200"
                        on:mouseover={() => showToolTip('accepted', contract.terms.payment.onAccepted.toString())}
                        on:mouseout={hideTooltip}
                        on:focus={() => showToolTip('accepted', contract.terms.payment.onAccepted.toString())}
                        on:blur={hideTooltip}
                        >
                        Payment upfront: {contract.terms.payment.onAccepted.toLocaleString('nb-NO')},-
                    </p>

                    <div class={`${hoverClass} group-hover/accepted:opacity-90`}>
                        {contract.terms.payment.onAccepted}
                    </div>
                </div>

                <div class="relative group/fulfilled">
                    <p class="text-base text-lime-200"
                        on:mouseover={() => showToolTip('fulfilled', contract.terms.payment.onFulfilled.toString())}
                        on:mouseout={hideTooltip}
                        on:focus={() => showToolTip('fulfilled', contract.terms.payment.onFulfilled.toString())}
                        on:blur={hideTooltip}>
                        Payment when done: {contract.terms.payment.onFulfilled.toLocaleString('nb-NO')},-
                    </p>

                    <div class={`${hoverClass} group-hover/fulfilled:opacity-90`}>
                        {contract.terms.payment.onFulfilled}
                    </div>
                </div>

                <div class="relative group/deliver text-stone-400 text-sm">
                    {#each contract.terms.deliver as deliver (deliver.tradeSymbol)}
                    <p class="text-base text-stone-400"
                        on:mouseover={() => showToolTip('deliver', deliver.tradeSymbol)}
                        on:mouseout={hideTooltip}
                        on:focus={() => showToolTip('deliver', deliver.tradeSymbol)}
                        on:blur={hideTooltip}>
                        Material: {deliver.tradeSymbol}
                    </p>
                    <p>Amount: {deliver.unitsRequired}</p>
                    <p>Fulfilled: {deliver.unitsFulfilled}</p>
                    <div id="progressbar" class="bg-gradient-to-r from-orange-600 to-green-400 text-white/80 pl-2">
                        <div class="progress w-[{(deliver.unitsRequired / deliver.unitsFulfilled) * 100}%]">
                            <p>{deliver.unitsRequired - deliver.unitsFulfilled} / {(deliver.unitsFulfilled / deliver.unitsRequired) * 100}%</p>
                        </div>
                    </div>
                    {/each}
                </div>

            </div>
                <button type="button" class="py-1 my-2 w-full bg-teal-600/10 backdrop-blur-sm duration-200 text-neutral-100 hover:bg-teal-800/50 border rounded-sm border-teal-400/80 outline-2 focus:outline-cyan-500">
                    ACCEPT
                </button>
        </div>
    {/each}
</div>
