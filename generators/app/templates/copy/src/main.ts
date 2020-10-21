import Vue from 'vue'
import App from './App.vue'
import router from './router'
import repo from "./repo"

Vue.prototype.$repo = repo;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
