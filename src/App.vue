<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="vertical-spacer">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/Header';
import AppFooter from './components/Footer';

export default {
  name: 'app',
  created : function(){
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    this.$router.push('/unsupported-browser');
  }
  },
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>

.vertical-spacer {
  min-height: 50vh;
}
</style>
