<template>
  <v-container>
    <v-form v-model="valid" ref="form">
      <v-col cols="12" sm="6" md="12">
        <v-text-field
          label="Nome da API"
          v-model="name"
          :rules="nameRules"
          outlined
          counter="15"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="12">
        <v-textarea
          v-model="description"
          :rules="descriptionRules"
          label="Descrição"
          outlined
          counter="200"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="6" md="12">
        <v-text-field
          v-model="path"
          label="Path"
          :rules="pathRules"
          outlined
          counter="25"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="12">
        <v-select
          :rules="methodRules"
          v-model="method"
          label="Metódo"
          outlined
          :items="methods"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="12" column>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn
            color="#424242"
            class="white--text ml-4"
            :disabled="!valid"
            @click="nextPage"
            >Proximo</v-btn
          >
        </v-row>
      </v-col>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_PAGE_ONE } from "../store/mutations";

export default {
  name: "Home",
  data: () => ({
    name: "",
    description: "",
    path: "/",
    valid: false,
    method: "",
    methods: ["GET", "PUT", "POST", "DELETE"],
    nameRules: [
      v => !!v || "nome é obrigatorio",
      v => v.length <= 10 || "O nome deve ter menos de 10 caracteres"
    ],
    pathRules: [
      v => !!v || "Path é obrigatorio",
      v => v.length <= 25 || "O path deve ter menos de 25 caracteres",
      v => v.length > 2 || "O path deve ter mais de 2 caracteres"
    ],
    descriptionRules: [
      v => !!v || "Descrição é obrigatorio",
      v => v.length <= 200 || "A descrição deve ter menos de 200 caracteres"
    ],
    methodRules: [v => !!v || "Escolha um Método"]
  }),
  methods: {
    ...mapMutations([SET_PAGE_ONE]),
    nextPage() {
      this[SET_PAGE_ONE]({
        name: this.name,
        description: this.description,
        path: this.path,
        method: this.method
      });
      this.$router.push("/Parametros");
    }
  }
};
</script>
