<template>
  <div id="swiper">
    <div id="container">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide games"><p>1</p></swiper-slide>
        <swiper-slide class="swiper-slide games"><p>2</p></swiper-slide>
        <swiper-slide class="swiper-slide games"><p>3</p></swiper-slide>
        <swiper-slide class="swiper-slide games"><p>4</p></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next'
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {

    },
    mounted: function () {
      console.log('mounted swiper')
    }
  }
</script>

<style type="text/scss" lang="scss">
  html {
    background: rgba(0,0,0,.5);
  }
  #swiper {
    position: relative;
    width: 100%;
    height: 500px;
    min-width: 1200px;
    background: #d3d6a2;
    #container {
      width: 60%;
      height: 300px;
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .swiper-slide {
      width: 500px;
      height: 300px;
      &:nth-child(odd) {
        background: #876843;
      }
      &:nth-child(even) {
        background: #234356;
      }
      p {
        color: #fff;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
