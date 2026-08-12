<template>
  <section id="discount" class="assortment">
    <div class="container assortment__container">
      <div v-reveal class="article">
        <h2 class="article__header">Try it for taste</h2>
        <p class="article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium netus urna
          hendrerit convallis aliquam consequat turpis.
        </p>
      </div>

      <div class="assortment__card">
        <div
          v-for="(card, index) in assortmentCards"
          :key="card.image"
          v-reveal="index * 120"
          class="assortment__card__item"
        >
          <div class="assortment__card__wrapper">
            <img class="assortment__img" :src="card.image" :alt="card.alt" />
          </div>
          <div class="assortment__card__text">
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>

      <div v-reveal class="assortment__button">
        <button class="btn btn__primary" type="button">GO TO DELIVERY</button>
      </div>

      <img
        class="assortment__tomato-img float float--slow"
        width="287"
        height="289"
        src="/img/assortiment/tomato.png"
        alt=""
        role="presentation"
      />
      <img
        class="assortment__basil1-img float"
        width="287"
        height="390"
        src="/img/assortiment/basil.png"
        alt=""
        role="presentation"
      />
      <img
        class="assortment__basil2-img float float--delayed"
        width="287"
        height="307"
        src="/img/assortiment/basil2.png"
        alt=""
        role="presentation"
      />
    </div>
  </section>
</template>

<script>
import { assortmentCards } from '@/services/content'

export default {
  data: () => ({ assortmentCards })
}
</script>
