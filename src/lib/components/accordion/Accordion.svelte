<script>
    import { writable } from 'svelte/store'
    import { setContext } from 'svelte'
    export let collapse = false

    const activeComponentId = writable(null)

    setContext('collapse', collapse)
    setContext('active', activeComponentId)
</script>

<div class="accordion w-full my-2 border border-dashed border-cyan-500 px-1">
    <slot />
</div>
