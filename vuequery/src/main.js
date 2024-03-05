import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from 'vue-query';

createApp(App).use(VueQueryPlugin,{
}).mount('#app')
