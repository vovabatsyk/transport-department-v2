<template>
    <div>
        <v-divider></v-divider>
        <v-footer
                padless
                class="d-flex flex-row justify-space-around flex-wrap-reverse grey lighten-3">
            <div class="d-flex flex-row align-self-start">
                <div class="mr-2"><img src="../assets/img/lviv-logo.png" width="100" alt="Lviv"></div>
                <div class="mr-2"><img src="../assets/img/lmr.png" width="110" alt="Lmr" class="mt-1"></div>
                <div class="img-footer"><img src="../assets/img/parking-lviv-8x5.jpg" width="95" alt="Lviv"></div>
            </div>
            <div class="pa-2">
                <v-card
                        max-width="375"
                        class="mx-auto"
                        elevation="2">
                    <v-list v-for="(item, i) of items" :key="i">
                        <a :href="item.to">
                            <v-list-item @click="">
                                <v-list-item-icon>
                                    <v-icon color="indigo">{{item.icon}}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-subtitle>{{item.title}}</v-list-item-subtitle>
                                    <v-list-item-title>{{item.text}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </a>
                        <v-divider inset></v-divider>
                    </v-list>
                </v-card>
            </div>

        </v-footer>
        <v-footer color="primary">
            <v-spacer></v-spacer>
            <div class="white--text mr-3">Львів</div>
            <div class="white--text"> &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {title: 'Контактний номер:', text: '+38 (0322) 61-55-66', icon: 'mdi-phone', to: 'tel:+380322615566'},
        {
          title: 'Електронна пошта:',
          text: 'parking.lviv.inspector@gmail.com',
          icon: 'mdi-email',
          to: 'mailto:parking.lviv.inspector@gmail.com'
        },
        {
          title: 'Адреса:',
          text: 'м.Львів, вул.Сахарова 2',
          icon: 'mdi-map-marker',
          to: 'https://goo.gl/maps/SG27sqti3kUSFK776'
        },
        {title: 'Індекс:', text: '79012', icon: 'mdi-mailbox', to: 'https://goo.gl/maps/SG27sqti3kUSFK776'},
      ]
    })
  }
</script>
