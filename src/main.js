import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "bootstrap/scss/bootstrap.scss";
import "bootstrap";
import i18n from "@/plugins/i18n";
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(i18n).mount('#app');
