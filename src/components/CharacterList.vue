<template>
  <div class="container">
    <div
        v-if="characters"
        class="row"
    >
      <div
          class="col-3 m-2" v-for="character in characters"
          :key="character.id"
      >
        <Card :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: 'Catalog',
  components: {Card},

  props: {
    characters: Array,
  }


}
</script>

