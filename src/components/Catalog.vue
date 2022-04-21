<template>
  <div class="container">
    <div
        v-if="comics"
        class="row"
    >
      <div
        class="card col-3" v-for="comic in comics"
        :key="comic.id"
      >
        <router-link :to="{ name: 'Detail', params: {id: comic.id} }">{{ comic.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Catalog',

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    })
  }
}
</script>

