<!-- Header.vue -->
<template>
  <header class="wrapper-header-outer">
    <nav class="wrapper-nav-inner">
      <button class="hamburger mobile-header" @click="toggleMenu">
        <img src="/images/mobile-nav-hamburger.svg" alt="Hamburger Menu">
      </button>
      <ul class="nav-menu-links desktop-header">
        <li><a class="header-nav-links" href="/">Home</a></li>
        <li><a class="header-nav-links" href="/Menu">Menu</a></li>
        <li><a class="header-nav-links" href="/About">About</a></li>
      </ul>
      <a class="desktop-header" href="http://"><img class="header-logo" src="/images/Champs-head.svg" alt="Logo"></a>
      <a class="mobile-header" href="/Home"><img src="/images/logo-comb-mobile.svg" alt="Logo"></a>
      <ul class="nav-menu-links">
        <li><a href="/Cart"><img class="cart-icon" src="/images/Bag-champs.svg" alt="Cart"></a></li>
        <li class="desktop-header"><a class="header-nav-links" href="/Checkout"><button class="main-btn">Checkout</button></a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue';

const toggleMenu = inject('toggleMenu');
const isMenuOpen = inject('isMenuOpen');
</script>

<style scoped>
/* header outer content wrapper */
.wrapper-header-outer {

  background-color: #fff;
  position: relative;
  z-index: 2000; /* Ensure header is above the mobile menu */
}

.wrapper-nav-inner {
  max-width: 2400px;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

.nav-menu-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.header-nav-links {
  font-size: var(--fs-300);
  font-weight: 500;
}

.header-logo {
  height: 3.5rem;
}

.cart-icon {
  width: 1.2rem;
}

.mobile-header {
  display: none;
}

.hamburger {
  border: none;
  background-color: #fff;
  cursor: pointer;
}

.hamburger img {
  width: 25px;
}

@media (width < 850px) {
  .mobile-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .desktop-header {
    display: none;
  }
}
</style>