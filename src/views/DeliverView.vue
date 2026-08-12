<template>
  <section id="delivery" class="deliver">
    <div class="container deliver__container">
      <div v-reveal class="article">
        <h2 class="article__header">Convenient delivery methods</h2>
        <p class="article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium netus urna
          hendrerit convallis aliquam consequat turpis.
        </p>
      </div>

      <div class="deliver__content">
        <div class="deliver__cards">
          <div
            v-for="(option, index) in deliveryOptions"
            :key="index"
            v-reveal="index * 120"
            class="deliver__cards__item"
          >
            <div class="deliver__img__wrapper">
              <img class="deliver__img" :src="option.image" :alt="option.alt" />
            </div>
            <div class="deliver__cards__text">{{ option.text }}</div>
          </div>
        </div>
        <div>
          <img
            v-reveal="150"
            class="deliver__main-img"
            src="/img/deliver/image.webp"
            alt="Georgian dishes ready for delivery"
          />
        </div>
      </div>

      <img
        class="deliver__tomato float float--slow"
        src="/img/deliver/tomato.png"
        alt=""
        role="presentation"
      />
      <img
        class="deliver__basil-left float"
        src="/img/deliver/basil-left.png"
        alt=""
        role="presentation"
      />
      <img
        class="deliver__basil-right float float--delayed"
        src="/img/deliver/basil-right.png"
        alt=""
        role="presentation"
      />
      <img
        class="deliver__tomato-mobile float"
        src="/img/deliver/tomato_mobile.png"
        alt=""
        role="presentation"
      />
    </div>
  </section>
</template>

<script>
import { deliveryOptions } from '@/services/content'

export default {
  data: () => ({ deliveryOptions })
}
</script>
