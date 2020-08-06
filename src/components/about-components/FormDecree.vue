<template>
    <div>
        <div class="pa-2 form">
            <v-form ref="form"
                    v-model="valid"
                    lazy-validation>
                <div class="v-icon d-flex justify-center">
                    <svg style="width:74px;height:74px" class="justify-center text-center" color="brown"
                         viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M13,10H11V6H13M13,14H11V12H13M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"/>
                    </svg>
                </div>
                <div class="mb-4 text-center">Введіть дані для перевірки постанови</div>
                <v-text-field
                        v-model="numberDecree"
                        :counter="6"
                        :rules="[v => !!v || 'Заповніть поле', v => (v && v.length == 6) || 'Номер постанови складається з 6 символів']"
                        label="Номер постанови"
                        required>
                </v-text-field>
                <v-text-field
                        v-model="numberCar"
                        :rules="[v => !!v || 'Заповніть поле',  v => (v && v.length >= 4) || 'Введіть не менше 4 символа']"
                        label="Номерний знак авто"
                        required>
                </v-text-field>
                <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'Поставте галочку']"
                        label="Все вірно?"
                        required>
                </v-checkbox>
                <div class="d-flex justify-center">
                    <v-btn :disabled="!valid"
                           color="primary"
                           class="mr-4 mb-4"
                           @click="validate"
                    >Перевірити
                    </v-btn>
                </div>
            </v-form>
        </div>
        <v-dialog v-model="dialog">
            <v-card>
                    <v-btn
                            color="red darken-4"
                            @click="dialog = false"
                            class="modal-btn"
                    >
                        Закрити
                    </v-btn>
                <v-carousel>
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>

            </v-card>
        </v-dialog>
    </div>
</template>
<script>

  export default {

    data: () => ({
      valid: true,
      numberDecree: '',
      numberCar: '',
      checkbox: false,
      dialog: false,
      items: [
        {
          src: 'https://media.acc.cv.ua/news/article/2017/11/20/4339/23770080_1752284431508977_538847648_o.g.jpg',
        },
        {
          src: 'https://ternopilcity.gov.ua/app4/%D0%B5%D0%B2%D0%B0%D0%BA%D1%83%D0%B0%D1%82%D0%BE%D1%80%20%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%2004-07-2020%20(1).JPG',
        },
        {
          src: 'https://rv.suspilne.media/cdn/1/image/2019/03/15/b12868a403a85bdf3e45989320bb8692.jpg',
        },
        {
          src: 'https://pmg.ua/uploads/2019-06/07/5cfa15343da91-1.jpg',
        },
      ],
    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.dialog = true
          this.numberCar = ''
          this.numberDecree = ''
          this.checkbox = false
        }
      }
    }
  }
</script>

