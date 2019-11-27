<template>
  <v-container>
    <!-- FIM HEADERS-->
    <div>
      <parameters
        title="Header"
        tooltip="Adicionar Header"
        :items="headers"
        @save="saveHeader"
        closeTooltip="Remover Header"
      />
    </div>
    <hr />
    <div>
      <parameters
        title="Params"
        tooltip="Adicionar Params"
        :items="params"
        @save="saveParams"
        closeTooltip="Remover Params"
      />
    </div>

    <!-- FIM PARAMS -->
    <hr />
    <!-- QUERY -->
    <div>
      <parameters
        title="Query"
        tooltip="Adicionar Query"
        :items="query"
        @save="saveQuery"
        closeTooltip="Remover Query"
      />
    </div>
    <!-- FIM QUERY -->

    <hr />
    <!-- v-if="pageOne.method === 'POST' || pageOne.method === 'PUT'" -->
    <Body  title="Body" tooltip="Adicionar Body" :items="body" @addItem="addItemBody" />
    <v-col>
      <v-row>
        <v-spacer />
        <v-btn @click="gerar">Gerar</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Parameters from "../components/Parameters";
import Body from "../components/Body";
export default {
  components: {
    Parameters,
    Body,
  },
  name: "Parametros",
  data() {
    return {
      headers: [],
      params: [],
      query: [],
      body: [],
      count: 1,
    };
  },
  computed: {
    ...mapState({
      pageOne: state => state.reqModel.pageOne
    })
  },
  methods: {
    gerar() {
      this.$router.push("/Api");
    },
    addHeader() {
      this.primaryHeader = true;
    },
    saveHeader(toCreate) {
      this.headers.push(toCreate);
    },
    saveParams(toCreate) {
      this.params.push(toCreate);
    },
    saveQuery(toCreate) {
      this.query.push(toCreate);
    },
    removeHeader() {
      this.primaryHeader = false;
      this.toCreate = { key: "", value: "" };
    },
    addItemBody(item){
      if(Array.isArray(item.value)) console.log('isso é um array');
      this.body.push({
        id: this.count,
        name: `${item.key} : ${item.value}`
      })
      this.count++;
    }
  }
};
</script>
