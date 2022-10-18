// Import all the Functions used adminView,loginUser,userView
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from "vue"
import VueCookie from 'vue-cookie'

createApp(App, Vue).use(router, VueCookie).mount('#app')
