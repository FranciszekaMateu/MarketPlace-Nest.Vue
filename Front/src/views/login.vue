<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Iniciar Sesión</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" @submit.prevent="iniciarSesion">
                <v-text-field label="Correo Electrónico" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field label="Contraseña" v-model="password" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" required></v-text-field>
                <v-btn type="submit" :disabled="!valid" color="primary">Iniciar Sesión</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: true,
        email: '',
        password: '',
        showPassword: false,
        emailRules: [
          v => !!v || 'El correo electrónico es obligatorio',
          v => /.+@.+\..+/.test(v) || 'Debe ser un correo electrónico válido',
        ],
      };
    },
    methods: {
      iniciarSesion() {
        if (this.$refs.form.validate()) {
          // Aquí puedes añadir la lógica para iniciar sesión, por ejemplo, llamando a un API.
          console.log('Iniciando sesión con:', this.email, this.password);
        }
      },
    },
  };
  </script>
  