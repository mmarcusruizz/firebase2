 
<template>
  <div>
      <router-link to="/">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/registro">Registro</router-link>
      <router-link v-if="isLoggedIn" to="/about">About</router-link>
      <button v-if="isLoggedIn" @click="logout">Cerrar Sesión</button>
 
      <router-view></router-view>
  </div>
</template>
 
<script>
 
import {auth, signOut, onAuthStateChanged} from './auth.js'
 
 
  export default {
 
     data(){  
        return {
          isLoggedIn: false
        }
     },
     created(){
        onAuthStateChanged(auth,(user)=>{
 
          if(user){
            this.isLoggedIn = true
          }else{
            this.isLoggedIn = false
          }
 
          // this.isLoggedIn = user ? true : false
          // this.isLoggedIn = !!user
 
        })
     },
     methods:{
      async logout(){
        await signOut(auth)
        this.$router.push('/login')
      }
     }
  }
</script>
 
<style scoped>
</style>
 