<template>
   <div class="wrapper">
     <HeaderView/>
     <MainView/>
   </div>
  <div class="second__wrapper">
    <AssortmentView/>
    <Menu/>
    <DeliverView/>
  </div>

</template>
<script>
import HeaderView from '@/views/HeaderView.vue'
import MainView from '@/views/MainView.vue'
import AssortmentView from '@/views/AssortmentView.vue'
import Menu from '@/views/MenuView.vue'
import DeliverView from '@/views/DeliverView.vue'
export default {
  components:{
    DeliverView,
    AssortmentView,
    MainView,
    HeaderView,
    Menu
  }
}
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>