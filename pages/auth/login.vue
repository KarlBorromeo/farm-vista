<template>
  <v-row
    class="d-flex justify-center align-center"
    style="min-height: 70vh"
  >

    <v-col
    cols="10" sm="4" lg
    class="text-center"
    id="form-container"
    >
        <h3 class="mb-2" style="color: #7C5B4B;">Log in</h3>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submit"
          style="background-color: #E8DCCB"
          class="pa-4 rounded-sm"
          min-width="200px"
          elevation="29"
        >
        
          <v-text-field
            v-model="username"
            :counter="10"
            :rules="usernameRules"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
          <v-btn block color="primary my-2" type="submit">Login</v-btn>
          <NuxtLink to="#" class="my-2">Forgot Password?</NuxtLink>
          <v-btn block color="success mt-2" type="button" @click="registerInstead">Register Account</v-btn>
        </v-form>
    </v-col>
  
  </v-row>
 
</template>

<script>
  export default {
    layout:'authentication',
    data(){
      return{
      valid: false,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Passowrd is required',
      ],
      }
    },

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      submit(){
        this.validate();
        if(this.username == '' || this.password == '' || !this.valid){    
          console.log('error');
        }else{
          console.log('submtting')
        }
      },
      registerInstead(){
        this.$router.replace('/auth/register');
      }
    },
  }
</script>

<style scoped>
#form-container{
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
}
</style>