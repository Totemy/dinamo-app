<template>
  <div class="mobile-carousel">
    <div v-for="(slide, index) in slides" :key="index" class="mobile-carousel__item">
      <img class="mobile-carousel__image" :src="slide.image" alt="slide image" />
      <div class="mobile-carousel__overlay"></div>
      <p class="mobile-carousel__text">{{ slide.text }}</p>
      <button class="btn btn__open-menu" @click="openMenu()">Open menu</button>
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'

export default {
  data() {
    return {
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
  methods: {
    openMenu() {
      router.push('/menu')
    }
  }
}
</script>
