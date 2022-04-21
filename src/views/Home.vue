<template>
  <div class="home">
    <SearchBar />
    <Catalog />
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Home',

  components: {
    Catalog,
    SearchBar
  },

  created() {
    this.$store.dispatch('comics/FETCH_COMICS')
  }
}
</script>
