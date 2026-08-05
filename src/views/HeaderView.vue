<template>
  <header class="header">
    <div class="container">
      <!-- Desktop -->
      <nav class="navbar-web">
        <div class="navbar-web__row">
          <a class="navbar-web__logo" href="#main">
            <img src="/img/footer/logo2.png" alt="Dinamo Georgian Bistro" />
          </a>

          <div v-for="link in navLinks" :key="link.href" class="navbar-web__item">
            <a :href="link.href">{{ link.label }}</a>
          </div>

          <div class="navbar-web__phone">{{ PHONE }}</div>

          <div class="navbar-web__social">
            <div v-for="social in socialLinks" :key="social.label">
              <img class="navbar-web__social_img" :src="social.icon" :alt="social.label" />
            </div>
          </div>
        </div>
      </nav>

      <!-- Mobile -->
      <nav class="navbar-mobile">
        <img class="navbar-mobile__logo" src="/img/footer/logo2.png" alt="Dinamo Georgian Bistro" />

        <div class="navbar-mobile__social">
          <div class="navbar-mobile__social_img">
            <img src="/img/header/phone.svg" alt="Phone" />
          </div>
          <div v-for="social in socialLinks" :key="social.label" class="navbar-mobile__social_img">
            <img :src="social.icon" :alt="social.label" />
          </div>
        </div>

        <button
          class="navbar-burger"
          :class="{ 'navbar-burger--open': isMenuOpen }"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="navbar-burger__bar"></span>
          <span class="navbar-burger__bar"></span>
          <span class="navbar-burger__bar"></span>
        </button>
      </nav>
    </div>

    <transition name="menu-slide">
      <div v-if="isMenuOpen" class="navbar-mobile__list">
        <div v-for="link in navLinks" :key="link.href" class="navbar-mobile__item">
          <a :href="link.href" @click="isMenuOpen = false">{{ link.label }}</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { navLinks, socialLinks, PHONE } from '@/services/content'

export default {
  data() {
    return { isMenuOpen: false, navLinks, socialLinks, PHONE }
  }
}
</script>
