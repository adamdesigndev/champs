<!-- MobileMenu.vue -->
<template>
  <div class="mobile-menu" v-if="isMenuOpen">
    <nav>
      <ul>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Cart">Bag</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Home">Home</a></li>
      </ul>
    </nav>
    <img class="mobile-menu-logo" src="/images/logo-mobile-menu.svg" alt="">
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, inject } from 'vue';

const isMenuOpen = inject('isMenuOpen');
const toggleMenu = inject('toggleMenu');

const handleResize = () => {
  if (window.innerWidth > 850 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const toggleNoScrollClass = () => {
  if (isMenuOpen.value) {
    document.documentElement.classList.add('no-scroll');
  } else {
    document.documentElement.classList.remove('no-scroll');
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Ensure initial state is correct
  toggleNoScrollClass();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

  watch(isMenuOpen, () => {
    handleResize();
    toggleNoScrollClass();
});
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-primary);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  z-index: 1000; /* Ensure mobile menu is below the header */
  padding: 6rem 1rem 1rem 1rem;
}

.mobile-menu nav ul {
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-menu nav a {
  color: #fff;
  text-decoration: none;
  font-size: var(--fs-900);
  font-weight: 600;
  line-height: 4rem;
}

.mobile-menu-logo {
  position: absolute;
  left: 50%;
  bottom: -5%;
  transform: translateX(-50%);
}
</style>