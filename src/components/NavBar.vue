<template>
    <div>
        <div class="drawer">
            <v-navigation-drawer v-model="drawer" app>
                <v-list dense>
                    <v-list-item link v-for="link in links" :key="links.name" @click.stop="drawer = !drawer">
                        <v-icon color="primary">{{link.icon}}</v-icon>
                        <v-btn :href="link.to" class="drawer-links" outlined>{{link.name}}</v-btn>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
        <v-app-bar app color="white" dark>
            <div class="drawer-btn mr-5">
                <v-icon @click.stop="drawer = !drawer" color="grey">mdi-menu</v-icon>
            </div>
            <v-toolbar-title>
                <img src="../assets/img/lmr.png" alt="Lmr" width="100" class="mt-2 ml-2"/>
                <img src="../assets/img/parking-lviv.jpg" alt="Parking-logo" height="50" class="ml-2"/>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="my-2"
                 v-for="link in links"
                 :key="link.name">
                <v-btn :href="link.to" class="nav-btn" color="black" large outlined>
                    <v-icon color="primary" class="mr-2">{{link.icon}}</v-icon>
                    {{link.name}}
                </v-btn>
            </div>
        </v-app-bar>
    </div>

</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      links: [
        {name: 'Про управління', icon: 'mdi-home', to: '#'},
        {name: 'Нормативна база', icon: 'mdi-book-open-page-variant', to: '#legislation'},
        {name: 'На замітку водіям', icon: 'mdi-car-info', to: '#information'},
        {name: 'Контакти', icon: 'mdi-account-box-multiple', to: '#footer'}
      ]

    })
  }
</script>

<style scoped>
    .drawer-links {
        border: none;
    }

    .drawer-logo {
        position: absolute;
        bottom: 0;
    }
</style>
