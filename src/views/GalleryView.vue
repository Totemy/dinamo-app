<template>
  <section class="gallery">
    <div class="gallery__wrapper">
      <div class="gallery__list">
        <div
          v-for="(image, index) in galleryImages"
          :key="image.src"
          v-reveal="(index % 4) * 90"
          class="gallery__item"
        >
          <img class="gallery__img" :src="image.src" :alt="image.alt" width="358" height="269" />
        </div>
      </div>
    </div>
    <div class="gallery__mobile">
      <SliderMobilePage />
    </div>
  </section>
</template>

<script>
import SliderMobilePage from '@/components/SliderMobilePage.vue'
import { galleryImages } from '@/services/content'

export default {
  components: { SliderMobilePage },
  data: () => ({ galleryImages })
}
</script>
