import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './validate';

createApp(App)
  .use(router)
  .mount('#app')
