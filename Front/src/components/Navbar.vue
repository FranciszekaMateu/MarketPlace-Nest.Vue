<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mi Tienda</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/productos">Productos</v-btn>
      <v-btn text to="/iniciar-sesion">Iniciar Sesión</v-btn>
      <v-btn text to="/registrarse">Registrarse</v-btn>
      <v-btn icon to="/carrito">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  