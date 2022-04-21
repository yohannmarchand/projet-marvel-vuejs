<template>
  <div>
    <div
      v-if="comics"
      class="row"
    >
      <div
        v-for="comic in comics"
        :key="comic.id"
        class="card col-3 m-2"
      >
        <ComicCard :comic="comic" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ComicCard from "./ComicCard";

export default {
  name: 'Catalog',
  components: { ComicCard },

  props: {
    comics: Array
  }
}
</script>

