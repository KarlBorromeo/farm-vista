<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      style="background-color: #3FB07C;"
      class="pa-5"
    >
      <v-list-item>
        <v-list-item-title class="text-h6">
           FarmVista
          </v-list-item-title>
        <v-list-item-avatar>
          <img src="~assets/images/logo.png"></img>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="mb-2"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" style="overflow: visible;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      absolute
      hide-on-scroll
      app
      elevation="0"
      style="background-color: #1e1e2f"
      class="white--text"
    >
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-app-bar-title>{{ currentPageTitle }}</v-app-bar-title>
      <v-spacer />

      <v-list-item-avatar class="hidden-sm-and-down">
        <img src="https://randomuser.me/api/portraits/women/81.jpg">
      </v-list-item-avatar>
      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                icon
              >
                <v-icon class="white--text hidden-sm-and-down" v-bind="attrs" v-on="on">
                  mdi-menu-down
                </v-icon>
                <v-icon class="white--text hidden-md-and-up" v-bind="attrs" v-on="on">
                  mdi-dots-vertical
                </v-icon>
              </v-btn>       
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in dropdown"
                :key="index"
              >
                <v-list-item-title>
                    <v-btn>
                      <v-icon>{{ item.icon }}</v-icon>
                      {{ item.title }}
                    </v-btn>
                  </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-app-bar>

    <v-main style="background-color: #1e1e2f; ">
      <Nuxt />
    </v-main>
 
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-tablet-dashboard',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-account-key',
          title: 'Account',
          to: '/auth/login'
        },
        {
          icon: 'mdi-file-upload',
          title: 'Upload File',
          to: '/upload'
        },
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FarmVista',
      dropdown:[
        {
          icon: 'mdi-logout',
          title: 'Logout',
        },
      ]
    }
  },
  computed:{
    currentPageTitle(){
      console.log('pageTitle: ',this.$store.getters['pageNameGetter'])
      return this.$store.getters['pageNameGetter']
    }
  }
}
</script>