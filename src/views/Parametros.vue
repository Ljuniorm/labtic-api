<template>
  <v-container>
    <v-col class="mb-4">
      <v-row>
        <h1 class="font-italic font-weight-bold">Header</h1>
        <v-spacer/>
        <v-btn class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>

    <hr />
    <v-col class="mb-4">
      <v-row>
        <h1 class="font-italic font-weight-bold">Params</h1>
        <v-spacer/>
        <v-btn class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>

    <hr />
    <v-col class="mb-4">
      <v-row>
        <h1 class="font-italic font-weight-bold">query</h1>
        <v-spacer/>
        <v-btn class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>

    <hr />
    <v-col class="mb-4">
      <v-row>
        <h1 class="font-italic font-weight-bold">Body</h1>
        <v-spacer/>
        <v-btn class="mx-7" fab dark color="grey" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>

    <hr />
  </v-container>
</template>

<script>
export default {
  name: "Parametros"
};
</script>
