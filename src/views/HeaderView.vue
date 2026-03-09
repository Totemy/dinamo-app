<template>
  <div class="header">
    <div class="container">
      <!-- Desktop -->
      <div class="navbar-web">
        <div class="navbar-web__row">
          <div class="navbar-web__item"><img src="/img/footer/logo.png" /></div>
          <div class="navbar-web__item"><a href="#main">home</a></div>
          <div class="navbar-web__item"><a href="#menu">menu</a></div>
          <div class="navbar-web__item"><a href="#delivery">delivery</a></div>
          <div class="navbar-web__item"><a href="#contact">contacts</a></div>
          <div class="navbar-web__item"><a href="#discount">stock</a></div>
          <div class="navbar-web__phone">+380 (98) 765 43 21</div>
          <div class="navbar-web__social">
            <div><img class="navbar-web__social_img" src="/img/header/instagram.png" /></div>
            <div><img class="navbar-web__social_img" src="/img/header/facebook.png" /></div>
            <div><img class="navbar-web__social_img" src="/img/header/twitter.png" /></div>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="navbar-mobile">
        <img class="navbar-mobile__logo" src="/img/footer/logo.png" />

        <div class="navbar-mobile__social">
          <div class="navbar-mobile__social_img"><img src="/img/header/phone.svg" /></div>
          <div class="navbar-mobile__social_img"><img src="/img/header/instagram.png" /></div>
          <div class="navbar-mobile__social_img"><img src="/img/header/facebook.png" /></div>
          <div class="navbar-mobile__social_img"><img src="/img/header/twitter.png" /></div>
        </div>

        <div
          class="navbar-burger"
          :class="{ 'navbar-burger--open': openBar }"
          @click="openBar = !openBar"
        >
          <span class="navbar-burger__bar"></span>
          <span class="navbar-burger__bar"></span>
          <span class="navbar-burger__bar"></span>
        </div>
      </div>
    </div>

    <!-- Меню винесено за container, на рівень header -->
    <transition name="menu-slide">
      <div class="navbar-mobile__list" v-if="openBar">
        <div class="navbar-mobile__item"><a href="#main" @click="openBar = false">home</a></div>
        <div class="navbar-mobile__item"><a href="#menu" @click="openBar = false">menu</a></div>
        <div class="navbar-mobile__item">
          <a href="#delivery" @click="openBar = false">delivery</a>
        </div>
        <div class="navbar-mobile__item">
          <a href="#contact" @click="openBar = false">contacts</a>
        </div>
        <div class="navbar-mobile__item">
          <a href="#discount" @click="openBar = false">stock</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openBar: false
    }
  }
}
</script>
