<template>
  <section class="menu-page">
    <div class="container">
      <div class="menu-page__gallery">
        <div class="menu-page__images" >
          <img class="menu-page__img" src="/img/galery/gal1.jpg" alt="img-gallery-1"/>
          <img class="menu-page__img" src="/img/galery/gal2.jpg" alt="img-gallery-2"/>
          <img class="menu-page__img" src="/img/galery/gal3.jpg" alt="img-gallery-3"/>
          <img class="menu-page__img" src="/img/galery/gal4.jpg" alt="img-gallery-4"/>
        </div>
      </div>
      <div class="menu-page__title">
        <h2> Холодные закуски </h2>
      </div>
      <div class="menu-page__blocks">
        <div class="menu-page__block" v-for="item in 6" :key="item">
          <div class="menu-page__block-header">
            <div class="menu-page__name">
              {{name}}
            </div>
            <div class="menu-page__price">
              {{price}} грн
            </div>
          </div>
          <div class="menu-page__block-under">
            <div class="menu-page__size">
              {{size}}гр.
            </div>
            <div>
              {{code}}
            </div>
          </div>
          <div class="menu-page__text">
            {{text}}
          </div>
        </div>
      </div>

      <div class="menu-page__gallery">
        <div class="menu-page__images" >
          <img class="menu-page__img" src="/img/galery/gal1.jpg" alt="img-gallery-1"/>
          <img class="menu-page__img" src="/img/galery/gal2.jpg" alt="img-gallery-2"/>
          <img class="menu-page__img" src="/img/galery/gal3.jpg" alt="img-gallery-3"/>
          <img class="menu-page__img" src="/img/galery/gal4.jpg" alt="img-gallery-4"/>
        </div>
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