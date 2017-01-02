<template lang="html">
  <div class="carousel card" ref="carousel">
    <slot></slot>
  </div>
</template>

<script>

let stopId;

export default {

  mounted : function(){
    const slides = [].slice.apply(this.$refs.carousel.children);

    slides
    .forEach(function(d){
      d.classList.add('carousel__slide');
    });

    let current = 0;
    let interval = 3000;

    function showSlide(){
      slides.forEach((s)=>{s.classList.remove('carousel__slide--visible')});
      slides[current].classList.add('carousel__slide--visible');
      current = current === slides.length -1 ? 0 : current +=1;
    }

    showSlide();
    stopId = setInterval(showSlide, interval);

  },

  beforeDestroy (){
    clearInterval(stopId);
  }

}
</script>

<style scoped>

.carousel {
  position : relative;
  height: 335px;
  margin: 4rem auto 0 auto;
  width: 800px;
  background: white;
}
.carousel__slide {
  transition: opacity .5s;
  opacity: 0;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
}

.carousel__slide--visible {
  opacity: 1;
}

</style>
