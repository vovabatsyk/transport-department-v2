<template>
    <div>
        <div class="pa-2 form">
            <div class="v-icon d-flex justify-center">
                <svg style="width:74px;height:74px" color="brown" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z"/>
                </svg>
            </div>
            <div class="mb-4 text-center">Евакуйовані авто</div>
            <v-form ref="form"
                    v-model="valid"
                    lazy-validation>
                <v-text-field
                        v-model="value"
                        :rules="[v => !!v || 'Заповніть поле', v => (v && v.length >= 4) || 'Введіть не менше 4 символа']"
                        label="Номерний знак авто"
                        required>
                </v-text-field>
                <v-checkbox
                        v-model="checkboxNumber"
                        :rules="[v => !!v || 'Поставте галочку']"
                        label="Все вірно?"
                        required>
                </v-checkbox>
                <div class="d-flex justify-center">
                    <v-btn :disabled="!valid"
                           color="primary"
                           class="mr-4"
                           @click="validate"
                    >Знайти
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
      value: '',
      checkboxNumber: false,
      dialog: false,
      items: [
        {
          src: 'https://media.acc.cv.ua/news/article/2017/11/20/4339/23770080_1752284431508977_538847648_o.g.jpg'
        },
        {
          src: 'https://ternopilcity.gov.ua/app4/%D0%B5%D0%B2%D0%B0%D0%BA%D1%83%D0%B0%D1%82%D0%BE%D1%80%20%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%2004-07-2020%20(1).JPG'
        },
        {
          src: 'https://rv.suspilne.media/cdn/1/image/2019/03/15/b12868a403a85bdf3e45989320bb8692.jpg'
        },
        {
          src: 'https://pmg.ua/uploads/2019-06/07/5cfa15343da91-1.jpg'
        }
      ]
    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.dialog = true,
            this.value = ''
          this.checkboxNumber = false
        }
      }
    }
  }
</script>
