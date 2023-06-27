<script lang="ts">
    export let text: string = '';
    export let fontSize: string = 'text-base';
    export let color: string = 'text-neutral-50';
</script>

<div id="card" class="flex flex-col p-2 border-x border-x-slate-600 border-y-slate-700 border-y-2 hover:bg-white/10 duration-500">
    <p class="{fontSize} font-bold {color}">{text}</p>
</div>
