import Vue from 'vue';
import VueRouter from 'vue-router';
import AppRouter from './router';
import App from './App';

Vue.use(VueRouter);

require('./scss/manifest.scss');

const app = new Vue({
  router : AppRouter,
  render: createEl => createEl(App)
}).$mount('#app');
