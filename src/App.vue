<template>
  <div id="app">
    <AppHeader></AppHeader>
      <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/Header';
import AppFooter from './components/Footer';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
