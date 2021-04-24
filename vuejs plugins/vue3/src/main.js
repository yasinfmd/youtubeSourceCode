import { createApp } from 'vue'
import App from './App.vue'
import CustomLogPlugin from './plugins/plugin'
const app=createApp(App)
app.use(CustomLogPlugin,{custom:true , lang:'tr', en:{title:'Titleeee'},tr:{title:'Başlık'}})
app.mount('#app')
