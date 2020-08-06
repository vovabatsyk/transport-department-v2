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
    </div>
</template>
<script>

  export default {

    data: () => ({
      valid: true,
      numberDecree: '',
      numberCar: '',
      checkbox: false
    }),
    methods: {
      validate() {
        if(this.$refs.form.validate()){
        }
      }
    }
  }
</script>

