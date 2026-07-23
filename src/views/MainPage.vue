<template>
  <div class="wrapper">
    <HeaderView />
    <MainView />
    <img
      src="/img/header/background.webp"
      alt=""
      role="presentation"
      class="wrapper__bg"
      fetchpriority="high"
      loading="eager"
      width="1440"
      height="900"
    />
  </div>

  <div class="second__wrapper">
    <AssortmentView />
    <MenuView />
    <DeliverView />
    <GalleryView />
  </div>

  <FooterView />
</template>

<script>
import HeaderView from '@/views/HeaderView.vue'
import MainView from '@/views/MainView.vue'
import AssortmentView from '@/views/AssortmentView.vue'
import MenuView from '@/views/MenuView.vue'
import DeliverView from '@/views/DeliverView.vue'
import GalleryView from '@/views/GalleryView.vue'
import FooterView from '@/views/FooterView.vue'

export default {
  components: {
    HeaderView,
    MainView,
    AssortmentView,
    MenuView,
    DeliverView,
    GalleryView,
    FooterView
  }
}
</script>
