<template>
  <div class="d-flex">
    <input
        class="form-control"
        type="text" placeholder="Recherche..."
        v-model="value"
    >
    <button
        class="btn btn-success"
        @click="setValue"
    >
      Rechercher
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      value: this.$route.query.q
    }
  },

  methods: {
    setValue() {
      this.$router.push({ query: { q: this.value} })
    }
  }
}
</script>
