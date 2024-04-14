<template>
    <v-app-bar
      absolute
      color="#F7F5F2"
      height="100px"
      class="px-5"
      elevation="4"
    >
      <div class="d-flex align-center">
        <img src="~assets/images/logo.png">
        <v-toolbar-title class="d-flex align-center">FarmVista</v-toolbar-title>
      </div>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <svg-icon type="mdi" :path="bars" class="bars d-xs-flex d-md-none" v-bind="attrs"></svg-icon>
      </v-btn>
      
      <div class="align-center d-none d-md-flex">
        <NuxtLInk class="mr-3 font-weight-bold">Home</NuxtLInk>
        <NuxtLInk class="mr-3 font-weight-bold">About Us</NuxtLInk>
        <NuxtLInk class="mr-3 font-weight-bold">Visualization</NuxtLInk>
        <NuxtLInk class="mr-3 font-weight-bold">GSIS</NuxtLInk>
      </div>
    </v-app-bar>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       bars: mdiMenu,
       btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [...Array(4)].map((_, i) => `Item ${i}`),
    }
  }
}
</script>

<style scoped>
div,img{
  height: 100%;
}
.bars{
  transform: scale(1.5);
}
</style>