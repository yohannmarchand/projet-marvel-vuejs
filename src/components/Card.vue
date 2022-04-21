<template>
  <div class="card">
    <RouterLink :to="`/${this.comic ? 'comic' : 'character'}/${resource.id}`">
      <div>
        <img
          class="img-fluid"
          :src="thumbnail"
          :alt="resource.title"
        >
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    comic: Object,
    character: Object,
  },

  computed: {
    resource() {
      return this.character || this.comic
    },

    thumbnail() {
      return this.resource.images?.length ? `${this.resource.images[0].path}.${this.resource.images[0].extension}` : `${this.resource.thumbnail.path}.${this.resource.thumbnail.extension}`
    }
  }
}
</script>