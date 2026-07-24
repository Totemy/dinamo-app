<template>
  <div class="mobile-carousel">
    <div v-for="slide in slides" :key="slide.image" v-reveal class="mobile-carousel__item">
      <img class="mobile-carousel__image" :src="slide.image" alt="" role="presentation" />
      <div class="mobile-carousel__overlay"></div>
      <p class="mobile-carousel__text">{{ slide.text }}</p>
      <button class="btn btn__open-menu" type="button" @click="$router.push('/menu')">
        Open menu
      </button>
    </div>
  </div>
</template>

<script>
import { menuCategories } from '@/services/content'

export default {
  data: () => ({ slides: menuCategories })
}
</script>
