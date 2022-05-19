
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'


import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Oruga)
    .mount('#app')
