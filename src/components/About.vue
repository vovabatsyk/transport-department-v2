<template>
    <div>
        <div class="d-flex flex-row justify-space-around flex-wrap">
            <form-decree/>
            <form-evacuation/>
        </div>
        <v-parallax src="../assets/img/lviv.jpg" id="about"></v-parallax>
        <h4 class="text-center mb-0 mt-3">Департамент житлового господарства та інфраструктури</h4>
        <h2 class="text-center">Управління транспорту ЛМР</h2>
        <div class="d-flex justify-center">
            <div>
                <ul v-for="(item, i) in items" :key="i">
                    <li><b>{{i+1}}</b>. {{item}}</li>
                </ul>
                <div class="d-flex justify-center">
                    <v-btn class="ma-1"
                           href="https://city-adm.lviv.ua/lmr/office/upravlinnia-transportu"
                           target="_blank"
                           color="primary">
                        Посилання
                        <v-icon class="ml-2">mdi-send</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <v-parallax src="../assets/img/01.jpg">
            <div class="d-flex justify-center">
                <div class="inspector-text">
                    <h2 class="text-center">Інспектор з паркування</h2>
                    <p class="text-justify">Інспектор з паркування - це посадова особа, яка працює в органах місцевого
                        самоврядування, має відповідні посадові повноваження щодо здійснення організаційно-розпорядчих
                        та
                        консультативно-дорадчих функцій і отримує заробітну плату за рахунок місцевого бюджету, і якій
                        надано право розглядати справи про адміністративні правопорушення, передбачені частинами першою
                        і
                        третьою статті 122, частинами першою і другою статті 152-1 КУпАП.</p>
                </div>
            </div>
        </v-parallax>
    </div>
</template>

<script>
  import FormDecree from './about-components/FormDecree'
  import FormEvacuation from './about-components/FormEvacuation'

  export default {
    name: 'About',
    data: () => ({
      items:
        [
          'Загальні положення.',
          'Основні завдання.',
          'Структура та організація роботи.',
          'Компетенція управління.',
          'Права управління.',
          'Фінансування та матеріально-технічне забезпечення діяльності управління.',
          'Відповідальність посадових осіб управління.',
          'Заключні положення.'
        ]
    }),
    components: {FormDecree, FormEvacuation}
  }
</script>

<style scoped>
    ul {
        list-style: none;
    }

    .inspector-text {
        max-width: 800px;
    }

    h3, p {
        text-shadow: 1px 1px black;
    }
</style>


