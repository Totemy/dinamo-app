<template>
  <div class="wiper-wrapper">
    <div class="wiper">
      <button class="wiper-button wiper-button__left" @click="nextSlide">
        <img src="/img/carousel/left-arrow.svg" alt="Prev" />
      </button>

      <ul class="wiper__track" :style="{ transform: `translateX(-${currentIndex * (293)}px)` }">
        <li v-for="(slide, index) in slides" :key="index" class="wiper__item "
            :class="{ 'active-swipe': index === currentIndex }">
            <img :src="slide.image" class="wiper__image" alt="slider-image">
            <p class="wiper__text"> {{slide.text}}</p>
            <button v-if="index === currentIndex" class="btn btn__open-menu" @click="openMenu()">Открыть меню</button>
          <div v-else class="overlay"></div>
        </li>
      </ul>
      <button class="wiper-button wiper-button__right" @click="prevSlide" >
        <img src="/img/carousel/left-arrow.svg" alt="Next" />
      </button>
    </div>
    <ModalWindow :show="showModal">
      <p>hi</p>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'
import router from '@/router/index.js'

export default {
  components: { ModalWindow },
  data() {
    return {
      currentIndex: 0,
      showModal: false,
      slides: [
        { image: '/img/carousel/1.jpg', text: 'Салаты'},
        { image: '/img/carousel/2.jpg', text: 'Выпечка'},
        { image: '/img/carousel/3.jpg', text: 'Супы'},
        { image: '/img/carousel/4.jpg', text: 'Блюда на мангале'},
        { image: '/img/carousel/5.jpg', text: 'Горячие блюда'},
        { image: '/img/carousel/6.jpg', text: 'Соусы'},
      ]
    };
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
    openMenu(){
      router.push('/menu');
    }
  }
};
</script>