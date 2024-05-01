<template>
  <div>
    <div v-for="slide in slides" class="mobile-carousel">
      <img class="slide" :src="slide.image" alt="{{slide.text}}">
      <button class="btn btn__open-menu" @click="openMenu()">Открыть меню</button>
      <p class="wiper__text"> {{slide.text}}</p>
    </div>
  </div>
</template>
<script>
import router from '@/router/index.js'

export default {
  data() {
    return {
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
  methods:{
    openMenu(){
      router.push('/menu');
    }
  }
}
</script>