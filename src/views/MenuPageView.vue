<template>
  <section class="menu-page">
    <div class="container">
      <div class="menu-page__gallery">
        Gallery
      </div>
      <div class="menu-page__title">
        <h2> Холодные закуски </h2>
      </div>
      <div class="menu-page__blocks">
        <div class="menu-page__block" v-for="item in 6" :key="item">
          <div>
            <div class="menu-page__name">
              {{name}}
            </div>
            <div class="menu-page__price">
              {{price}} грн
            </div>
          </div>
          <div>
            <div>
              {{size}}гр.
            </div>
            <div>
              {{code}}
            </div>
          </div>
          <div>
            {{text}}
          </div>
        </div>
      </div>

      <div class="menu-page__gallery">
        Gallery
      </div>
    </div>

  </section>
</template>
<script>
export default {
  data(){
    return{
      name: 'Сациви из курицы',
      price: '390',
      size: '200',
      code: 'КБЖУ: 320/16/27/4',
      text: 'Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. \n' +
        '2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.\n'
    }
  }
}
</script>