<template>
  <div class="container">
    <div class="row">
      <div class="card col-3" v-for="(hero, index) in heros" :key="index">
        {{hero.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  props: {
  },
  data() {
    return({
      heros: [
        {
          name: "Thor"
        },
        {
          name: "Iron Man"
        },
        {
          name: "Hulk"
        },
        {
          name: "Lucas"
        },
        {
          name: "Yohann"
        }
      ]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
