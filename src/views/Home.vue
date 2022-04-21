<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  created() {
    this.$store.dispatch('comics/FETCH_COMICS').then(() => {
      this.$store.dispatch('comics/FETCH_NEXT_PAGE')
    })
  },

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    }),
  }
}
</script>
