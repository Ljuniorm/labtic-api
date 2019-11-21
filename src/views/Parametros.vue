<template>
  <v-container>
    <v-col>
      {{ pageOne.method }}
      {{ pageOne.name }}
      {{ pageOne.path }}
      {{ pageOne.description }}
      <v-row>
        <h1 class="font-italic font-weight-bold">Header</h1>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        </template>
        <span>Adicionar Header</span>
        </v-tooltip>
      </v-row>
    </v-col>
    <v-col cols="12" sm="5" md="12">
      <v-row>
        <v-text-field v-if="addHeader(on)"  label="Key" outlined></v-text-field>
        <v-text-field class="ml-3" label="Value" outlined></v-text-field>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn id="buttonSave" v-on="on" class="ml-3 mr-3" fab text dark color="green" small>
              <v-icon dark>mdi-content-save</v-icon>
            </v-btn>
          </template>
          <span>Save</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" fab text dark color="red" small>
              <v-icon dark>mdi-delete</v-icon></v-btn
            >
          </template>
          <span>Delete</span>
        </v-tooltip>
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
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Parametros",
  data(){
    return{
      key:'',
      value:'',
    }
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
    addHeader(){
     
    }
  }
};
</script>
