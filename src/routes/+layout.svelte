<script type="ts">
  import "../app.css";
</script>

<!-- <div class="bg-yellow-400/60"> -->
    <slot />
<!-- </div> -->

<style lang="postcss">
  :global(html) {
    font-family: 'Courier New', Courier, monospace;
    background-color: theme(colors.stone.900);
  }
</style>
