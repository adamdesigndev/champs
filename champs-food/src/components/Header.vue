<template>
    <header>
      <nav class="wrapper-nav-inner">
        <ul class="nav-menu-links">
          <li><a class="header-nav-links" href="/">Home</a></li>
          <li><a class="header-nav-links" href="/Menu">Menu</a></li>
          <li><a class="header-nav-links" href="/About">About</a></li>
        </ul>
        <a href="http://"><img class="header-logo" src="/images/Champs-head.svg" alt=""></a>
        <ul class="nav-menu-links">
          <li><a href="/Cart"><img class="cart-icon" src="/images/Bag-champs.svg" alt=""></a></li>
          <li><a class="header-nav-links" href="/Checkout"><button class="main-btn">Checkout</button></a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cartItemCount = ref(0);
  </script>
  
  <style scoped>
  /* header outer content wrapper */
.wrapper-header-outer {
  border-bottom: 1px solid #000;
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
  height: 1.8rem;
}

  </style>