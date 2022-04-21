import Vue from 'vue'
import App from './App.vue'
import router from './router'

const infiniteScroll =  require('vue-infinite-scroll')

Vue.config.productionTip = false

Vue.use(infiniteScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

