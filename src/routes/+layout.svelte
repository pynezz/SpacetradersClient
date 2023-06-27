<script lang="ts">
  import Nav from "$lib/components/nav/Nav.svelte";
import "../app.css";
</script>

<!-- <div class="bg-yellow-400/60"> -->
  <Nav />

  <main class="flex flex-col m-2">

    <slot />
  </main>
<!-- </div> -->

<style lang="postcss">
  :global(html) {
    font-family: 'Cascadia Code', 'Roboto Mono', 'Fira Code', monospace;
    background-color: theme(colors.stone.900);
  }
</style>
