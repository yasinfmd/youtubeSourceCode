import Vue from 'vue'
import App from './App.vue'
import Vuealidate from 'vuelidate'
Vue.use(Vuealidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
