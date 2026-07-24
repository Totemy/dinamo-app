<template>
  <section class="menu-page">
    <div class="container">
      <div class="menu-page__images">
        <img
          v-for="(image, index) in menuPagePreview"
          :key="`top-${image.src}`"
          v-reveal="index * 80"
          class="menu-page__img"
          :src="image.src"
          :alt="image.alt"
        />
      </div>

      <div class="menu-page__title">
        <h2>Cold appetizers</h2>
      </div>

      <div class="menu-page__blocks">
        <div
          v-for="(dish, index) in dishes"
          :key="index"
          v-reveal="index * 70"
          class="menu-page__block"
        >
          <div class="menu-page__block-header">
            <div class="menu-page__name">{{ dish.name }}</div>
            <div class="menu-page__price">{{ dish.price }} UAH</div>
          </div>
          <div class="menu-page__block-under">
            <div class="menu-page__size">{{ dish.weight }}gr.</div>
            <div>{{ dish.nutrition }}</div>
          </div>
          <div class="menu-page__text">{{ dish.ingredients }}</div>
        </div>
      </div>

      <div class="menu-page__images">
        <img
          v-for="image in menuPagePreview"
          :key="`bottom-${image.src}`"
          class="menu-page__img"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { menuPagePreview } from '@/services/content'

const SATSIVI = {
  name: 'Chicken satsivi',
  price: '390',
  weight: '200',
  nutrition: 'Nutritional Value: 320/16/27/4',
  ingredients:
    'Ingredients: 100g chicken breast; 60g walnuts; 20g water; 5g saffron; 1.5 tbsp wine vinegar; ' +
    '2 tbsp butter; 2 tbsp; salt and pepper to taste; 1 tsp hops-suneli; 5g garlic; 10g onion.'
}

export default {
  data: () => ({
    menuPagePreview,
    dishes: Array.from({ length: 6 }, () => SATSIVI)
  })
}
</script>
