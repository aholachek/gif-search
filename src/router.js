import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage';
import MatchPage from './components/MatchPage';
import SearchPage from './components/SearchPage';
import ErrorPage from './components/ErrorPage';



const routes = [
  { path: '/', component: LandingPage },
  { path: '/search', component: SearchPage },
  { path: '/match', component: MatchPage },
  { path: '/error', component: ErrorPage },

];

export default new VueRouter({
  routes,
});
