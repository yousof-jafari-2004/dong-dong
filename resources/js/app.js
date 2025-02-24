import './bootstrap';
// import './../css/app.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App)
    .use(router)
    .use(store)
    .use(Toast)
    .mount('#app');