<template>
  <header>
    <div class="container">
      <router-link to="/">
      <h1>Reaction GIF Generator</h1>
    </router-link>
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

.large-text {
  font-size: 2rem;
}

.examples {
  margin: 2rem 0;
}

</style>
