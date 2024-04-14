<template>
  <v-footer style="border-top: 1px solid #D9D9D9;">
    <v-row
        class="d-flex justify-center pt-1"
        style="width: 100vw;"
    >
        <img src="~assets/images/logo.png">
        <h1 class="d-flex align-center">Farmvista</h1>
    </v-row>        
    <v-row
    justify="center"
    no-gutters
    >
    <v-btn
        v-for="link in links"
        :key="link"
        color="#B8A698"
        text
        rounded
        class="my-2"
    >
        {{ link }}
    </v-btn>
    <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
    >
        {{ new Date().getFullYear() }} — <strong>FarmVista</strong>
    </v-col>
    </v-row>        

  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Visualization',
        'GSIS'
      ],
    }),
  }
</script>

<style scoped>
img{
    width: 100px;
}
</style>