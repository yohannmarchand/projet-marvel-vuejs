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
        <ComicCard :comic="comic" />
      </div>
    </div>
  </div>
</template>

<script>
import ComicCard from "./ComicCard";

export default {
  name: 'Catalog',
  components: {ComicCard},

  props: {
    comics: Array
  }

  
}
</script>

