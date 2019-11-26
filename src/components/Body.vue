<template>
  <v-container>
    <!-- <v-col v-if="pageOne.method === 'POST' || pageOne.method === 'PUT'"> -->
    <v-col>
      <v-row>
        <h1 class="font-italic font-weight-bold mt-3 ">{{ title }}</h1>
        <v-col sm="7" v-if="isActive">
          <v-select
            class="ml-8"
            v-model="type"
            :items="items"
            label="Types"
            outlined
          ></v-select>
        </v-col>
        <v-spacer />
        <v-tooltip bottom v-if="!isActive">
          <template v-slot:activator="{ on }">
            <v-btn
              class="mt-3"
              v-on="on"
              fab
              dark
              color="grey"
              small
              @click="handleBody"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>{{ tooltip }}</span>
        </v-tooltip>
        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mt-3"
              v-on="on"
              fab
              dark
              color="grey"
              small
              @click="handleBody"
            >
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
          </template>
          <span>Remover body</span>
        </v-tooltip>
      </v-row>
    </v-col>
    <v-col sm="12">
      <v-row v-if="type === 'Value'">
        <v-col sm="5">
          <v-text-field label="key" outlined></v-text-field>
        </v-col>
        <v-col sm="5">
          <v-text-field label="Value" outlined></v-text-field>
        </v-col>
        <v-col>
           <v-btn outlined class="mt-2 ml-3" fab dark color="green" small>
            <v-icon  >mdi-content-save</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="type === 'Json'">
        <v-col sm="5">
          <v-text-field label="key" outlined></v-text-field>
        </v-col>
        <v-col sm="5">
          <v-text-field label="Value" outlined></v-text-field>
        </v-col>
        <v-col sm="1">
          <v-row>
          <v-btn outlined class="mt-2" fab dark color="black" small>
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
          <v-btn outlined class="mt-2 ml-3" fab dark color="green" small>
            <v-icon  >mdi-content-save</v-icon>
          </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { METHODS } from "http";
export default {
  name: "Body",
  props: {
    title: {
      type: String,
      default: "informe um titulo"
    },
    tooltip: {
      type: String
    }
  },
  data() {
    return {
      dialog: false,
      valid: false,
      items: ["Value", "Json", "Array"],
      key: "",
      type: "",
      isActive: true
    };
  },
  computed: {
    ...mapState({
      pageOne: state => state.reqModel.pageOne
    })
  },
  methods: {
    handleBody() {
      this.isActive = !this.isActive;
      this.type = "";
    }
  }
};
</script>
