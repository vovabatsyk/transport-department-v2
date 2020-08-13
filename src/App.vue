<template>
  <v-app id="inspire">
    <v-sheet
            class="px-3 pt-3 pb-3"
            v-if="loader"
    >
      <v-skeleton-loader
              class="mx-auto"
              type="table"
      ></v-skeleton-loader>
    </v-sheet>
    <div v-else>
      <NavBar/>
      <v-main>
        <v-parallax src="./assets/img/02.jpg"></v-parallax>
        <about/>
        <legislation/>
        <information/>
      </v-main>

      <Footer id="footer"/>
    </div>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar'
  import Footer from './components/Footer'
  import About from './components/About'
  import Legislation from './components/Legislation'
  import Information from './components/Information'
  export default {
    data: () => ({
      loader: true
    }),
    components: {NavBar, Footer, About, Legislation, Information},
    mounted() {
      this.loader = false
    }
  }
</script>
