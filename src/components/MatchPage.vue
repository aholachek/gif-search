<template>
  <div>
    <div class="flex result-header">
      <div style="align-items:flex-end">
        <h1><div class="font-weight-light regular-text">your emotion:</div>"{{emotion}}"</h1>
      </div>
      <div class="screenshot-container" style="align-items:flex-start">
        <img v-bind:src="screenshot" alt="screenshot" class="screenshot img-circle" />
      </div>
    </div>
    <div class="flex">
      <div style="align-items:flex-end">
        <button class="btn btn-primary" @click="prevIndex">
          <i class="fa fa-arrow-left" aria-label="next"></i>
        </button>
      </div>
      <div style="margin:0  2rem">
        <iframe v-bind:src="gif.embed_url" height="300" width="400" frameBorder="0" class="giphy-embed" allowFullScreen/>
      </div>
      <div style="align-items:flex-start">
        <button class="btn btn-primary" @click="nextIndex" aria-label="prev">
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import Router from './../router';
import appData from './../appData';
import _ from 'lodash';

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
    gif : function(){
      return this.$data.gifList[this.$data.gifIndex];
    }
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
  margin-bottom: 2rem;
}

.button-container {
  margin: 2rem 0 3rem 0;
}



</style>
