<template>
    <div id="legislation">
        <div class="d-flex justify-center mb-3">
            <div class="legislation">
                <v-img src="../assets/img/justice.svg" alt="Justice" width="105" class="mt-9 mr-4 float-left"></v-img>
                <h2 class="text-center ma-1">Нормативна база</h2>
                <ul v-for="(item,i) in items" :key="i">
                    <li class="mb3 text-justify mr-3"><a :href="item.to" target="_blank" class="legislation-links"><b>{{i+1}}</b>.
                        {{item.text}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <v-parallax src="../assets/img/evacuation.jpg" alt="Evacuation"></v-parallax>
        <div class="d-flex justify-center">
            <div class="text-width">
                <h2 class="text-center ma-3">Порядок евакуації та зберігання</h2>
                <p class="mr-2 mb-0 mt-3 ml-2 text-justify">1. Підстави Тимчасового затримання транспортних засобів
                    інспекторами з паркування.</p>
                <div class="d-flex justify-center">
                    <v-btn href="https://zakon.rada.gov.ua/laws/show/2262-19#n72" target="_blank" color="primary"
                           class="ma-3">Посилання
                        <v-icon class="ml-2">mdi-send</v-icon>
                    </v-btn>
                </div>
                <p class="mb-0 mr-2 ml-2 mt-3 text-justify">2. Постанова КМУ № 990 від 14.11.2018р. "Про затвердження
                    Порядку тимчасового затримання інспекторами з паркування транспортних засобів та їх зберігання"</p>
                <div class="d-flex justify-center">
                    <v-btn href="https://zakon.rada.gov.ua/laws/show/990-2018-п#Text"
                           target="_blank" color="primary" class="ma-3">Посилання
                        <v-icon class="ml-2">mdi-send</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <v-parallax src="../assets/img/key-car.jpg" alt="Car"></v-parallax>
        <div class="d-flex justify-center">
            <div class="text-width">
                <h2 class="text-center ma-3">Підстави звільнення від адміністративної відповідальності</h2>
                <p class="mr-2 mb-0 mt-3 ml-2 text-justify">Звільнення відповідальної особи, за порушення правил
                    зупинки, стоянки, паркування транспортних засобів, зафіксоване в режимі фотозйомки
                    (відеозапису).</p>
                <div class="d-flex justify-center">
                    <v-btn href="https://zakon.rada.gov.ua/laws/show/2262-19#n117" target="_blank" color="primary"
                           class="ma-3">Посилання
                        <v-icon class="ml-2">mdi-send</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Рішення Львівської міської ради №6108 від 26.12.2019',
          to: 'https://www8.city-adm.lviv.ua/inteam/uhvaly.nsf/(SearchForWeb)/EB6BDF4DF9FCC53AC22584EA004240BB?OpenDocument'
        },
        {
          text: 'Положення про управління транспорту',
          to: 'https://www8.city-adm.lviv.ua/Pool/Info/doclmr_1.NSF/(SearchForWeb)/A06291CB831717ADC22584F90047A6DD?OpenDocument'
        },
        {
          text: 'Закон України "Про внесення змін до деяких законодавчих актів України щодо реформування сфери паркування транспортних засобів" Документ 2262-VIII.',
          to: 'https://zakon.rada.gov.ua/laws/show/2262-19#Text'
        },
        {text: 'Кодекс України про адміністративні правопорушення', to: 'https://zakon.rada.gov.ua/laws/show/80731-10'},


      ]
    })
  }
</script>

<style scoped>
    .legislation {
        max-width: 900px;
    }

    .legislation-links {
        color: black;
        text-decoration-line: none;
    }

    ul {
        list-style: none;
    }

    .text-width {
        max-width: 800px;
    }


</style>
