<template>
  <section class="menu">
    <div class="container">
      <div class="article">
        <h2>Меню</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium netus urna hendrerit convallis aliquam consequat turpis.
        </p>
      </div>
      <div>
        <CarouselPage/>
      </div>
    </div>
  </section>
</template>
<script>
import CarouselPage from '@/components/CarouselPage.vue'
export default {
  components: {
    CarouselPage
  }
}
</script>