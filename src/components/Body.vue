<template>
  <v-container>
    <v-col>
      <v-row>
        <h1 class="font-italic font-weight-bold mt-3 ">{{ title }}</h1>
        <v-col sm="7" v-if="isActive">
          <v-select
            class="ml-8"
            v-model="type"
            :items="itemsType"
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

    
       <v-col v-if="type==='Value'"  > <!-- Value-->
        <v-row>
          <v-col sm="5">
            <v-text-field
              counter="15"
              v-model="key"
              label="Key"
              outlined
            ></v-text-field>
          </v-col>
          <v-col sm="5">
            <v-text-field
              counter="15"
              v-model="value"
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
                    @click="addItem"
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


      <v-col v-if="type==='Json'"  >
        <v-row>
          <v-col sm="1">
            <v-row>
              <!-- botoes -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    fab
                    text
                    color="green"
                    small
                    @click="addJsonItem"
                  >
                    <v-icon dark>mdi-content-save</v-icon>
                  </v-btn>
                </template>
                <span>Save</span>
              </v-tooltip>
            </v-row>
          </v-col>
          <v-col sm="3">
            <v-text-field
              counter="15"
              v-model="key"
              label="Key"
              outlined
            ></v-text-field>
          </v-col>
          <v-col sm=6>
              <v-row v-for="(value, index) in arrayValue" :key="index">
                <v-col sm="6">
                  <v-text-field
                    counter="15"
                    v-model="value.key"
                    class="ml-3"
                    label="Key"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col sm="6">
                  <v-text-field
                    counter="15"
                    v-model="value.value"
                    class="ml-3"
                    label="value"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
          </v-col>
          <v-col sm="1">
            <v-row>
              <!-- botoes -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    fab
                    text
                    color="green"
                    small
                    @click="addJsonElement"
                  >
                    <v-icon dark>mdi-table-column-plus-after</v-icon>
                  </v-btn>
                </template>
                <span>Aicionar novo elemento</span>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-col>


    <v-row  >
      <v-col v-if="items.length">
        <v-treeview open-on-click selected-color="red" @input="selectItem" selectable :items="items"></v-treeview>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapState } from "vuex";
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
  data() {
    return {
      dialog: false,
      valid: false,
      itemsType: ["Value", "Json", "Array"],
      key: "",
      value: "",
      arrayValue: [{
        key: '',
        value: '',
      }],
      textKeyValue: false,
      tree: false,
      mainKey: "",
      type: "",
      isActive: false,
      save: false,
    };
  },
  methods: {
    handleBody() {
      this.isActive = !this.isActive;
      this.type = "";
      this.textKeyValue= false
    },
    addJsonElement(){
      this.arrayValue.push({
        key: '',
        value:'',
      });
    },
    addItem(){
      this.$emit('addItem', {
        key: this.key,
        value: this.value,
      });
      this.type = '';
      this.key = '';
      this.value = '';
    },
    addJsonItem(){
      this.$emit('addItem', {
        key: this.key,
        value: this.arrayValue,
      })
      this.type = '';
      this.key = '';
      this.arrayValue = [{
        key: '',
        value: '',
      }];
    },
    selectItem(selected){
      console.log(selected);
    }
  }
};
</script>
