<template>
<div class="my-camera-container card">
  <div class="my-camera"></div>
  <button v-if="loading" type="button" class="btn btn-lg btn-primary submit-btn">
    <i class="fa fa-spinner fa-pulse fa-fw"></i>
      analyzing expression...
    </button>
  <button v-else type="button" class="btn btn-lg btn-primary submit-btn" @click="submitPic">
          <i class="fa fa-camera"></i>&nbsp;submit my current expression
        </button>
  <div class="">
    <p>
      <ul class="instructions">
        <span class="attention-font">Tips</span>
        <li> Make sure your face is well lit and in center of frame.</li>
        <li> Take off glasses or anything that hides your face.</li>
        <li> Try a slightly exaggerated expression. </li>
      </ul>
    </p>
  </div>
</div>
</template>

<script>
import Webcam from 'webcamjs';
import appData from './../appData';
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'search',
  mounted() {
    Webcam.attach('.my-camera');
    Webcam.on('error', function(error){
      console.log('oh god an error');
    });

  },
  data: function() {
    return {
      loading: false
    }
  },
  methods: {
    submitPic: function() {
      var that = this;
      Webcam.snap(function(data_uri) {

        that.$data.loading = true;
        axios.post('https://reaction-gif.herokuapp.com/', {
          data: data_uri
        }).then(function(response) {
          appData.gifList = response.data.gifList;
          appData.emotion = response.data.emotion;
          appData.screenshot = data_uri;
          that.$router.push('/match');
          //reset webcam object
          Webcam.preview_active = false;
        })
        .catch(function(response){
          that.$router.push('/error');
          //reset webcam object
          Webcam.preview_active = false;
        });
      });
    }
  }
};
</script>


<style media="screen">
.my-camera-container {
  width: 500px;
  margin: 2rem auto;
  padding-top: 2rem;
}

.my-camera {
  width: 500px;
  height: 300px;
}

.instructions {
  list-style: none;
  margin-left: .6rem;
}

.submit-btn {
  margin: 1rem auto 3rem auto;;
  width: 80%;
  display: block !important;
}
</style>
