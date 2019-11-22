<template>
  <v-container>
    {{ pageOne.method }}
      {{ pageOne.name }}
      {{ pageOne.path }}
      {{ pageOne.description }}
    <v-col>
      <v-row>
        <h1 class="font-italic font-weight-bold">Header</h1>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn @click="addHeader" v-on="on" class="mx-7" fab dark color="grey" small>
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Adicionar Header</span>
        </v-tooltip>
      </v-row>
    </v-col>
    <v-col>
      <v-row v-if="primaryHeader"> <!-- ADD CLICK -->
        <v-col sm="5">
          <v-text-field v-model="toCreate.key" label="Key" outlined></v-text-field>
        </v-col>
        <v-col sm="5">
          <v-text-field v-model="toCreate.value" class="ml-3" label="Value" outlined></v-text-field>
        </v-col>
        <v-col sm="2">
          <v-row> <!-- botoes -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  id="buttonSave"
                  v-on="on"
                  fab
                  text
                  dark
                  color="green"
                  small
                  @click="saveHeader"
                >
                  <v-icon dark>mdi-content-save</v-icon>
                </v-btn>
              </template>
              <span>Save</span>
            </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn @click="removeHeader" v-on="on" fab text dark color="red" small>
                    <v-icon dark>mdi-delete</v-icon></v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
      <v-row v-for="(header, index) in headers" :key="index"><!-- usar o v-for PARA CLICAR NO SAVE -->
        <v-col sm="5">
          <v-icon large left>
            mdi-key
          </v-icon>
          <span class="title font-weight-light">{{header.key}}</span>
        </v-col>
        <v-col sm="5">
           <v-icon large left>
            mdi-alpha-v-circle
          </v-icon>
          <span class="title font-weight-light">{{header.value}}</span>
        </v-col>
        <v-col sm="2">
          <v-row> <!-- botoes -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" fab text dark color="red" small @click="teste(index)">
                    <v-icon dark>mdi-delete</v-icon></v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      
    <hr />
    <v-col>
      <v-row>
        <h1 class="font-italic font-weight-bold">Params</h1>
        <v-spacer />
        <v-btn class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>


    <hr />
    <v-col>
      <v-row>
        <h1 class="font-italic font-weight-bold">query</h1>
        <v-spacer />
        <v-btn class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>

    <hr />
    <v-col v-if="pageOne.method === 'POST' || pageOne.method === 'PUT'">
      <v-row>
        <h1 class="font-italic font-weight-bold">Body</h1>
        <v-spacer />
        <v-btn @click="nextTwoPage" class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <v-spacer/>
    <v-btn dark>Gerar</v-btn>
    </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Parametros",
  data() {
    return {
      primaryHeader: false,
      toCreate: {
        key: "",
        value: "",
      },
      headers:[],
      save: false,
    };
  },
  computed: {
    ...mapState({
      pageOne: state => state.reqModel.pageOne
    })
  },
  methods: {
    nextTwoPage() {
      this.$router.push("/Api");
    },
    addHeader() {
      this.primaryHeader = true;
    },
    saveHeader() {
      this.headers.push(this.toCreate);
      this.toCreate = {key:"", value:"",}
      this.primaryHeader = false;
    },
    removeHeader(){
      this.primaryHeader = false;
      this.key = '';
      this.value = '';
    },
    teste(index){
      console.log(index);
    }
  }
};
</script>
