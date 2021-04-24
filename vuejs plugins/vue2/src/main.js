import Vue from 'vue'
import App from './App.vue'
import {LogPlugin} from "@/plugins/plugin";

Vue.config.productionTip = false
Vue.use(LogPlugin,{
  lang:'tr',
  en:{
    title:'Title',
    hi:'Hello'
  },
  tr:{
    title:'Başlık',
    hi:'Selamlar :)'
  },
  customOption:true
})
new Vue({
  render: h => h(App),
}).$mount('#app')
