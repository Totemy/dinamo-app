<template>
  <section class="menu-page">
    <div class="container">
      <div class="menu-page__images">
        <img class="menu-page__img" src="/img/gallery/gal1.webp" alt="img-gallery-1" />
        <img class="menu-page__img" src="/img/gallery/gal2.webp" alt="img-gallery-2" />
        <img class="menu-page__img" src="/img/gallery/gal3.webp" alt="img-gallery-3" />
        <img class="menu-page__img" src="/img/gallery/gal4.webp" alt="img-gallery-4" />
      </div>
      <div class="menu-page__title">
        <h2>Cold appetizers</h2>
      </div>
      <div class="menu-page__blocks">
        <div class="menu-page__block" v-for="item in 6" :key="item">
          <div class="menu-page__block-header">
            <div class="menu-page__name">
              {{ name }}
            </div>
            <div class="menu-page__price">{{ price }} UAH</div>
          </div>
          <div class="menu-page__block-under">
            <div class="menu-page__size">{{ size }}gr.</div>
            <div>
              {{ code }}
            </div>
          </div>
          <div class="menu-page__text">
            {{ text }}
          </div>
        </div>
      </div>
      <div class="menu-page__images">
        <img class="menu-page__img" src="/img/gallery/gal1.webp" alt="img-gallery-1" />
        <img class="menu-page__img" src="/img/gallery/gal2.webp" alt="img-gallery-2" />
        <img class="menu-page__img" src="/img/gallery/gal3.webp" alt="img-gallery-3" />
        <img class="menu-page__img" src="/img/gallery/gal4.webp" alt="img-gallery-4" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: 'Chicken satsivi',
      price: '390',
      size: '200',
      code: 'Nutritional Value: 320/16/27/4',
      text:
        'Ingredients: 100g chicken breast; 60g walnuts; 20g water; 5g saffron; 1.5 tbsp wine vinegar; 2 tbsp butter; \n' +
        '2 tbsp; salt and pepper to taste; 1 tsp hops-suneli; 5g garlic; 10g onion.\n'
    }
  }
}
</script>
