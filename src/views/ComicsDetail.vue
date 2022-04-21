<template>
  <div class="about d-flex flex-column align-items-center">
    <h1 class="text-center">{{comic.title}}</h1>
    <img
      class="img-thumbnail img-fluid w-25"
      :src="thumbnail"
      :alt="comic.title"
    >
    <small>Couverture de <b>{{comic.title}}</b></small>

    <ul>
      <li v-for="character in comic.characters" :key="character.name">
        {{character.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ComicsDetail',

  computed: { 
    ...mapState("comics", {
      comic: "detail"
    }),

    thumbnail() {
      return this.comic.images[0] ? `${this.comic.images[0].path}.${this.comic.images[0].extension}` : `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`
    }
  },

  data: {
    return() {

    }
  },

  created() {
    this.$store.dispatch('comics/FETCH_COMIC_DETAIL', this.$route.params.id)
  }
}
</script>
