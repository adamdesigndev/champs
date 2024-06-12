<template>
    <div class="mobile-menu" v-if="isOpen">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
  <style scoped>
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .mobile-menu nav ul {
    list-style: none;
    text-align: center;
  }
  
  .mobile-menu nav li {
    margin: 1rem 0;
  }
  
  .mobile-menu nav a {
    color: white;
    text-decoration: none;
    font-size: var(--font-size-large);
  }
  </style>