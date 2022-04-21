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
        {{ comic.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Catalog',

  data() {
    return({
      heros: [
        { name: "Thor" },
        { name: "Iron Man" },
        { name: "Hulk" },
        { name: "Lucas" },
        { name: "Yohann" }
      ]
    })
  },

  computed: {
    ...mapState('comics', {
      comics: 'comics'
    })
  }
}
</script>

