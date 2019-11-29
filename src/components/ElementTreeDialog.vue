<template>
  <v-row justify="center">
    <v-dialog scrollable v-model="dialog" persistent max-width="1000">
      <v-card>
        <v-card-title class="headline">
          <v-row>
            <v-col cols="6">{{ title }}</v-col>
            <v-spacer />
            <v-col cols="1">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="mt-3"
                    v-on="on"
                    fab
                    dark
                    color="grey"
                    small
                    @click="addNewKey"
                  >
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>Adicionar nova chave</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-row v-for="(item, index) in element" :key="index">
                <v-col cols="11">
                  <child-element-tree-dialog
                    :index="index"
                    @inputKey="keyChange"
                    @inputValue="valueChange"
                  />
                </v-col>
                <v-col cols="1">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="mt-3"
                        v-on="on"
                        fab
                        dark
                        color="grey"
                        small
                        @click="removeKey(index)"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </template>
                    <span>Remover esta chave</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close">Disagree</v-btn>
          <v-btn color="green darken-1" text>Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import childElementTreeDialog from "./ChildElementTreeDialog.vue";
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Sem titulo"
    }
  },
  components: {
    childElementTreeDialog
  },
  data() {
    return {
      element: [
        {
          key: "",
          value: ""
        }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("closeDialog");
    },
    addNewKey() {
      this.element.push({
        key: "",
        value: ""
      });
    },
    removeKey(index) {
      if (this.element.length === 1) return;
      this.element.splice(index, 1);
    },
    keyChange(elementKey) {
      this.element[elementKey.index].key = elementKey.value;
      console.log('mudando a key', this.element);
    },
    valueChange(elementValue) {
      this.element[elementValue.index].value = elementValue.value;
      console.log('mudando o value', this.element);
    }
  }
};
</script>
