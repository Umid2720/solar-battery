<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar class="sticky top-0 z-50 bg-white pb-1 shadow-xl"/>
  <router-view>
  </router-view>
  <Footer />
</template>

