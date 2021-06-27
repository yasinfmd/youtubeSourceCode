import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '511458277120-n71rb8if053ge87h4vi29lksdkhm56or.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

new Vue({
  render: h => h(App),
}).$mount('#app')
