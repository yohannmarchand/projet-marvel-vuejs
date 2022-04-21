<template>
  <div class="about d-flex flex-column align-items-center">
    <h1 class="text-center">{{character.name}}</h1>
    <img
      class="img-thumbnail img-fluid w-25"
      :src="characterThumbnail"
      :alt="character.name"
    >
    <small>Couverture de <b>{{character.name}}</b></small>

    <h2 class="mt-5 mb-3">Comics :</h2>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="comic in comics" :key="comic.title">
          <RouterLink :to="`/comic/${comic.id}`">
		      <img
        		class="img-thumbnail img-fluid"
        		:src="comicThumbnail(comic)"
        		:alt="comic.name"
    	    >
          {{comic.title}}
          </RouterLink>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { $api } from "../plugin/axios";

export default {
  name: 'CharactersDetail',

  computed: { 
    characterThumbnail() {
      return this.character.id ? `${this.character.thumbnail.path}.${this.character.thumbnail.extension}` : '';
    },
  },

  methods: {
	comicThumbnail(comic) {
      return comic ? comic.images[0] ? `${comic.images[0].path}.${comic.images[0].extension}` : `${comic.thumbnail.path}.${comic.thumbnail.extension}` : '';
    },
  },

  data() {
    return {
      character: {},
      comics: []
    }
  },

  created() {
    $api.get(`/characters/${this.$route.params.id}`).then(({ data }) => {
      this.character = data.data.results[0];
    }).then(() => {
      $api.get(`/characters/${this.$route.params.id}/comics`).then(({data}) => {
        this.comics = data.data.results;
      })
    })
  }
}
</script>
