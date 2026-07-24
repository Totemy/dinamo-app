<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__item">
          <img class="footer__logo" src="/img/footer/logo2.png" alt="Dinamo Georgian Bistro" />
        </div>
        <div v-for="contact in footerContacts" :key="contact" class="footer__item">
          <div class="footer__text">
            <p>{{ contact }}</p>
          </div>
        </div>
      </div>

      <div class="footer__footer">
        <div class="footer__left">
          <div v-for="item in footerLegal" :key="item" class="footer__footer__item">{{ item }}</div>
        </div>
        <div class="footer__footer__item">Dynamo. Georgian Bistro. All rights reserved, 2025</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { footerContacts, footerLegal } from '@/services/content'

export default {
  data: () => ({ footerContacts, footerLegal })
}
</script>
