<template>
  <div class="wrapper">
    <HeaderView/>
    <MainView/>
  </div>
  <div class="second__wrapper">
    <AssortmentView/>
    <Menu/>
    <DeliverView/>
    <GalleryView/>
  </div>
  <div>
    <FooterView/>
  </div>
</template>
<script>
import HeaderView from '@/views/HeaderView.vue'
import MainView from '@/views/MainView.vue'
import AssortmentView from '@/views/AssortmentView.vue'
import Menu from '@/views/MenuView.vue'
import DeliverView from '@/views/DeliverView.vue'
import FooterView from '@/views/FooterView.vue'
import GalleryView from '@/views/GalleryView.vue'
export default {
  components:{
    GalleryView,
    FooterView,
    DeliverView,
    AssortmentView,
    MainView,
    HeaderView,
    Menu
  }
}
</script>
