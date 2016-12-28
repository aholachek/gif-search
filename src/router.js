import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage';
import MatchPage from './components/MatchPage';
import SearchPage from './components/SearchPage';
import ErrorPage from './components/ErrorPage';
import UnsupportedBrowserPage from './components/UnsupportedBrowserPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/search', component: SearchPage },
  { path: '/match', component: MatchPage },
  { path: '/error', component: ErrorPage },
  { path: '/unsupported-browser', component: UnsupportedBrowserPage },


];

export default new VueRouter({
  routes,
});
