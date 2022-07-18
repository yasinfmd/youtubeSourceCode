<script>

import SlotComponent from "./SlotComponent.svelte";
</script>
<main>
  <SlotComponent>
    <div slot="header">Bu Başlık Slottan Geliyor</div>
    <h3>Hello World</h3>
    <p>Selam</p>
  </SlotComponent>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


</style>
