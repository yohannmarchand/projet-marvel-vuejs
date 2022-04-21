<template>
  <div
      class="home"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="isFetchingData"
      infinite-scroll-distance="200"
  >
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

  data() {
    return {
      isFetchingData: false
    }
  },

  methods: {
    loadMore() {
      if (!this.isFetchingData) {
        this.isFetchingData = true
        this.$store.dispatch('comics/FETCH_NEXT_PAGE')

        setTimeout(() => {
          this.isFetchingData = false
        }, 2000)
      }
    }
  }
}
</script>
