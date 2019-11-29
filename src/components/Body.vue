<template>
  <v-container>
    <v-col>
      <v-row>
        <v-col cols="4">
          <h1 class="font-italic font-weight-bold mt-3 ">{{ title }}</h1>
        </v-col>
        <v-spacer />
        <v-col cols="1" v-if="!showItems">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                class="mt-3"
                v-on="on"
                fab
                dark
                color="grey"
                small
                @click="showItems = true"
              >
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>{{ tooltip }}</span>
          </v-tooltip>
        </v-col>

        <v-col cols="2" v-else>
          <v-row>
            <v-col cols="6">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="mt-3"
                    v-on="on"
                    fab
                    dark
                    color="grey"
                    small
                    @click="showAddElementDialog = true"
                  >
                    <v-icon dark>mdi-sitemap</v-icon>
                  </v-btn>
                </template>
                <span>Adicionar novo elemento</span>
              </v-tooltip>
            </v-col>
            <v-col cols="6">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="mt-3"
                    v-on="on"
                    fab
                    dark
                    color="grey"
                    small
                    @click="showItems = false"
                  >
                    <v-icon dark>mdi-minus</v-icon>
                  </v-btn>
                </template>
                <span>Ocultar</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <element-tree-dialog
      :dialog="showAddElementDialog"
      title="Adicionar Body"
      @closeDialog="closeDialog"
    />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ElementTreeDialog from "./ElementTreeDialog.vue";
export default {
  name: "Body",
  props: {
    title: {
      type: String,
      default: "informe um titulo"
    },
    tooltip: {
      type: String
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  components: {
    ElementTreeDialog
  },
  data() {
    return {
      showItems: false,
      showAddElementDialog: false
    };
  },
  methods: {
    closeDialog() {
      this.showAddElementDialog = false;
    }
  }
};
</script>
