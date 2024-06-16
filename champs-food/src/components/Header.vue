<template>
    <header>
      <nav class="wrapper-nav-inner">
        <ul class="nav-menu-links">
          <li><a class="header-nav-links" href="/">Home</a></li>
          <li><a class="header-nav-links" href="/menu">Menu</a></li>
          <li><a class="header-nav-links" href="/about">About</a></li>
        </ul>
        <a href="http://"><img class="header-logo" src="/images/Champs-head.svg" alt=""></a>
        <ul class="nav-menu-links">
          <li><a href="/cart"><img class="cart-icon" src="/images/Bag-champs.svg" alt=""></a></li>
          <li><button class="main-btn">Start Order</button></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cartItemCount = ref(0);
  </script>
  
  <style scoped>
.nav-menu-links {
  display: flex;
  flex-direction: row;
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
  height: 1.5rem;
}

  </style>