<template>
  <div class="wiper-wrapper">
    <div class="wiper">
      <button class="wiper-button wiper-button__left" @click="prevSlide" :class="{ 'is-hidden': currentIndex === 0 }">
        <img src="/img/carousel/left-arrow.svg" alt="Prev" />
      </button>

      <ul class="wiper-track" :style="{ transform: `translateX(-${currentIndex * (200)}px)` }">
        <li v-for="(slide, index) in slides" :key="index" class="wiper-item"
            :class="{ 'active-swipe': index === currentIndex }">
          <img :src="slide.image" class="wiper__image">
        </li>
      </ul>

      <button class="wiper-button wiper-button__right" @click="nextSlide" :class="{ 'is-hidden': currentIndex === slides.length - 1 }">
        <img src="/img/carousel/left-arrow.svg" alt="Next" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      itemWidth: 0,
      slides: [
        { image: '/img/carousel/1.jpg'},
        { image: '/img/carousel/2.jpg'},
        { image: '/img/carousel/3.jpg'},
        { image: '/img/carousel/4.jpg'},
        { image: '/img/carousel/5.jpg'},
        { image: '/img/carousel/6.jpg'},
      ]
    };
  },
  mounted() {
    this.itemWidth = this.$refs.wiperItem.$el.getBoundingClientRect().width;
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  }
};
</script>