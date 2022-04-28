<template>
  <nav
      class="d-flex bg-dark text-light fixed-top py-2 px-3"
      style="transition: top .25s ease-in"
  >
    <span class="fw-bold">MARVEL</span>
    <div class="d-flex ms-5">
      <div
          v-for="{ name, link } in links"
          :key="name"
      >
        <router-link
            class="text-white mx-2 text-decoration-none"
            :to="link"
        >
          {{ name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Comics', link: '/' },
        { name: 'Character', link: '/characters' },
      ],
      lastScroll: 0,
      limit: 500
    }
  },

  created() {
    document.addEventListener('scroll', () => {
      if (this.lastScroll > window.scrollY) {
        this.$el.style.top = 0
      } else {
        if (window.scrollY > this.limit) {
          this.$el.style.top = '-40px'
        }
      }

      this.lastScroll = window.scrollY
    })
  }
}
</script>