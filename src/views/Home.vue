<template>
  <div class="home">
    <SearchBar />
    <Catalog />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Catalog from '@/components/Catalog.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Home',

  components: {
    Catalog,
    SearchBar
  },

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    })
  },

  created() {
    if(this.comics.length == 0) {
      this.$store.dispatch('comics/FETCH_COMICS')
    }
  }
}
</script>
