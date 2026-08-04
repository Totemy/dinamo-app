<template>
  <div class="slider">
    <div class="slider__slides">
      <img
        v-for="(image, index) in images"
        :key="image.src"
        class="slider__slide"
        :class="{ 'is-active': index === currentIndex }"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
    <div class="slider__points">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        class="slider__point"
        :class="{ 'is-active': index === currentIndex }"
        type="button"
        :aria-label="`Go to slide ${index + 1}`"
        @click="goTo(index)"
      ></button>
    </div>
  </div>
</template>

<script>
import { galleryImages } from '@/services/content'

const SLIDE_DURATION = 3000

export default {
  data: () => ({ images: galleryImages, currentIndex: 0, timerId: null }),
  mounted() {
    this.start()
  },
  beforeUnmount() {
    this.stop()
  },
  methods: {
    start() {
      this.timerId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }, SLIDE_DURATION)
    },
    stop() {
      clearInterval(this.timerId)
    },
    goTo(index) {
      this.currentIndex = index
      this.stop()
      this.start()
    }
  }
}
</script>
