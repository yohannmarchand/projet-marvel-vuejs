<template>
  <div id="app" class="container">
    <NavBar/>
    <div class="pt-5">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";

export default {
  components: { NavBar }
}
</script>