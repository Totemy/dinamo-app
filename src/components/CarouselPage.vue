<template>
  <div class="wiper-wrapper">
    <div class="wiper">
      <button class="wiper-button wiper-button__left" type="button" @click="go(-1)">
        <img src="/img/carousel/left-arrow.svg" alt="Previous category" />
      </button>

      <div class="wiper__viewport">
        <ul class="wiper__track" :style="trackStyle" @transitionend.self="snapToRealSlide">
          <li
            v-for="(slide, index) in loopedSlides"
            :key="index"
            class="wiper__item"
            :class="{ 'active-swipe': isActive(index) }"
          >
            <img :src="slide.image" class="wiper__image" alt="" role="presentation" />
            <p class="wiper__text">{{ slide.text }}</p>
            <button
              v-if="isActive(index)"
              class="btn btn__open-menu"
              type="button"
              @click="$router.push('/menu')"
            >
              Open menu
            </button>
          </li>
        </ul>
      </div>

      <button class="wiper-button wiper-button__right" type="button" @click="go(1)">
        <img src="/img/carousel/left-arrow.svg" alt="Next category" />
      </button>
    </div>
  </div>
</template>

<script>
import { menuCategories } from '@/services/content'

const ITEM_WIDTH = 293
const GAP = 5
const VIEWPORT_OFFSET = '38%' // shifts the track so the active card sits centred

export default {
  data: () => ({
    slides: menuCategories,
    currentIndex: 0,
    isSnapping: false
  }),
  computed: {
    // The last and first slides are cloned on both ends so the loop never shows a gap.
    loopedSlides() {
      return [this.slides.at(-1), ...this.slides, this.slides[0]]
    },
    trackStyle() {
      const offset = (this.currentIndex + 1) * (ITEM_WIDTH + GAP)
      return {
        transform: `translateX(calc(-${offset}px + ${VIEWPORT_OFFSET}))`,
        transition: this.isSnapping ? 'none' : 'transform 0.4s ease-in-out'
      }
    }
  },
  methods: {
    isActive(index) {
      return index === this.currentIndex + 1
    },
    go(direction) {
      if (this.isSnapping) return
      this.currentIndex += direction
    },
    snapToRealSlide(event) {
      if (event.propertyName !== 'transform') return

      const { length } = this.slides
      if (this.currentIndex >= 0 && this.currentIndex < length) return

      this.isSnapping = true
      this.currentIndex = this.currentIndex < 0 ? length - 1 : 0
      this.restoreTransition()
    },
    // The rewind must be painted before transitions come back, or it animates
    // backwards. The timeout covers background tabs, where rAF is paused.
    restoreTransition() {
      const restore = () => (this.isSnapping = false)
      requestAnimationFrame(restore)
      setTimeout(restore, 150)
    }
  }
}
</script>
