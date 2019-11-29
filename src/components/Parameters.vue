<template>
  <v-container>
    <v-form v-model="valid">
      <v-col>
        <v-row>
          <v-col cols="4">
            <h1 class="font-italic font-weight-bold">{{ title }}</h1>
          </v-col>
          <v-spacer />
          <v-col cols="1" v-if="!isActive">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="mt-3"
                  v-on="on"
                  fab
                  dark
                  color="grey"
                  small
                  @click="addHeader"
                >
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltip }}</span>
            </v-tooltip>
          </v-col>
          <v-col cols="1" v-else>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="mt-3"
                  v-on="on"
                  fab
                  dark
                  color="grey"
                  small
                  @click="addHeader"
                >
                  <v-icon dark>mdi-minus</v-icon>
                </v-btn>
              </template>
              <span>{{ closeTooltip }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="isActive">
        <v-row>
          <!-- ADD CLICK -->
          <v-col sm="5">
            <v-text-field
              counter="15"
              :rules="keyRules"
              v-model="toCreate.key"
              label="Key"
              outlined
            ></v-text-field>
          </v-col>
          <v-col sm="5">
            <v-text-field
              counter="15"
              :rules="valueRules"
              v-model="toCreate.value"
              class="ml-3"
              label="Value"
              outlined
            ></v-text-field>
          </v-col>
          <v-col sm="2">
            <v-row>
              <!-- botoes -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    id="buttonSave"
                    v-on="on"
                    fab
                    text
                    color="green"
                    small
                    @click="saveHeader"
                    :disabled="!valid"
                  >
                    <v-icon dark>mdi-content-save</v-icon>
                  </v-btn>
                </template>
                <span>Save</span>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-form>

    <v-col v-if="items.length">
      <v-row v-for="(item, index) in items" :key="index"
        ><!-- usar o v-for PARA CLICAR NO SAVE -->
        <v-col sm="5">
          <v-icon large left>
            mdi-key
          </v-icon>
          <span class="title font-weight-light">{{ item.key }}</span>
        </v-col>
        <v-col sm="5">
          <v-icon large left>
            mdi-alpha-v-circle
          </v-icon>
          <span class="title font-weight-light">{{ item.value }}</span>
        </v-col>
        <v-col sm="2">
          <v-row>
            <!-- botoes -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  fab
                  text
                  dark
                  color="red"
                  small
                  @click="deleteSave(index)"
                >
                  <v-icon dark>mdi-delete</v-icon></v-btn
                >
              </template>
              <span>Delete</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Parameters",
  props: {
    title: {
      type: String,
      default: "Informe um titulo"
    },
    tooltip: {
      type: String,
      default: "informe um tooltip"
    },
    closeTooltip: {
      type: String
    },
    items: {
      type: Array,
      required: false,
      default: []
    }
  },
  data() {
    return {
      isActive: false,
      toCreate: {
        key: "",
        value: ""
      },
      headers: [],
      params: [],
      save: false,
      valid: false,
      keyRules: [
        v => !!v || "A key precisa ser preenchida!",
        v => v.length < 15 || "É recomendado a key ter menos que 15 caracteres"
      ],
      valueRules: [
        v => !!v || "O value precisa ser preenchida!",
        v => v.length < 15 || "É recomendado value ter menos que 15 caracteres!"
      ]
    };
  },
  methods: {
    addHeader() {
      this.isActive = !this.isActive;
      this.toCreate = { key: "", value: "" };
    },
    saveHeader() {
      this.$emit("save", {
        key: this.toCreate.key,
        value: this.toCreate.value
      });
      this.toCreate = {
        key: "",
        value: ""
      };
    },
    saveParams() {
      this.$emit("save", {
        key: this.toCreate.key,
        value: this.toCreate.value
      });
      this.toCreate = {
        key: "",
        value: ""
      };
    },
    saveQuery() {
      this.$emit("save", {
        key: this.toCreate.key,
        value: this.toCreate.value
      });
      this.toCreate = {
        key: "",
        value: ""
      };
    },
    deleteSave(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>
