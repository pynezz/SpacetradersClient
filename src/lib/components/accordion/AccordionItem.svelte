<script>
    import {getContext} from 'svelte'
    import { slide } from 'svelte/transition'

    export let open = false

    const componentId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const collapse = getContext('collapse')
    const activeComponentId = getContext('active')

    function setActive() {
        $activeComponentId = componentId
    }

    function toggleOpen() {
      open = !open
    }

    function handleClick() {
        collapse ? setActive() : toggleOpen()
    }

    $: open && collapse && setActive()
    $: isActive = $activeComponentId === componentId
    $: isOpen = collapse ? isActive : open
</script>



<div class="accordion-item w-full my-2 duration-300 rounded-sm">
    <button on:click={handleClick} class="accordion-toggle w-full p-2 text-black font-bold cursor-pointer rounded-md border-b-2 flex justify-between
        hover:bg-cyan-400/10"
        aria-expanded={isOpen}
        aria-controls="accordion-{componentId}">
        <div class="accordion-caret"
            class:open={isOpen}
            class:close={!isOpen}><p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 text-fuchsia-50" fill="none" viewBox="4 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </p>
        </div>
        <div class="accordion-title p-1 w-full text-fuchsia-50 ">
            {#if isOpen}
                <p>hide Contracts</p>
            {:else}
                <p>view Contracts</p>
            {/if}
            <slot name="title" />
        </div>


    </button>

{#if isOpen}
    <div transition:slide|local class="accordion-content"
       role="region"
       aria-labelledby="accordion-{componentId}">
      <slot name="content" />
    </div>
{/if}
</div>
<style>

/* Prøvde på å få bilde(pile) til å rotere nedover smooth :) */
/* - Thanks, I'll use it */
.open {
    transform: rotateX(-180deg);
    transition-timing-function: ease;
    transition-duration: 0.25s;
}
.close {
    transform: rotate(0deg);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
}

</style>
