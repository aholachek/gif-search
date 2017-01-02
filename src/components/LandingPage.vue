<template>
  <div>
  <div class="solid-bar solid-bar--lighter">
    <h2 class="text-centered text-muted explanation">
      Take a selfie and get a reaction GIF
    </h2>
  </div>
  <auto-carousel class="container examples">
    <div>
      <div>
        <h3>Happy</h3>
      </div>
      <div class="flex">
        <div class="card">
          <img src="./../assets/happy.png" alt="picture of a happy stick figure" class="img-fluid">
        </div>
        <div class="card">
          <iframe src="//giphy.com/embed/jp2KXzsPtoKFG" width="300" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h3>Meh</h3>
      </div>
      <div class="flex">
        <div class="card">
          <img src="./../assets/meh.png" alt="picture of a stick figure with a neutral expression" class="img-fluid">
        </div>
        <div class="card">
          <iframe src="//giphy.com/embed/UO95NWY0PmoWk" width="300" height="195" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>
      </div>
    </div>
    <div>
      <div>
        <h3>Bitch Please</h3>
      </div>
      <div class="flex">
        <div class="card">
          <img src="./../assets/bitch_please.png" alt="picture of an annoyed stick figure" class="img-fluid">
        </div>
        <div class="card">
          <iframe src="//giphy.com/embed/j0IvNX2iBd3q0" width="350" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>
      </div>
    </div>
    </auto-carousel>

    <div class="centered-btn-container">
      <router-link to="/search" class="btn btn-lg btn-primary">
        <i class="fa fa-lg fa-arrow-circle-o-right"></i>&nbsp;Click here to get started
      </router-link>
    </div>
    </div>
</template>

<script>
import AutoCarousel from './AutoCarousel.vue'

export default {
  name: 'landing-page',
  components : {
    'auto-carousel' : AutoCarousel
  }
};
</script>


<style scoped>
.examples .card {
  width: 300px;
  height: 190px;
  overflow: hidden;
}

.explanation {
  font-weight: 300;
  font-size: 1.5rem;
  padding-top: .4rem;
}

.examples h3 {
  text-align: center;
  margin: 2rem 0;
}
</style>
