<template>
  <div class="about d-flex flex-column align-items-center">
    <h1 class="text-center">{{comic.title}}</h1>
    <img
      class="img-thumbnail img-fluid w-25"
      :src="comicThumbnail"
      :alt="comic.title"
    >
    <small>Couverture de <b>{{comic.title}}</b></small>

    <h2 class="mt-5 mb-3">Caractères :</h2>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="character in characters" :key="character.name">
          <RouterLink :to="`/comic/${comic.id}`">
		      <img
        		class="img-thumbnail img-fluid"
        		:src="characterThumbnail(character)"
        		:alt="character.name"
    	    >
          {{character.name}}
          </RouterLink>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { $api } from "../plugin/axios";

export default {
  name: 'ComicsDetail',

  computed: { 
    comicThumbnail() {
      return this.comic ? this.comic.images[0] ? `${this.comic.images[0].path}.${this.comic.images[0].extension}` : `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}` : '';
    },
  },

  methods: {
	characterThumbnail(character) {
      return character ? `${character.thumbnail.path}.${character.thumbnail.extension}` : '';
    },
  },

  data() {
    return {
      comic: {},
      characters: []
    }
  },

  created() {
    $api.get(`/comics/${this.$route.params.id}`).then(({ data }) => {
      this.comic = data.data.results[0];
    }).then(() => {
      	$api.get(`/comics/${this.$route.params.id}/characters`)
      	.then(({ data }) => {  
			this.characters = data.data.results;
		})
	})
  }
}
</script>
