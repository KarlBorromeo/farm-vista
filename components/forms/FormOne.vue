<template>
  <v-container>
    <h1>Form One</h1>
    <input type="text" v-model="name" placeholder="your name">
    <input type="number" v-model="number" placeholder="number here.">
    <input type="text" v-model="name" placeholder="your name">
    <input type="number" v-model="number" placeholder="number here.">
    <input type="text" v-model="name" placeholder="your name">
    <input type="number" v-model="number" placeholder="number here.">
    <input type="text" v-model="name" placeholder="your name">

  </v-container>
</template>

<script>
export default {
    data(){
        return{
            name: null,
            number: null
        }
    }
}
</script>

<style>

</style>