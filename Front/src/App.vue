<template>
    <v-app>
      <navbar v-if="showNavbar"></navbar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Navbar from "./components/Navbar.vue";
  
  export default {
    components: {
      Navbar,
    },
    computed: {
      showNavbar() {
        return this.$route.path !== "/login" && this.$route.path !== "/register";
      },
    },
  };
  </script>
  