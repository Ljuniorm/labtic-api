<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <div>
      <span>APP-DOC</span>
    </div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
