<script lang="ts">
	import { waypointStore } from '$lib/stores/customStores';
  import Nav from "$lib/components/nav/Nav.svelte";
  import "../app.css";

  // export let waypointData;
</script>

<!-- <div class="bg-yellow-400/60"> -->
  <Nav />

  <main class="m-2">
    <slot />

  </main>
<!-- </div> -->

<style lang="postcss">
  :global(html) {
    font-family: 'Cascadia Code', 'Roboto Mono', 'Fira Code', monospace;
    background-color: theme(colors.stone.900);
  }
</style>
