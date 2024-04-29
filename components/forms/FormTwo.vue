<template>
    <v-container>
      <h1>Form Two</h1>
      <input type="date" v-model="birthdate" placeholder="birthdate">
      <input type="number" v-model="age" placeholder="age">
    </v-container>
  </template>
  
  <script>
  export default {
    data(){
        return{
            birthdate: null,
            age: null
        }
    }
  }
  </script>
  
  <style>
  
  </style>