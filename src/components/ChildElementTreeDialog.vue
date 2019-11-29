<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-select
        :items="items"
        v-model="item"
        label="Selecione o tipo de valor"
        outlined
      ></v-select>
    </v-col>

    <v-col cols="12" v-if="item !== 'Nada'">
      <v-row v-if="item === 'Valor'">
        <v-col cols="12">
          <v-text-field label="Chave" outlined @input="keyChange" />
        </v-col>
      </v-row>
      <v-row v-if="item === 'JSON'">
        <v-col cols="11">
          <v-text-field label="Chave" outlined @input="keyChange" />
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
                @click="addNewKey"
              >
                <v-icon dark>mdi-playlist-plus</v-icon>
              </v-btn>
            </template>
            <span>Adicionar nova chave</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-col>
    <v-col v-if="item === 'Valor'" cols="12">
      <v-text-field
        label="Digite o valor"
        outlined
        @input="valueChange"
      ></v-text-field>
    </v-col>
    <v-col cols="12" v-if="item === 'JSON'">
      {
      <div style="margin-left: 2em">
        <v-row v-for="(item, index) in jsons" :key="index">
          <v-col cols="11">
              <child-element-dialog :index="index" />
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
      </div>
      }
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    childElementDialog: () => import("./ChildElementTreeDialog.vue")
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      value: "",
      item: "Nada",
      items: ["Nada", "Valor", "JSON"],
      jsons: [
        {
          key: "",
          value: ""
        }
      ]
    };
  },
  methods: {
    keyChange(value) {
      this.$emit("inputKey", { value, index: this.index });
    },
    valueChange(value) {
      this.$emit("inputValue", { value, index: this.index });
    },
    addNewKey() {
      this.jsons.push({
        key: "",
        value: ""
      });
    },
    removeKey(index){
        if(this.jsons.length === 1) return;
        this.jsons.splice(index, 1);
    }
  }
};
</script>
