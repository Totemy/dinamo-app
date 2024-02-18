<template>
   <div class="wrapper">
     <HeaderView/>
     <MainView/>
   </div>
  <AssortmentView/>
</template>
<script>
import HeaderView from '@/views/HeaderView.vue'
import MainView from '@/views/MainView.vue'
import AssortmentView from '@/views/AssortmentView.vue'
export default {
  components:{
    AssortmentView,
    MainView,
    HeaderView
  }
}
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>