import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage';
import MatchPage from './components/MatchPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/match', component: MatchPage },
  { path: '/recent', component: MatchPage },

];

export default new VueRouter({
  routes,
});
