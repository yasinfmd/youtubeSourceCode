import Vue from 'vue'
import App from './App.vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
