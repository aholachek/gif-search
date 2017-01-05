<template>
  <div>
    <app-header></app-header>
    <div>
      <div class="flex result-header">
        <div style="align-items:flex-end">
          <h1><div class="font-weight-light regular-text">your emotion:</div>"{{emotion}}"</h1>
        </div>
        <div class="screenshot-container" style="align-items:flex-start">
          <img v-bind:src="screenshot" alt="screenshot" class="screenshot img-circle" />
        </div>
      </div>
      <div class="flex gif-card">
        <div style="align-items:flex-end" class="hidden-sm-down">
          <button class="btn btn-primary" @click="prevIndex">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            prev
          </button>
        </div>
        <div style="margin:0 2rem">
          <iframe v-bind:src="gifURL" height="300" width="400" frameBorder="0" class="giphy-embed" allowFullScreen/>
        </div>
        <div style="align-items:flex-end" class="hidden-sm-up">
          <button class="btn btn-primary" @click="prevIndex">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            prev
          </button>
        </div>
        <div style="align-items:flex-start">
          <button class="btn btn-primary" @click="nextIndex" >
            next <i class="fa fa-arrow-right"></i>

          </button>
        </div>
      </div>
      <div class="centered-btn-container">
        <router-link to="/search" class="btn btn-lg btn-primary">
          <i class="fa fa-arrow-circle-o-left fa-lg"></i>&nbsp;Try again with another selfie
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>

import appData from './../appData';
import _ from 'lodash';
import AppHeader from './Header';

export default {
  name: 'match-page',
  created () {
    if (!appData.gifList){
      this.$router.replace('/');
      return
    }

    this.$data.gifList = appData.gifList;
    this.$data.screenshot = appData.screenshot;
    this.$data.emotion = appData.emotion;
    this.$data.gifIndex = _.random(appData.gifList.length - 1);
  },
  data : function(){
    return {
      gifList : undefined,
      gifIndex : 0,
      screenshot : undefined,
      emotion : undefined
    }
  },
  computed : {
    gifURL : function() {
      return this.$data.gifList[this.$data.gifIndex].embed_url.replace('http', 'https');
    }
  },
  components : {
    'app-header' : AppHeader
  },
  methods : {
    nextIndex : function(){
      this.$data.gifIndex = this.$data.gifIndex === this.$data.gifList.length -1 ?
      0 : this.$data.gifIndex + 1;
    },
    prevIndex : function(){
      this.$data.gifIndex = this.$data.gifIndex === 0 ?
      this.$data.gifList.length -1  : this.$data.gifIndex - 1;
    }
  }
};
</script>

<style media="screen">
h1 {
  text-align: center;
  font-size: 1.8rem;
  margin: .5rem 0 .2rem 0;
}

.screenshot {
  height: 150px;
  width: auto;
  margin: 0 1rem;
}

.result-header {
  margin: 1rem 0 2rem 0;
}

.gif-card{
  margin:auto;
}

</style>
