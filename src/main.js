import './assets/main.css'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Import Bootstrap JS for interactive components (e.g., tooltips, popovers)
import 'bootstrap';


import { createApp } from 'vue' // basically importing a library, as a named export, this is actually a function 
import App from './App.vue'
import { createRouter, createWebHistory }
    from 'vue-router';
import routes from './router/routes';
import './assets/main.css'
let router = createRouter({
    history: createWebHistory(),
    routes: routes // you can see that the routes are imported and passed into the the vue-router
});
const app = createApp(App)
app.use(router);
app.mount('#app');
//createApp(App).mount('#app');
