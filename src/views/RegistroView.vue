<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <div>
        <input
          type="email"
          v-model="email"
          placeholder="Correo Electronico"
          required
        />
      </div>
      <div>
        <input
          type="password"
          v-model="password"
          placeholder="Contraseña"
          required
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>

    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    <p>
      ¿Ya tienes una cuenta?
      <router-link to="/login">Inicia sesión aquí</router-link>
    </p>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../auth.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        console.log("Usuario creado", userCredential);

        this.email = "";
        this.password = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
