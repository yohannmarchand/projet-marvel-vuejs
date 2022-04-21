<template>
  <div
    class="home"
    v-infinite-scroll="loadMore"
    infinite-scroll-distance="200"
  >
    <SearchBar />
    <Catalog :comics="search ? getComicsBySearch : comics" />
    <div v-if="isFetchingData" class="d-flex justify-content-center my-5">
      <div
        v-for="i in 3"
        :key="i"
      >
        <div class="spinner-grow text-danger mx-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { $api } from "../plugin/axios";

import Catalog from '@/components/Catalog.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'ComicsHome',

  components: {
    Catalog,
    SearchBar
  },

  data() {
    return {
      isFetchingData: false,
      comics: [],
      pagination: 0,
      limit: 20
    }
  },

  computed: {
    getComicsBySearch() {
      return this.comics.filter(comic => comic.title.toLowerCase().includes(this.search.toLowerCase()))
    },

    search() {
      return this.$route.query.q
    }
  },

  methods: {
    loadMore() {
      if (!this.isFetchingData && !this.search) {
        this.isFetchingData = true

        $api.get(`/comics?offset=${this.pagination * this.limit}`).then(({ data }) => {
          this.pagination ++
          data.data.results.forEach(comic => {
            if (!this.comics.find(c => c.id === comic.id)) {
              this.comics.push(comic)
            }
          })
        }).then(() => this.isFetchingData = false)
      }
    },
  }
}
</script>
