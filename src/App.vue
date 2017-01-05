<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from './components/Footer';

export default {
  name: 'app',
  created : function(){
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    this.$router.push('/unsupported-browser');
  }
  },
  components: {
    AppFooter
  }
};
</script>

<style>

html,body {
  height: 100%;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}

</style>
