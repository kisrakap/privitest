import { createApp } from 'vue'
// import Vue from 'vue'÷
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VOtpInput from "vue3-otp-input";

// Vue.config.productionTip = false

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('v-otp-input', VOtpInput)
  .mount('#app')