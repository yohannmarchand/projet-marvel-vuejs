import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const infiniteScroll =  require('vue-infinite-scroll')

Vue.config.productionTip = false

Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

