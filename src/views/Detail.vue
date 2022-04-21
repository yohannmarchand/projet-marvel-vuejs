<template>
  <div class="about">
    <h1>{{this.$route.params.id}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',

  computed: mapState("comics", {
    comic: "detail"
  }),

  created() {
    this.$store.dispatch('comics/FETCH_COMIC_DETAIL', this.$route.params.id)
  }
}
</script>
