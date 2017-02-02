<template lang="html">
  <div>
    <h1>Reaction GIF Generator</h1>
    <div class="card error-card clearfix">
      <h2>Sorry, Your Current Browser Doesn't Support Webcam Access</h2>
      <p>This is an <a href="https://github.com/aholachek/gif-search-backend">experimental web app</a> that requires 
        <a href="http://caniuse.com/#feat=stream">usage of the webcam.</a></p>
      <p>Please try using a desktop version of one of the following browsers instead:
        <br>
        <br>
        <ul class="list-unstyled lead">
          <li><i class="fa fa-chrome"></i> Chrome</li>
          <li><i class="fa fa-firefox"></i> Firefox</li>
          <li><i class="fa fa-edge"></i> Edge</li>
        </ul>
        <p class="float-md-right">
          Made by <a href="http://alex.holachek.com/" target="_blank"><img class="me-icon" src="./../assets/alex.png" alt="image of the author">&nbsp;Alex</a>.
        </p>
  </div>
</div>

</template>

<script>
export default {
}
</script>

<style scoped>

h1 {
  margin-top: 5vh;
}

.error-card {
  margin: 10vh auto;
  padding: 1rem;
  max-width: 500px;
  font-size: 1.1rem;
}

.error-card h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
</style>
