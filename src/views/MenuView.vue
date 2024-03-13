<template>
  <section class="menu">
    <div class="container">
      <div class="article">
        <h2 class="article__header">Меню</h2>
        <p class="article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium netus urna hendrerit convallis aliquam consequat turpis.
        </p>
      </div>
      <div class="carousel__web">
        <CarouselPage/>
      </div>
      <div class="carousel__mobile">
        <CarouselMobilePage/>
      </div>
    </div>
  </section>
</template>
<script>
import CarouselPage from '@/components/CarouselPage.vue'
import CarouselMobilePage from '@/components/CarouselMobilePage.vue'
export default {
  components: {
    CarouselMobilePage,
    CarouselPage
  }
}
</script>