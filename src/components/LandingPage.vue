<template>
<div class="container-fluid">
  <div class="">
  <search></search>
</div>
</template>

<script>
import search from './Search';

export default {
  name: 'landing-page',
  components : {
    search : search
  }
};
</script>
