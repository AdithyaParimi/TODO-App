<script setup la
  components: { Nav },ng="ts">


import Nav from './components/Nav.vue';
import "bootstrap/dist/css/bootstrap.css";


</script>

<template>
  <Nav />

<div class="container">
       <router-view />
  </div>

  


</template>

<style>
</style>