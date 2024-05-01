<template>
  <div class="slider">
    <div class="slides">
      <img v-for="(image, index) in images" :key="index" :src="'/img/galery/' + image.url + '.jpg'" :class="{ active: index === currentIndex }">
    </div>
    <div class="slider-points">
      <span v-for="(image, index) in images" :key="index" @click="changeSlide(index)" :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: 'gal1' },
        { url: 'gal2' },
        { url: 'gal3' },
        { url: 'gal4' },
        { url: 'gal5' },
        { url: 'gal6' },
        { url: 'gal7' },
        { url: 'gal8' },

      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopSlideShow() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    changeSlide(index) {
      this.currentIndex = index;
      this.stopSlideShow();
      this.startSlideShow();
    }
  }
};
</script>