<template>
  <section class="gallery">
    <div class="gallery__wrapper">
      <div class="gallery__list">
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal1.jpg"
            alt="img-gallery-1"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal2.jpg"
            alt="img-gallery-2"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal3.jpg"
            alt="img-gallery-3"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal4.jpg"
            alt="img-gallery-4"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal5.jpg"
            alt="img-gallery-5"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal6.jpg"
            alt="img-gallery-6"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal7.jpg"
            alt="img-gallery-7"
            width="358"
            height="269"
          />
        </div>
        <div class="gallery__item">
          <img
            class="gallery__img"
            src="/img/galery/gal8.jpg"
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
