<template>
  <div
      class="home"
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="200"
  >
    <SearchBar />
    <CharacterList :characters="search ? getCharacterBySearch : characters" />
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

import CharacterList from '@/components/CharacterList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: "CharactersList",

  components: {
    CharacterList,
    SearchBar
  },

  data() {
    return {
      isFetchingData: false,
      characters: [],
      limit: 20,
      pagination: 0
    }
  },

  computed: {
    getCharacterBySearch() {
      return this.characters.filter(character => character.name.toLowerCase().includes(this.search?.toLowerCase()))
    },

    search() {
      return this.$route.query.q
    }
  },

  methods: {
    loadMore() {
      if (!this.isFetchingData && !this.search) {
        this.isFetchingData = true

        $api.get(`/characters?offset=${this.pagination * this.limit}`).then(({ data }) => {
          this.pagination ++
          data.data.results.forEach(character => {
            if (!this.characters.find(c => c.id === character.id)) {
              this.characters.push(character)
            }
          })
        }).then(() => this.isFetchingData = false)
      }
    },
  }
}
</script>