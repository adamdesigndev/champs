<template>
    <nav class="mini-nav">
      <ul>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/checkout">User Information</a></li>
        <li><a href="/payment">Payment Information</a></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .mini-nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 1rem;
    background-color: var(--secondary-color);
  }
  
  .mini-nav li a {
    color: white;
    text-decoration: none;
  }
  </style>