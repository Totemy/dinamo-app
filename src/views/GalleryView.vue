<template>
  <section class="gallery">
    <div class="gallery__wrapper">
      <div class="gallery__list">
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal1.webp"
            alt="img-gallery-1"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal2.webp"
            alt="img-gallery-2"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal3.webp"
            alt="img-gallery-3"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal4.webp"
            alt="img-gallery-4"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal5.webp"
            alt="img-gallery-5"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal6.webp"
            alt="img-gallery-6"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal7.webp"
            alt="img-gallery-7"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/gallery/gal8.webp"
            alt="img-gallery-8"
            width="358"
            height="269"
          />
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
export default {
  components: {
    SliderMobilePage
  }
}
</script>
