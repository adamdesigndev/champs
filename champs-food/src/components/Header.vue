<template>
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/cart">Cart ({{ cartItemCount }})</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cartItemCount = ref(0);
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffcc00;
  }
  
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav li {
    margin: 0 1rem;
  }
  
  nav a {
    text-decoration: none;
    color: black;
  }
  </style>