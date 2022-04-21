<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters, mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  created() {
    this.$store.dispatch('comics/FETCH_COMICS')
  },

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    }),

    ...mapGetters("comics", {
      getComicsBySearch: 'GET_COMICS_BY_SEARCH'
    }),

    test() {
      return this.getComicsBySearch('Ant-Man')
    }
  }
}
</script>
