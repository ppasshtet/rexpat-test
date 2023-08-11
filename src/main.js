import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from '@/plugins/router.js'


import '@/assets/scss/default.scss';
import 'normalize.css';

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

