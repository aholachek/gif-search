<template lang="html">
  <div class="card error-card">
    <h2>Sorry, Your Current Browser Doesn't Support Webcam Access</h2>
    <p>This is an experimental app that requires usage of the webcam.</p>
    <p>Please try using a <b>desktop version</b> of one of the following browsers instead:
      <br>
      <br>
      <ul class="list-unstyled">
        <li><i class="fa fa-chrome"></i> Chrome</li>
        <li><i class="fa fa-firefox"></i> Firefox</li>
        <li><i class="fa fa-edge"></i> Edge</li>
      </ul>
</div>


</template>

<script>
export default {
}
</script>

<style scoped>

.error-card {
  margin: 4rem auto;
  padding: 1rem;
  max-width: 500px;
  font-size: 1.1rem;
}

.error-card h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
</style>
