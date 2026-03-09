<template>
  <div class="mobile-carousel">
    <div v-for="(slide, index) in slides" :key="index" class="mobile-carousel__item">
      <img class="mobile-carousel__image" :src="slide.image" :alt="slide.text" />
      <div class="mobile-carousel__overlay"></div>
      <p class="mobile-carousel__text">{{ slide.text }}</p>
      <button class="btn btn__open-menu" @click="openMenu()">Открыть меню</button>
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'

export default {
  data() {
    return {
      slides: [
        { image: '/img/carousel/1.jpg', text: 'Салаты' },
        { image: '/img/carousel/2.jpg', text: 'Выпечка' },
        { image: '/img/carousel/3.jpg', text: 'Супы' },
        { image: '/img/carousel/4.jpg', text: 'Блюда на мангале' },
        { image: '/img/carousel/5.jpg', text: 'Горячие блюда' },
        { image: '/img/carousel/6.jpg', text: 'Соусы' }
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
