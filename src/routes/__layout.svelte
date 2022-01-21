<script context="module">
  import 'carbon-components-svelte/css/g10.css';
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  $background: #000;

  main {
    font-family: 'IBM Plex Sans', sans-serif;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>
