<template lang="html">
  <footer>
      <div class="container-fluid">
      <div class="row">
        <div class="col col-md-6">
        <div>
        An <a href="https://github.com/aholachek/gif-search-backend" target="_blank">experimental app</a>
        made by <a href="http://alex.holachek.com/" target="_blank"><img class="me-icon" src="./../assets/alex.png" alt="image of the author">&nbsp;Alex</a>.
      </div>
      <div>
      </div>
      </div>
      <div class="col col-md-6 by-link">
        <div class="float-md-right">
            <a href="https://giphy.com/">
              <img src="./../assets/poweredby.png" alt="powered by giphy">
            </a>
             and
           <a href="https://www.microsoft.com/cognitive-services/en-us/emotion-api" target="_blank">the Microsoft Emotion API</a>
        </div>
      </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {}
</script>

<style>

.me-icon {
  max-width: 30px;
  height: auto;
}

.container-fluid {
  max-width: 1200px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
