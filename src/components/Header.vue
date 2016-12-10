<template>
  <header>
    <div class="container">
      <router-link to="/">
        <img src="./../assets/face.gif" alt="gif of a rotating face" class="gif" />
        Reaction Gif Interpreter
      </router-link>
      <p class="float-md-right" style="padding-top: 1.5rem;font-size:1.1rem">
         Take a selfie to find relevant reaction gifs.
       </p>

    </div>
  </header>
</template>

<script>

export default {
  name: 'app-header',
  methods : {
    greet : function(e){
      this.$data.els.push({name: 'hello' + this.$data.els.length })
    }
  },
  data :function(){
    return {
      els : []
    }
  }
};
</script>

<style>

.gif {
  max-width: 60px;
  height: auto;
}
header {
  margin-bottom: 2rem;
}
</style>
