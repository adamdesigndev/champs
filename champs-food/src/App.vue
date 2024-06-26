<!-- App.vue -->
<template>
  <div class="full-height">
    <Header />
    <MobileMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MobileMenu from './components/MobileMenu.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

provide('isMenuOpen', isMenuOpen);
provide('toggleMenu', toggleMenu);
</script>

<style>
/* Makes sure footer always stick to bottom of page */
.full-height {
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
