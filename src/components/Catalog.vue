<template>
  <div class="container">
    <div
        v-if="comics"
        class="row"
    >
      <div
        class="card col-3 m-2" v-for="comic in comics"
        :key="comic.id"
      >
        <ComicCard :comic="comic" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ComicCard from "./ComicCard";

export default {
  name: 'Catalog',
  components: {ComicCard},

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    })
  }
}
</script>

