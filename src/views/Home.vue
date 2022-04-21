<template>
  <div
      class="home"
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="200"
  >
    <SearchBar />
    <Catalog :comics="search ? getComicsBySearch(search) : comics" />

    <div
      v-if="isFetchingData"
      class="d-flex justify-content-center my-5"
    >
      <div
        v-for="i in 3"
        :key="i"
        class="spinner-grow text-danger mx-2"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import Catalog from '../components/Catalog'
import SearchBar from '../components/SearchBar'

export default {
  name: 'Home',

  components: {
    Catalog,
    SearchBar
  },

  data() {
    return {
      isFetchingData: false,
    }
  },

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    }),

    ...mapGetters('comics',{
      getComicsBySearch: 'GET_COMICS_BY_SEARCH'
    }),

    search() {
      return this.$route.query.q
    }
  },

  methods: {
    loadMore() {
      if (!this.isFetchingData || !this.search) {
        this.isFetchingData = true
        this.$store.dispatch('comics/FETCH_NEXT_PAGE')

        setTimeout(() => {
          this.isFetchingData = false
        }, 2000)
      }
    },
  }
}
</script>
