<template>
<div class="container-fluid">
    <h2 class="text-centered">Take a Selfie <i class="fa fa-arrow-right"></i> Get a Reaction GIF</h2>
    <div class="examples">
      <div>
        <h3>Happy</h3>
      </div>
      <div class="flex">
        <div class="card">
          <img src="./../assets/happy.png" alt="picture of a happy stick figure" class="img-fluid">
        </div>
        <div class="card">
          <iframe src="//giphy.com/embed/VPMlySiNPMZck?html5=true" width="360" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      </div>
      <div>
        <h3>Meh</h3>
      </div>
      <div class="flex">
        <div class="card">
          <img src="./../assets/meh.png" alt="picture of a happy stick figure" class="img-fluid">
        </div>
        <div class="card">
<iframe src="//giphy.com/embed/UO95NWY0PmoWk" width="300" height="195" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>
      </div>
      <div>
        <h3>Bitch Please</h3>
      </div>
      <div class="flex">
        <div class="card">
          <img src="./../assets/bitch_please.png" alt="picture of a happy stick figure" class="img-fluid">
        </div>
        <div class="card">
          <iframe src="//giphy.com/embed/j0IvNX2iBd3q0" width="350" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>
      </div>
      <h3>etc...</h3>

    </div>



    <div class="centered-btn-container">
      <router-link to="/search" class="btn btn-lg btn-primary">
        Generate a GIF from your expression
      </router-link>
    </div>
</template>

<script>

export default {
  name: 'landing-page'
};
</script>


<style>
.examples .card {
  width: 300px;
  height: 190px;
  overflow:hidden;
}


.examples h3 {
  text-align: center;
  margin: 2rem 0;
}
</style>
