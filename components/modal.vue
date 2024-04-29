<template>
    <v-card>
      <v-toolbar
        color="cyan"
        dark
        flat
      >
        <template>
            <v-tabs
                v-model="tab"
                align-with-title
            >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                v-for="item in items"
                :key="item"
                @click="clicked(item)"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card>
            <keep-alive>
                <component :is="current"></component>
            </keep-alive>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </template>

<script>
import FormOne from './forms/FormOne.vue';
import FormTwo from './forms/FormTwo.vue';
import { shallowRef } from 'vue'

export default {
    components: { FormOne,FormTwo },
    data () {
        return {
        current : shallowRef(FormOne),
        tab: null,
        items: [
            'FormOne','FormTwo','FormOne','FormTwo','FormOne','FormTwo','FormOne','FormTwo','FormOne','FormTwo'
            ],
        }
    },
    methods:{
        clicked(item){
            this.current = item;
            console.log(item, this.tab)
        }
    }
}
</script>