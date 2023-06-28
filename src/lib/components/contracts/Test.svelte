<script lang="ts">
    let tooltip = { x: 0, y: 0, text: '', visible: false };

    const showToolTip = (event: MouseEvent) => {
        tooltip = { x: event.clientX, y: event.clientY, text: 'Tooltip text', visible: true };
    }

    const moveTooltip = (event: MouseEvent) => {
        if (tooltip.visible) {
            tooltip = { ...tooltip, x: event.clientX, y: event.clientY + 20 };
        }
    }

    const hideTooltip = () => {
        tooltip = { x: 0, y: 0, text: '', visible: false };
    }

    $: hoverClass = `fixed left-[${tooltip.x}px] top-[${tooltip.y}px] z-50 bg-white text-black px-2 py-1 rounded-md text-xs ${tooltip.visible ? 'opacity-80' : 'opacity-0'} delay-500 transition duration-200 ease-in-out`;
</script>

<div on:mouseover={showToolTip} on:mouseout={hideTooltip} on:mousemove={moveTooltip} class="p-4 bg-blue-500 text-white">
    Hover over me
</div>

<div class={hoverClass}>
    {tooltip.text}
</div>
