<template>
  <div class="container">
    <div
        v-if="comics"
        class="row"
    >
      <div
        class="col-3 m-2" v-for="comic in comics"
        :key="comic.id"
      >
        <Card :comic="comic" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: 'Catalog',
  components: {Card},

  props: {
    comics: Array,
  }

  
}
</script>

