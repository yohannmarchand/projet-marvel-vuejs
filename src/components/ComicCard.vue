<template>
  <div class="card">
    <RouterLink :to="`/comic/${comic.id}`">
      <div>
        <img
          class="img-fluid"
          :src="thumbnail"
          :alt="comic.title"
        >
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    comic: Object
  },

  computed: {
    thumbnail() {
      return this.comic.images[0] ? `${this.comic.images[0].path}.${this.comic.images[0].extension}` : `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`
    }
  }
}
</script>