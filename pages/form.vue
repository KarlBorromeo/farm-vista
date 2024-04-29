<template>
    <v-row justify="center" class="mt-3">
      <v-dialog
        v-model="dialog"
        width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
            <modal-vue></modal-vue>
        </v-card>
      </v-dialog>
      <!-- <form-one></form-one> -->
    </v-row>
  </template>

<script>
import modalVue from '~/components/modal.vue'
export default {
    components: {modalVue},
    data () {
        return {
        dialog: false,
        }
    },
}
</script>