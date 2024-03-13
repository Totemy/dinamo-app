<template>
  <div>
    <div v-for="slide in slides" class="mobile-carousel">
      <img class="slide" :src="slide.image" alt="{{slide.text}}">
      <p>{{slide.text}}</p>
      <button class="btn btn__open-menu" @click="openModal()">Открыть меню</button>
    </div>
  </div>
</template>
<script>
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
}
</script>