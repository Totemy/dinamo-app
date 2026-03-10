<template>
  <div class="wiper-wrapper">
    <div class="wiper">
      <button class="wiper-button wiper-button__left" @click="prevSlide">
        <img src="/img/carousel/left-arrow.svg" alt="Prev" />
      </button>

      <div class="wiper__viewport">
        <ul class="wiper__track" :style="trackStyle" @transitionend="onTransitionEnd">
          <li
            v-for="(slide, index) in extendedSlides"
            :key="index"
            class="wiper__item"
            :class="{ 'active-swipe': index === currentIndex + 1 }"
          >
            <img :src="slide.image" class="wiper__image" alt="slide image" />
            <p class="wiper__text">{{ slide.text }}</p>
            <div v-if="index !== currentIndex + 1" class="overlay"></div>
            <button
              v-if="index === currentIndex + 1"
              class="btn btn__open-menu"
              @click="openMenu()"
            >
              Open menu
            </button>
          </li>
        </ul>
      </div>

      <button class="wiper-button wiper-button__right" @click="nextSlide">
        <img src="/img/carousel/left-arrow.svg" alt="Next" />
      </button>
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'

export default {
  data() {
    return {
      currentIndex: 0,
      isTransitioning: false,
      itemWidth: 293,
      gap: 5,
      slides: [
        { image: '/img/carousel/1.webp', text: 'Salads' },
        { image: '/img/carousel/2.webp', text: 'Baking' },
        { image: '/img/carousel/3.webp', text: 'Soups' },
        { image: '/img/carousel/4.webp', text: 'Grilled dishes' },
        { image: '/img/carousel/5.webp', text: 'Hot dishes' },
        { image: '/img/carousel/6.webp', text: 'Sauces' }
      ]
    }
  },
  computed: {
    // clone first and last image for circle carousel
    extendedSlides() {
      return [this.slides[this.slides.length - 1], ...this.slides, this.slides[0]]
    },
    step() {
      return this.itemWidth + this.gap
    },
    trackStyle() {
      const offset = (this.currentIndex + 1) * this.step
      return {
        transform: `translateX(calc(-${offset}px + 38%))`,
        transition: this.isTransitioning ? 'none' : 'transform 0.4s ease-in-out'
      }
    }
  },
  methods: {
    nextSlide() {
      if (this.isTransitioning) return
      this.currentIndex++
    },
    prevSlide() {
      if (this.isTransitioning) return
      this.currentIndex--
    },
    onTransitionEnd() {
      // Якщо дійшли до клону — стрибаємо без анімації
      if (this.currentIndex >= this.slides.length) {
        this.isTransitioning = true
        this.currentIndex = 0
        this.$nextTick(() => {
          setTimeout(() => {
            this.isTransitioning = false
          }, 50)
        })
      } else if (this.currentIndex < 0) {
        this.isTransitioning = true
        this.currentIndex = this.slides.length - 1
        this.$nextTick(() => {
          setTimeout(() => {
            this.isTransitioning = false
          }, 50)
        })
      }
    },
    openMenu() {
      router.push('/menu')
    }
  }
}
</script>
