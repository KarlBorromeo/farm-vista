<template>
  <v-row
    class="d-flex justify-center align-center"
    style="height: 100vh;"
  >
    <v-col
    cols="4"
    class="text-center rounded-lg"
    style="background-color: #E9B96E;">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submit"
        >
        <h1>Log in</h1>
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
          <v-btn block color="warning mt-2" type="button">Register Account</v-btn>
        </v-form>
    </v-col>
  
  </v-row>
 
</template>

<script>
  export default {
    layout:'authentication',
    data: () => ({
      valid: false,
      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Passowrd is required',
      ],
    }),

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
      }
    },
  }
</script>

<style scoped>

</style>