<template>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Mi Ecommerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Inicio</v-btn>
      <v-btn text to="/productos">Productos</v-btn>
      <v-btn text to="/contacto">Contacto</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  