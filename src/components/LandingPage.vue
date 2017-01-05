<template>
    <div class="text-centered landing-page-text">
      <app-header></app-header>
      <h2>
        Take a selfie and get a reaction GIF
      </h2>
      <router-link to="/search" class="btn btn-lg btn-primary">
        <i class="fa fa-lg fa-arrow-circle-o-right"></i>&nbsp;Click here to get started
      </router-link>
  </div>
</template>

<script>

import AppHeader from './Header';

var gifInterval;
var classes = ['meh', 'happy', 'bitch-please', 'smug'];
var body = document.querySelector('body');


export default {
  name: 'landing-page',
  mounted : function(){
    var index = 0;
    function addClassToBody(){
      body.classList.remove.apply(body.classList, classes);
      body.classList.add(classes[index]);
      index = index === classes.length -1 ? 0 : index + 1;
    }
    gifInterval = setInterval(addClassToBody, 6000);
    addClassToBody();
  },
  beforeDestroy : function(){
    body.classList.remove.apply(body.classList, classes)
    clearInterval(gifInterval);
  },
  components : {
    'app-header' : AppHeader
  },
};
</script>
