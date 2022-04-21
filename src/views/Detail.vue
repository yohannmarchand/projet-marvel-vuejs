<template>
  <div class="about">
    <h1>{{comic.title}}</h1>
    <img
      class="img-fluid img-thumbnail"
      :src="thumbnail"
      :alt="comic.title"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',

  computed: { 
    ...mapState("comics", {
      comic: "detail"
    }),

    thumbnail() {
      return this.comic.images[0] ? `${this.comic.images[0].path}.${this.comic.images[0].extension}` : `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`
    }
  },

  created() {
    this.$store.dispatch('comics/FETCH_COMIC_DETAIL', this.$route.params.id)
  }
}
</script>
