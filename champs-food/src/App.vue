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
// Importing core libraries and components
import { ref, provide } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MobileMenu from './components/MobileMenu.vue';

// Reactive state for mobile menu visibility
const isMenuOpen = ref(false);

/**
 * Toggles the mobile menu open/close state
 */
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Provide global state and function for menu control to child components
provide('isMenuOpen', isMenuOpen);
provide('toggleMenu', toggleMenu);
</script>

<style>
.full-height {
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
