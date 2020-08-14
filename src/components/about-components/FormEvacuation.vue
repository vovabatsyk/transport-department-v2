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
                        v-model="numberCar"
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
                        class="modal-btn"
                        text
                        color="red darken-4"
                        @click="dialog = false"
                        dark>
                    <v-icon dark left>mdi-exit-to-app</v-icon>
                </v-btn>

                <h4 class="pa-2">Номерний знак: {{getPhotos.numberCar}}</h4>

                <v-carousel>
                    <v-carousel-item
                            v-for="(photo,i) in getPhotos.img"
                            :key="i"
                            :src="photo"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>

            </v-card>
        </v-dialog>
    </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data: () => ({
      valid: true,
      numberCar: '',
      checkboxNumber: false,
      dialog: false,
      photos: []
    }),
    computed: mapGetters(['getPhotos']),
    methods: {
      ...mapActions(['fetchEvacuationPhotos']),
      async validate() {
        if (this.$refs.form.validate()) {
          await this.fetchEvacuationPhotos({numberCar: this.numberCar})
          this.dialog = true

          this.checkboxNumber = false
          this.numberCar = ''
        }
      }
    }
  }
</script>
